"use client";

export default function ContactUs() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-[#5B4636] bg-[#FFF8F2]">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#A67843]">
        Contact Us
      </h1>
      <p className="mb-4">
        We’re always happy to help you! Please reach out to us using the contact
        information below.
      </p>

      <div className="space-y-3 mt-6">
        <p>
          <strong>Email:</strong> support@thecrafistore.com
        </p>
        <p>
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Business Hours:</strong> Monday to Saturday – 10:00 AM to 7:00
          PM
        </p>
        <p>
          <strong>Address:</strong> TheCrafiStore, Ahmedabad, Gujarat, India –
          382350
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-600">
        You can also reach us through our website’s contact form or social media
        pages.
      </p>
    </main>
  );
}
