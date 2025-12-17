"use client";
import { useEffect, useState } from "react";

const messages = [
  "Free shipping on orders above ₹499/-",
  "Get 10% OFF on orders of ₹1200/-",
  "Delivery may take 4-5 business days.",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3000); // change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#A67843] text-white text-center text-sm sm:text-base py-2 overflow-hidden relative">
      <div
        key={current}
        className="animate-slide opacity-100 transition-all duration-500"
      >
        {messages[current]}
      </div>

      {/* 👇 animation styles */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          20% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        .animate-slide {
          animation: slide 3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
