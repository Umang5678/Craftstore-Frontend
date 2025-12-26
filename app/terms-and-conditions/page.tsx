"use client";

export default function TermsAndConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-[#5B4636] bg-[#FFF8F2]">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#A67843]">
        Terms and Conditions
      </h1>

      <p className="mb-4">
        Welcome to <strong>TheCrafiStore</strong>. By accessing our website, you
        agree to the terms below:
      </p>

      <ul className="list-decimal pl-6 space-y-2">
        <li>
          <strong>General:</strong> By using this site, you agree to comply with
          all applicable laws and policies.
        </li>
        <li>
          <strong>Product Information:</strong> Handcrafted items may have minor
          variations in color or texture.
        </li>
        <li>
          <strong>Pricing & Payment:</strong> All prices are in INR. Payments
          are processed securely through trusted gateways.
        </li>
        <li>
          <strong>Order Cancellation:</strong> We reserve the right to cancel
          orders due to incorrect info or stock unavailability.
        </li>
        <li>
          <strong>Liability:</strong> We’re not liable for delays caused by
          courier services or misuse of products.
        </li>
      </ul>

      <p className="mt-6">
        By using this website, you agree to these terms and our other policies.
      </p>
    </main>
  );
}
