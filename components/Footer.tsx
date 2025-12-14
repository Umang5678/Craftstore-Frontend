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

"use client";

import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#C17E2D] to-[#A86B22] text-white py-12 mt-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* 🏠 Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            {" "}
            The Craft Store
          </h2>
          <div className="space-y-3 text-sm opacity-90">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Bapunagar ahemdabad, India
            </p>
            <a
              href="mailto:umang0sheladiya@gmail.com"
              className="flex items-center gap-2 text-white"
            >
              <Mail size={16} /> omcreation7224@gmail.com
            </a>
            <a
              href="tel:+917862894324"
              className="flex items-center gap-2 text-white"
            >
              <Phone size={16} /> +91 99043 86934
            </a>
          </div>
        </div>

        {/* 🌐 Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/crafting_studi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Line */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm opacity-90">
        &copy; {new Date().getFullYear()} The Craft Store — All Rights Reserved.
      </div>
    </footer>
  );
}
