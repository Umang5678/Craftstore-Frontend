"use client";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-[#5B4636] bg-[#FFF8F2]">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#A67843]">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At <strong>TheCrafiStore</strong>, we value your privacy and are
        committed to protecting your personal information.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Information We Collect:</strong> Name, email, phone, and
          address for processing orders.
        </li>
        <li>
          <strong>How We Use It:</strong> To deliver your orders, send updates,
          and improve our services.
        </li>
        <li>
          <strong>Data Security:</strong> We use SSL encryption and trusted
          gateways to secure your data.
        </li>
        <li>
          <strong>Cookies:</strong> Used for better site experience and
          analytics.
        </li>
        <li>
          <strong>Third-Party Sharing:</strong> Shared only with logistics and
          payment partners when required.
        </li>
      </ul>

      <p className="mt-6">
        For any questions, email us at{" "}
        <strong>support@thecrafistore.com</strong>.
      </p>
    </main>
  );
}
