// app/policy/[type]/page.jsx
"use client";
import { useParams } from "next/navigation";
import React from "react";

const policyData = {
  booking: {
    title: "Booking Policy",
    content: `
      1. Guests must provide valid ID at check-in.
      2. Full payment may be required in advance.
      3. Bookings are confirmed only after email confirmation.
    `,
  },
  cancellation: {
    title: "Cancellation Policy",
    content: `
      1. Free cancellation within 24 hours of booking.
      2. 50% charge for cancellations made 1-2 days before check-in.
      3. No refunds on the day of check-in.
    `,
  },
  refund: {
    title: "Refund Policy",
    content: `
      1. Refunds processed within 7-10 business days.
      2. Refunds are made via the original payment method.
      3. Processing fees are non-refundable.
    `,
  },
};

export default function PolicyPage() {
  const { type } = useParams();
  const policy = policyData[type];

  if (!policy) {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold text-red-500">Policy Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8 text-slate-800">
      <h1 className="text-4xl font-bold mb-6 text-[#fcd869]">{policy.title}</h1>
      <p className="whitespace-pre-line leading-relaxed text-lg">
        {policy.content}
      </p>
    </div>
  );
}
