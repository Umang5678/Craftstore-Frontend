// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { ShoppingCart, Package, Menu, X, ChevronDown } from "lucide-react";

// const categories = [
//   "All",
//   "Wall Clock",
//   "Money Bank",
//   "Car Stand",
//   "Wall Art Piece",
//   "Key Holder Stand",
//   "Wooden Hamper Box",
//   "Gifting Box",
//   "Night Lamps",
//   "Wooden Hanging Lights",
//   "Kapoor Dani",
//   "Wooden Hanuman Chalisa",
//   "Wooden Calendar",
//   "Tea Coaster",
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [price, setPrice] = useState(500);
//   const router = useRouter();

//   const handleCategorySelect = (cat: string) => {
//     setMenuOpen(false);
//     setShowCategories(false);
//     router.push(`/?category=${encodeURIComponent(cat)}`);
//   };

//   const handlePriceFilter = (val: number) => {
//     setPrice(val);
//     router.push(`/?maxPrice=${val}`);
//   };

//   return (
//     <nav className="bg-[#FFF8F2] shadow-md sticky top-0 z-50 border-b border-[#E8D9C9]">
//       {/* 🧭 Navbar Container */}
//       <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
//         {/* Left Section */}
//         <div className="flex items-center gap-3">
//           {/* Hamburger (Mobile) */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="sm:hidden p-2 rounded-md hover:bg-[#FAE9DD] transition"
//           >
//             <Menu className="w-6 h-6 text-[#5B4636]" />
//           </button>

//           {/* 🌿 Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/logo3.png"
//               alt="Crafting Studio Logo"
//               width={180}
//               height={60}
//               className="object-contain w-36 sm:w-40 md:w-48 h-14 transition-all"
//               priority
//             />
//           </Link>
//         </div>

//         {/* 🖥️ Desktop Menu */}
//         <div className="hidden sm:flex gap-8 items-center">
//           <Link
//             href="/"
//             className="text-[#5B4636] hover:text-[#C17E2D] transition"
//           >
//             Home
//           </Link>

//           {/* 🪵 Category Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setShowCategories(!showCategories)}
//               className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//             >
//               Shop by Category
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>

//             {showCategories && (
//               <div className="absolute left-0 mt-2 w-56 bg-[#FFFDF9] shadow-lg rounded-lg border border-[#E8D9C9] z-50 p-2">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => handleCategorySelect(cat)}
//                     className="block w-full text-left px-4 py-2 text-sm text-[#5B4636] hover:bg-[#FAE9DD] rounded-md transition"
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* 🪙 Price Filter (Desktop) */}
//           <div className="flex items-center gap-2 border border-[#E8D9C9] bg-white px-3 py-1.5 rounded-lg shadow-sm">
//             <span className="text-sm text-[#5B4636]">₹0</span>
//             <input
//               type="range"
//               min="0"
//               max="1000"
//               step="10"
//               value={price}
//               onChange={(e) => handlePriceFilter(Number(e.target.value))}
//               className="accent-[#C17E2D] w-32"
//             />
//             <span className="text-sm text-[#5B4636]">₹{price}</span>
//           </div>

//           <Link
//             href="/my-order"
//             className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//           >
//             <Package className="w-5 h-5 mr-1" /> My Orders
//           </Link>

//           <Link
//             href="/cart"
//             className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//           >
//             <ShoppingCart className="w-5 h-5 mr-1" /> Cart
//           </Link>
//         </div>

//         {/* 🛒 Mobile Cart Icon */}
//         <Link
//           href="/cart"
//           className="sm:hidden flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//         >
//           <ShoppingCart className="w-6 h-6" />
//         </Link>
//       </div>

//       {/* 📱 Mobile Drawer */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           {/* Background Overlay */}
//           <div
//             className="bg-black/40 w-full h-full backdrop-blur-sm"
//             onClick={() => setMenuOpen(false)}
//           ></div>

//           {/* Drawer Panel */}
//           <div
//             className="absolute top-0 left-0 h-full w-4/5 sm:w-1/3
//             bg-[#FFF8F2]/95 backdrop-blur-md
//             shadow-2xl border-r border-[#E8D9C9]
//             p-6 transition-transform duration-300 ease-in-out transform animate-slide-in rounded-r-2xl"
//           >
//             {/* Drawer Header */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-[#5B4636]">Menu</h2>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="p-2 rounded-md hover:bg-[#FAE9DD]"
//               >
//                 <X className="w-6 h-6 text-[#5B4636]" />
//               </button>
//             </div>

