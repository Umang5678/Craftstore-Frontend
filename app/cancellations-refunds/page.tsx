"use client";

export default function CancellationsRefunds() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-[#5B4636] bg-[#FFF8F2]">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#A67843]">
        Cancellations & Refunds
      </h1>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Order Cancellation:</strong> You can cancel your order within
          24 hours by emailing support@thecrafistore.com.
        </li>
        <li>
          <strong>Returns:</strong> Accepted only for damaged or incorrect items
          within 48 hours of delivery (with unboxing video).
        </li>
        <li>
          <strong>Refunds:</strong> Processed within 5–7 working days to the
          original payment method after approval.
        </li>
        <li>
          <strong>Non-Returnable Items:</strong> Personalized or custom-made
          items are non-returnable unless damaged in transit.
        </li>
      </ul>
    </main>
  );
}
