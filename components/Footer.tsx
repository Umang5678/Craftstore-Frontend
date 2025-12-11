"use client";
import { Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#C17E2D] text-[#5B4636] py-10 border-t border-[#E8D9C9]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#FFF8F2] mb-2">
            Crafting Studio
          </h2>
          <p>123 Craft Street, Mumbai, India</p>
          <a
            href="mailto:craft@sale@gmail.com"
            className="flex items-center gap-2 bg-[#B36A23] "
          >
            <Mail size={18} /> umang0sheladiya@gmail.com
          </a>
          <a
            href="tel:+9696969696"
            className="flex items-center gap-2 bg-[#B36A23] "
          >
            <Phone size={18} /> +7862894324
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFF8F2]">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/crafting_studi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B36A23] "
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E8D9C9] mt-10 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Crafting Studio. All rights reserved.
      </div>
    </footer>
  );
}