//             {/* Drawer Links */}
//             <div className="flex flex-col gap-4">
//               <Link
//                 href="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-[#5B4636] hover:text-[#C17E2D]"
//               >
//                 Home
//               </Link>

//               {/* Category List */}
//               <button
//                 onClick={() => setShowCategories(!showCategories)}
//                 className="flex justify-between items-center w-full text-[#5B4636] hover:text-[#C17E2D]"
//               >
//                 Shop by Category
//                 <ChevronDown
//                   className={`w-4 h-4 transition-transform ${
//                     showCategories ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {showCategories && (
//                 <div className="pl-4 flex flex-col gap-2 mt-1">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => handleCategorySelect(cat)}
//                       className="text-left text-[#5B4636]/90 hover:text-[#C17E2D] text-sm"
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               )}
//               <Link
//                 href="/my-order"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center text-[#5B4636] hover:text-[#C17E2D]"
//               >
//                 <Package className="w-5 h-5 mr-2" /> My Orders
//               </Link>

//               {/* 🪙 Price Filter (Mobile) */}
//               <div className="mt-6 border-t border-[#E8D9C9] pt-4">
//                 <p className="text-[#5B4636] font-medium mb-2">
//                   Filter by Price:{" "}
//                   <span className="font-semibold">₹{price}</span>
//                 </p>
//                 <input
//                   type="range"
//                   min="0"
//                   max="5000"
//                   step="20"
//                   value={price}
//                   onChange={(e) => handlePriceFilter(Number(e.target.value))}
//                   className="w-full accent-[#C17E2D]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { ShoppingCart, Package, Menu, X, ChevronDown } from "lucide-react";

// const categories = [
//   "All",
//   "Wall Clock",
//   "Money Bank",
//   "Car Stand",
//   "Wall Art Piece",
//   "Key Holder Stand",
//   "Wooden Hamper Box",
//   "Gifting Box",
//   "Night Lamps",
//   "Wooden Hanging Lights",
//   "Kapoor Dani",
//   "Wooden Hanuman Chalisa",
//   "Wooden Calendar",
//   "Tea Coaster",
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [price, setPrice] = useState(500);
//   const [cartCount, setCartCount] = useState(0); // 🧠 NEW STATE
//   const router = useRouter();

//   useEffect(() => {
//     const updateCartCount = () => {
//       try {
//         const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//         const totalItems = cart.reduce(
//           (sum: number, item: any) => sum + (item.quantity || 0),
//           0
//         );
//         setCartCount(totalItems);
//       } catch {
//         setCartCount(0);
//       }
//     };

//     // Run once at mount
//     updateCartCount();

//     // ✅ Listen to both events
//     window.addEventListener("cartUpdated", updateCartCount);
//     window.addEventListener("storage", updateCartCount);

//     return () => {
//       window.removeEventListener("cartUpdated", updateCartCount);
//       window.removeEventListener("storage", updateCartCount);
//     };
//   }, []);

//   const handleCategorySelect = (cat: string) => {
//     setMenuOpen(false);
//     setShowCategories(false);
//     router.push(`/?category=${encodeURIComponent(cat)}`);
//   };

//   const handlePriceFilter = (val: number) => {
//     setPrice(val);
//     router.push(`/?maxPrice=${val}`);
//   };

//   return (
//     <nav className="bg-[#FFF8F2] shadow-md sticky top-0 z-50 border-b border-[#E8D9C9]">
//       <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
//         {/* Left Section */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="sm:hidden p-2 rounded-md hover:bg-[#FAE9DD] transition"
//           >
//             <Menu className="w-6 h-6 text-[#5B4636]" />
//           </button>

//           {/* 🌿 Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/logo3.png"
//               alt="Crafting Studio Logo"
//               width={180}
//               height={60}
//               className="object-contain w-36 sm:w-40 md:w-48 h-14 transition-all"
//               priority
//             />
//           </Link>
//         </div>

//         {/* 🖥️ Desktop Menu */}
//         <div className="hidden sm:flex gap-8 items-center">
//           <Link
//             href="/"
//             className="text-[#5B4636] hover:text-[#C17E2D] transition"
//           >
//             Home
//           </Link>

//           {/* 🪵 Category Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setShowCategories(!showCategories)}
//               className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//             >
//               Shop by Category
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>

