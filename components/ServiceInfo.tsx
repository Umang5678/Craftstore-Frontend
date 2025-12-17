"use client";

import { Truck, Headphones, ShieldCheck } from "lucide-react";

export default function ServiceInfo() {
  const services = [
    {
      icon: <Truck className="w-10 h-10 text-[#C17E2D]" />,
      title: "Free Shipping",
      desc: "Enjoy free shipping PAN India on orders above ₹499/-.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#C17E2D]" />,
      title: "Customer Service",
      desc: "Available Monday to Friday for all your support needs.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#C17E2D]" />,
      title: "Secure Payment",
      desc: "Your payments are protected and processed securely.",
    },
  ];

  return (
    <section className="bg-[#FFF8F2] py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop / Tablet view */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-[#E8D9C9] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center hover:shadow-lg transition h-[220px]"
            >
              {service.icon}
              <h3 className="mt-4 text-lg font-bold text-[#5B4636]">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile view (manual swipe with snap) */}
        <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[80%] sm:w-[70%] snap-start"
            >
              <div className="bg-white border border-[#E8D9C9] rounded-2xl p-6 shadow-md flex flex-col justify-center items-center text-center h-[220px]">
                {service.icon}
                <h3 className="mt-4 text-lg font-bold text-[#5B4636]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar globally */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
