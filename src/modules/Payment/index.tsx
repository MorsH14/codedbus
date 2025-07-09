"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import PaystackButton to disable SSR
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function PaymentPage() {
  const [email, setEmail] = useState("");

  const publicKey = "pk_test_xxxxxxxxxxxxxxx"; // Replace with your real Paystack public key
  const amount = 15000 * 100; // Amount in kobo

  const componentProps = {
    email,
    amount,
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Email",
          variable_name: "customer_email",
          value: email,
        },
      ],
    },
    text: "Pay ₦15,000",
    onSuccess: () => alert("Payment successful!"),
    onClose: () => alert("Payment cancelled"),
  };

  return (
    <main style={{ maxWidth: "400px", margin: "auto", padding: "40px 20px" }}>
      <h2>Buy Access to Course</h2>
      <p>Price: ₦15,000</p>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <PaystackButton {...componentProps} />
    </main>
  );
}
