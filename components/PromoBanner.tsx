"use client";

import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#8C5E30] via-[#A67843] to-[#CDAF7F] text-white py-10 sm:py-16 px-4 sm:px-8 text-center overflow-hidden rounded-none sm:rounded-2xl shadow-lg mt-6">
      {/* ✨ Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-40 h-40 bg-white/10 rounded-full top-[-60px] left-[-60px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-52 h-52 bg-white/10 rounded-full bottom-[-80px] right-[-80px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 🧭 Text Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide"
        >
          10% OFF on Orders Above ₹1200/-
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg text-white/90 font-medium max-w-xl mx-auto leading-relaxed"
        >
          Shop now and enjoy exclusive discounts on your favorite handcrafted
          items. Bring creativity and elegance to your home today!
        </motion.p>
      </div>
    </section>
  );
}