//             {showCategories && (
//               <div className="absolute left-0 mt-2 w-56 bg-[#FFFDF9] shadow-lg rounded-lg border border-[#E8D9C9] z-50 p-2">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => handleCategorySelect(cat)}
//                     className="block w-full text-left px-4 py-2 text-sm text-[#5B4636] hover:bg-[#FAE9DD] rounded-md transition"
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* 🪙 Price Filter (Desktop) */}
//           <div className="flex items-center gap-2 border border-[#E8D9C9] bg-white px-3 py-1.5 rounded-lg shadow-sm">
//             <span className="text-sm text-[#5B4636]">₹0</span>
//             <input
//               type="range"
//               min="0"
//               max="1000"
//               step="10"
//               value={price}
//               onChange={(e) => handlePriceFilter(Number(e.target.value))}
//               className="accent-[#C17E2D] w-32"
//             />
//             <span className="text-sm text-[#5B4636]">₹{price}</span>
//           </div>

//           <Link
//             href="/my-order"
//             className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//           >
//             <Package className="w-5 h-5 mr-1" /> My Orders
//           </Link>

//           {/* 🛒 Cart with Badge */}
//           <Link
//             href="/cart"
//             className="relative flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//           >
//             <ShoppingCart className="w-5 h-5 mr-1" />
//             Cart
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-[#C17E2D] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* 🛒 Mobile Cart Icon with Badge */}
//         <Link
//           href="/cart"
//           className="relative sm:hidden flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
//         >
//           <ShoppingCart className="w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-[#C17E2D] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* 📱 Mobile Drawer */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className="bg-black/40 w-full h-full backdrop-blur-sm"
//             onClick={() => setMenuOpen(false)}
//           ></div>

//           <div className="absolute top-0 left-0 h-full w-4/5 sm:w-1/3 bg-[#FFF8F2]/95 backdrop-blur-md shadow-2xl border-r border-[#E8D9C9] p-6 transition-transform duration-300 ease-in-out transform animate-slide-in rounded-r-2xl">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-[#5B4636]">Menu</h2>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="p-2 rounded-md hover:bg-[#FAE9DD]"
//               >
//                 <X className="w-6 h-6 text-[#5B4636]" />
//               </button>
//             </div>

//             <div className="flex flex-col gap-4">
//               <Link
//                 href="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-[#5B4636] hover:text-[#C17E2D]"
//               >
//                 Home
//               </Link>

//               <button
//                 onClick={() => setShowCategories(!showCategories)}
//                 className="flex justify-between items-center w-full text-[#5B4636] hover:text-[#C17E2D]"
//               >
//                 Shop by Category
//                 <ChevronDown
//                   className={`w-4 h-4 transition-transform ${
//                     showCategories ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {showCategories && (
//                 <div className="pl-4 flex flex-col gap-2 mt-1">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => handleCategorySelect(cat)}
//                       className="text-left text-[#5B4636]/90 hover:text-[#C17E2D] text-sm"
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               <Link
//                 href="/my-order"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center text-[#5B4636] hover:text-[#C17E2D]"
//               >
//                 <Package className="w-5 h-5 mr-2" /> My Orders
//               </Link>

//               {/* 🪙 Price Filter (Mobile) */}
//               <div className="mt-6 border-t border-[#E8D9C9] pt-4">
//                 <p className="text-[#5B4636] font-medium mb-2">
//                   Filter by Price:{" "}
//                   <span className="font-semibold">₹{price}</span>
//                 </p>
//                 <input
//                   type="range"
//                   min="0"
//                   max="5000"
//                   step="20"
//                   value={price}
//                   onChange={(e) => handlePriceFilter(Number(e.target.value))}
//                   className="w-full accent-[#C17E2D]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, Package, Menu, X, ChevronDown } from "lucide-react";

const categories = [
  "All",
  "Wall Clock",
  "Money Bank",
  "Car Stand",
  "Wall Art Piece",
  "Key Holder Stand",
  "Wooden Hamper Box",
  "Gifting Box",
  "Night Lamps",
  "Wooden Hanging Lights",
  "Kapoor Dani",
  "Wooden Hanuman Chalisa",
  "Wooden Calendar",
  "Tea Coaster",
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false); // ✅ Hydration guard
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [price, setPrice] = useState(500);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => setMounted(true), []); // ✅ Only render client-side

  useEffect(() => {
    if (!mounted) return; // ⛔ Skip until client is ready

    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const totalItems = cart.reduce(
          (sum: number, item: any) => sum + (item.quantity || 0),
          0
        );
        setCartCount(totalItems);
      } catch {
        setCartCount(0);
      }
    };

    updateCartCount();

    // ✅ Listen to both custom + storage events
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, [mounted]);

  // ✅ Prevent SSR → client mismatch
  if (!mounted) return null;

  const handleCategorySelect = (cat: string) => {
    setMenuOpen(false);
    setShowCategories(false);
    router.push(`/?category=${encodeURIComponent(cat)}`);
  };

  const handlePriceFilter = (val: number) => {
    setPrice(val);
    router.push(`/?maxPrice=${val}`);
  };

  return (
    <nav className="bg-[#FFF8F2] shadow-md sticky top-0 z-50 border-b border-[#E8D9C9]">
      <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="sm:hidden p-2 rounded-md hover:bg-[#FAE9DD] transition"
          >
            <Menu className="w-6 h-6 text-[#5B4636]" />
          </button>

          {/* 🌿 Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo3.png"
              alt="Crafting Studio Logo"
              width={180}
              height={60}
              className="object-contain w-36 sm:w-40 md:w-48 h-14 transition-all"
              priority
            />
          </Link>
        </div>

        {/* 🖥️ Desktop Menu */}
        <div className="hidden sm:flex gap-8 items-center">
          <Link
            href="/"
            className="text-[#5B4636] hover:text-[#C17E2D] transition"
          >
            Home
          </Link>

          {/* 🪵 Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
            >
              Shop by Category
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {showCategories && (
              <div className="absolute left-0 mt-2 w-56 bg-[#FFFDF9] shadow-lg rounded-lg border border-[#E8D9C9] z-50 p-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className="block w-full text-left px-4 py-2 text-sm text-[#5B4636] hover:bg-[#FAE9DD] rounded-md transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 🪙 Price Filter (Desktop) */}
          <div className="flex items-center gap-2 border border-[#E8D9C9] bg-white px-3 py-1.5 rounded-lg shadow-sm">
            <span className="text-sm text-[#5B4636]">₹0</span>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={price}
              onChange={(e) => handlePriceFilter(Number(e.target.value))}
              className="accent-[#C17E2D] w-32"
            />
            <span className="text-sm text-[#5B4636]">₹{price}</span>
          </div>

          <Link
            href="/my-order"
            className="flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
          >
            <Package className="w-5 h-5 mr-1" /> My Orders
          </Link>

          {/* 🛒 Cart with Badge */}
          <Link
            href="/cart"
            className="relative flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
          >
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C17E2D] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* 🛒 Mobile Cart Icon */}
        <Link
          href="/cart"
          className="relative sm:hidden flex items-center text-[#5B4636] hover:text-[#C17E2D] transition"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C17E2D] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* 📱 Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-black/40 w-full h-full backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="absolute top-0 left-0 h-full w-4/5 sm:w-1/3 bg-[#FFF8F2]/95 backdrop-blur-md shadow-2xl border-r border-[#E8D9C9] p-6 transition-transform duration-300 ease-in-out transform animate-slide-in rounded-r-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#5B4636]">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md hover:bg-[#FAE9DD]"
              >
                <X className="w-6 h-6 text-[#5B4636]" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-[#5B4636] hover:text-[#C17E2D]"
              >
                Home
              </Link>

              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex justify-between items-center w-full text-[#5B4636] hover:text-[#C17E2D]"
              >
                Shop by Category
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showCategories ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showCategories && (
                <div className="pl-4 flex flex-col gap-2 mt-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="text-left text-[#5B4636]/90 hover:text-[#C17E2D] text-sm"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              <Link
                href="/my-order"
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-[#5B4636] hover:text-[#C17E2D]"
              >
                <Package className="w-5 h-5 mr-2" /> My Orders
              </Link>

              {/* 🪙 Price Filter (Mobile) */}
              <div className="mt-6 border-t border-[#E8D9C9] pt-4">
                <p className="text-[#5B4636] font-medium mb-2">
                  Filter by Price:{" "}
                  <span className="font-semibold">₹{price}</span>
                </p>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="20"
                  value={price}
                  onChange={(e) => handlePriceFilter(Number(e.target.value))}
                  className="w-full accent-[#C17E2D]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
