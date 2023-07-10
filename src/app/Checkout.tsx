"use client";
import getStipePromise from "./lib/stripe";

const products = [
  {
    product: 1,
    name: "Stripe Product",
    price: 400,
    quantity: 3,
  },
  {
    product: 2,
    name: "Stripe Product2",
    price: 40,
    quantity: 2,
  },
  {
    product: 3,
    name: "Stripe Product23",
    price: 4000,
    quantity: 1,
  },
];

const StripeCheckOutButton = () => {
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5">
      <button
        className="flex gap-3 w-full justify-center py-4 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        onClick={handleCheckout}
      >
        Check out
      </button>
    </div>
  );
};

export default StripeCheckOutButton;
