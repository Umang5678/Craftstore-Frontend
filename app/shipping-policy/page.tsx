"use client";

export default function ShippingPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-[#5B4636] bg-[#FFF8F2]">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#A67843]">
        Shipping Policy
      </h1>

      <p className="mb-4">
        At <strong>TheCrafiStore</strong>, we aim to deliver your handcrafted
        products quickly and safely.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Processing Time:</strong> Orders are processed within 1–3
          business days (excluding Sundays and holidays).
        </li>
        <li>
          <strong>Shipping Time:</strong> Delivery usually takes 4–7 business
          days depending on your location.
        </li>
        <li>
          <strong>Shipping Charges:</strong> Free on orders above ₹499. Standard
          ₹49 below ₹499.
        </li>
        <li>
          <strong>Order Tracking:</strong> You’ll receive an email or SMS with
          tracking details once shipped.
        </li>
        <li>
          <strong>Delayed or Missing Orders:</strong> If your order hasn’t
          arrived in 10 days, email support@thecrafistore.com.
        </li>
      </ul>
    </main>
  );
}
