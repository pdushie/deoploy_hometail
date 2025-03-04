import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    newUser: {
      type: Boolean,
      required: true,
      default: true,
    },
    uses: {
      type: Number,
      required: true,
      default: 0,
    },
    isSubscribed: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
    hasAccess: {
      type: Boolean,
      required: true,
      default: true,
    },
    // Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
    customerId: {
      type: String,
      validate(value) {
        return value.includes("cus_");
      },
    },
    // Used in the Stripe webhook. should match a plan in config.js file.
    priceId: {
      type: String,
      validate(value) {
        return value.includes("price_");
      },
    },
    token: {
      type: String,
    },
    tokenExpiration: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
