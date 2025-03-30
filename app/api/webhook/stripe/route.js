import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY);
const webhookSecret = process.env.STRIPE_TEST_WEBHOOK_SECRET;

export const POST = async (req) => {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  const data = event.data;
  const eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          data.object.id,
          { expand: ["line_items"] }
        );

        const customerId = session?.customer;
        const customer = await stripe.customers.retrieve(customerId);
        const priceId = session?.line_items.data[0].price.id;

        let user = await prisma.user.findUnique({
          where: { email: customer.email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: customer.email,
              customerId: customer.id,
            },
          });
        }

        await prisma.user.update({
          where: { email: customer.email },
          data: {
            priceId: priceId,
            customerId: customer.id,
            isSubscribed: true,
          },
        });

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = await stripe.subscriptions.retrieve(
          data.object.id
        );

        await prisma.user.updateMany({
          where: { customerId: subscription.customer },
          data: {
            isSubscribed: false,
          },
        });

        break;
      }
    }
  } catch (error) {
    console.log(
      "stripe error: " + error.message + " | EVENT TYPE: " + eventType
    );
  }

  return NextResponse.json({});
};
