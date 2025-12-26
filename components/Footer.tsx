// "use client";
// import { Instagram, Phone, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#C17E2D] text-[#5B4636] py-10 border-t border-[#E8D9C9]">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Company Info */}
//         <div className="space-y-2">
//           <h2 className="text-2xl font-bold text-[#FFF8F2] mb-2">
//             Crafting Studio
//           </h2>
//           <p>123 Craft Street, Mumbai, India</p>
//           <a
//             href="mailto:craft@sale@gmail.com"
//             className="flex items-center gap-2 bg-[#B36A23] "
//           >
//             <Mail size={18} /> umang0sheladiya@gmail.com
//           </a>
//           <a
//             href="tel:+9696969696"
//             className="flex items-center gap-2 bg-[#B36A23] "
//           >
//             <Phone size={18} /> +7862894324
//           </a>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-[#FFF8F2]">
//             Follow Us
//           </h3>
//           <div className="flex gap-4">
//             <a
//               href="https://www.instagram.com/crafting_studi_/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#B36A23] "
//             >
//               <Instagram size={28} />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-[#E8D9C9] mt-10 pt-4 text-center text-sm">
//         &copy; {new Date().getFullYear()} Crafting Studio. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// "use client";

// import { Instagram, Phone, Mail, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-[#C17E2D] to-[#A86B22] text-white py-12 mt-4">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {/* 🏠 Company Info */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4 tracking-wide">
//             {" "}
//             The Craft Store
//           </h2>
//           <div className="space-y-3 text-sm opacity-90">
//             <p className="flex items-center gap-2">
//               <MapPin size={16} /> Bapunagar ahemdabad, India
//             </p>
//             <a
//               href="mailto:umang0sheladiya@gmail.com"
//               className="flex items-center gap-2 text-white"
//             >
//               <Mail size={16} /> omcreation7224@gmail.com
//             </a>
//             <a
//               href="tel:+917862894324"
//               className="flex items-center gap-2 text-white"
//             >
//               <Phone size={16} /> +91 99043 86934
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-[#5B4636]">
//           <a href="/contact-us">Contact Us</a>
//           <a href="/shipping-policy">Shipping Policy</a>
//           <a href="/terms-and-conditions">Terms & Conditions</a>
//           <a href="/cancellations-refunds">Cancellations & Refunds</a>
//           <a href="/privacy-policy">Privacy Policy</a>
//         </div>

//         {/* 🌐 Social Media */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//           <div className="flex items-center gap-5">
//             <a
//               href="https://www.instagram.com/crafting_studi_/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white rounded-full"
//             >
//               <Instagram size={22} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* 🔻 Bottom Line */}
//       <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm opacity-90">
//         &copy; {new Date().getFullYear()} The Craft Store — All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

"use client";

import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#B9854C] to-[#A67843] text-white pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🏪 Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            The Craft Store
          </h2>
          <p className="text-sm text-white/90 leading-relaxed">
            Handcrafted wooden décor, gifts, and art pieces made with love and
            precision. Bringing creativity and craftsmanship to your home.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex text-white/90 items-center gap-2">
              <MapPin size={16} /> Ahmedabad, India
            </p>
            <a
              href="mailto:omcreation7224@gmail.com"
              className="flex items-center gap-2 text-white/90 transition"
            >
              <Mail size={16} /> omcreation7224@gmail.com
            </a>
            <a
              href="tel:+919904386934"
              className="flex items-center gap-2 text-white/90 transition"
            >
              <Phone size={16} /> +91 99043 86934
            </a>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#FFF1E0] pl-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/90 transition">
                Home
              </Link>
            </li>
            {/* <li>
              <Link href="/shop" className="text-white/90 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/90 transition">
                About Us
              </Link>
            </li> */}
            <li>
              <Link href="/contact-us" className="text-white/90 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 🧾 Policy Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#FFF1E0] pl-2">
            Our Policies
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/shipping-policy"
                className="text-white/90 transition"
              >
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-white/90 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/cancellations-refunds"
                className="text-white/90 transition"
              >
                Cancellations & Refunds
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-white/90 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* 🌐 Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#FFF1E0] pl-2">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/crafting_studi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Instagram size={22} />
            </a>
          </div>

          <p className="text-sm mt-4 text-white/80">
            Stay connected for updates on new launches and exclusive offers.
          </p>
        </div>
      </div>

      {/* 🔻 Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} <strong>The Craft Store</strong> — All
        Rights Reserved.
      </div>
    </footer>
  );
}
