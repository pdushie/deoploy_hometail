"use client";

import Pricing from "@/app/(pages)/landing/Pricing";
import ButtonCustomerPortal from "@/app/(pages)/subscribe/_components/ButtonCustomerPortal";

const Subscribe = () => {
  return (
    <div className="min-h-screen">
      <Pricing width={`w-[500px] max-sm:w-[350px]`} title={"Subscribe"} />
      <ButtonCustomerPortal />
    </div>
  );
};
export default Subscribe;
