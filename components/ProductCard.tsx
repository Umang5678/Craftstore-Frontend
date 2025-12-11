// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
// }

// // ✅ Add-to-Cart helper function
// function addToCart(product: Product) {
//   if (typeof window === "undefined") return; // prevent SSR issues

//   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const existingItem = existingCart.find(
//     (item: any) => item._id === product._id
//   );

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     existingCart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(existingCart));
//   alert(`${product.name} added to cart 🛒`);
// }

// export default function ProductCard({ product }: { product: Product }) {
//   const [imgError, setImgError] = useState(false);
//   const imageSrc =
//     !imgError && product.image ? product.image : "/images/placeholder.png"; // fallback image

//   return (
//     <div className="flex flex-col justify-between h-full border rounded-lg shadow-sm hover:shadow-md transition bg-white overflow-hidden">
//       {/* 🖼️ Product Image */}
//       <Link href={`/product/${product._id}`}>
//         <div className="relative w-full h-48 sm:h-56 md:h-60">
//           <Image
//             src={imageSrc}
//             alt={product.name}
//             width={400}
//             height={300}
//             className="object-cover w-full h-full"
//             onError={() => setImgError(true)}
//           />
//         </div>
//       </Link>

//       {/* 📦 Product Details */}
//       <div className="flex flex-col flex-grow justify-between p-4">
//         <div>
//           <Link href={`/product/${product._id}`}>
//             <h2 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-600 transition line-clamp-1">
//               {product.name}
//             </h2>
//           </Link>

//           {/* <p className="text-sm text-gray-500 mb-1 line-clamp-1">
//             {product.category || "Craft Item"}
//           </p> */}

//           <p className="text-lg font-bold text-indigo-600 mt-1">
//             ₹{product.price}
//           </p>
//         </div>

//         {/* 🛒 Add to Cart Button */}
//         <button
//           onClick={() => addToCart(product)}
//           className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition font-medium"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
// }

// // ✅ Add-to-Cart helper function
// function addToCart(product: Product) {
//   if (typeof window === "undefined") return;

//   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const existingItem = existingCart.find(
//     (item: any) => item._id === product._id
//   );

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     existingCart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(existingCart));
//   alert(`${product.name} added to cart 🛒`);
// }

// export default function ProductCard({ product }: { product: Product }) {
//   const [imgError, setImgError] = useState(false);
//   const imageSrc =
//     !imgError && product.image ? product.image : "/images/placeholder.png";

//   return (
//     <div className="bg-white border border-gray-600 rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 p-3 flex flex-col justify-between">
//       {/* 🖼️ Product Image */}
//       <Link href={`/product/${product._id}`}>
//         <div className="relative w-full h-52 sm:h-56 md:h-60 rounded-lg overflow-hidden mb-4">
//           <Image
//             src={imageSrc}
//             alt={product.name}
//             width={400}
//             height={200}
//             className="object-cover w-full h-full rounded-lg"
//             onError={() => setImgError(true)}
//           />
//         </div>
//       </Link>

//       {/* 📦 Product Info */}
//       <div className="flex flex-col flex-grow justify-between">
//         <Link href={`/product/${product._id}`}>
//           <h2 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-600 transition break-words">
//             {product.name}
//           </h2>
//         </Link>

//         <p className="text-lg sm:text-xl font-bold text-indigo-600 mt-2">
//           ₹{product.price}
//         </p>

//         {/* 🛒 Add to Cart Button */}
//         <button
//           onClick={() => addToCart(product)}
//           className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-medium"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { X } from "lucide-react";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   size?: string[];
// }

// // ✅ Add-to-Cart Function (same logic)
// const addToCart = (product: Product, selectedSize: string) => {
//   const sizeToAdd =
//     selectedSize || (product.size && product.size[0]) || "Default";

//   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const existingItem = existingCart.find(
//     (item: any) => item._id === product._id && item.size === sizeToAdd
//   );

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     existingCart.push({ ...product, size: sizeToAdd, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(existingCart));
//   alert(`${product.name} (${sizeToAdd}) added to cart 🛒`);
// };

// export default function ProductCard({ product }: { product: Product }) {
//   const [imgError, setImgError] = useState(false);
//   const [showQuickView, setShowQuickView] = useState(false);
//   const [selectedSize, setSelectedSize] = useState("");
//   const router = useRouter();

//   const imageSrc =
//     !imgError && product.image ? product.image : "/images/placeholder.png";

//   // Split sizes if stored as comma-separated string
//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   return (
//     <>
//       {/* 🧩 Product Card */}
//       <div className="bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-3 flex flex-col justify-between">
//         {/* 🖼️ Product Image */}
//         <Link href={`/product/${product._id}`}>
//           <div className="relative w-full h-52 sm:h-56 md:h-60 rounded-lg overflow-hidden mb-4">
//             <Image
//               src={imageSrc}
//               alt={product.name}
//               width={400}
//               height={200}
//               className="object-cover w-full h-full rounded-lg"
//               onError={() => setImgError(true)}
//             />
//           </div>
//         </Link>

//         {/* 📦 Product Info */}
//         <div className="flex flex-col flex-grow justify-between">
//           <h2 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-600 transition break-words">
//             {product.name}
//           </h2>
//           <p className="text-lg sm:text-xl font-bold text-indigo-600 mt-2">
//             ₹{product.price}
//           </p>

//           {/* 👁️ Quick View Button */}
//           <button
//             onClick={() => setShowQuickView(true)}
//             className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-medium"
//           >
//             Quick View
//           </button>
//         </div>
//       </div>

//       {/* 🪄 Quick View Slide-Up Modal */}
//       {showQuickView && (
//         <div className="fixed inset-0 z-50 flex justify-center items-end sm:items-center pointer-events-none">
//           {/* Modal content */}
//           <div className="pointer-events-auto bg-white w-full sm:w-[450px] rounded-t-2xl sm:rounded-xl p-6 shadow-2xl animate-slide-up relative border border-gray-200">
//             {/* ❌ Close Button */}
//             <button
//               onClick={() => setShowQuickView(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* 🖼️ Product Image */}
//             <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden mb-4">
//               <Image
//                 src={imageSrc}
//                 alt={product.name}
//                 width={400}
//                 height={200}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             {/* Product Details */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               {product.name}
//             </h3>
//             <p className="text-indigo-600 font-bold text-lg mb-4">
//               ₹{product.price}
//             </p>

//             {/* 🏷️ Size Selector */}
//             {sizes.length > 0 && (
//               <div className="mb-5">
//                 <label className="block text-base font-medium text-gray-700 mb-2">
//                   Select Size:
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {sizes.map((size, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-3 py-1.5 rounded-md border text-sm sm:text-base transition-all duration-200 ${
//                         selectedSize === size
//                           ? "bg-indigo-600 text-white shadow"
//                           : "bg-white text-gray-800 hover:bg-indigo-50"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* 🛒 Actions */}
//             <div className="flex flex-col sm:flex-row gap-3 mt-4">
//               <button
//                 onClick={() => addToCart(product, selectedSize)}
//                 className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => router.push(`/product/${product._id}`)}
//                 className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-md hover:bg-indigo-50 transition"
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔄 Slide-Up Animation */}
//       <style jsx global>{`
//         @keyframes slideUp {
//           0% {
//             transform: translateY(100%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         .animate-slide-up {
//           animation: slideUp 0.35s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { X } from "lucide-react";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   size?: string[];
// }

// // ✅ Add-to-Cart Function (same logic)
// const addToCart = (product: Product, selectedSize: string) => {
//   const sizeToAdd =
//     selectedSize || (product.size && product.size[0]) || "Default";

//   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const existingItem = existingCart.find(
//     (item: any) => item._id === product._id && item.size === sizeToAdd
//   );

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     existingCart.push({ ...product, size: sizeToAdd, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(existingCart));
//   alert(`${product.name} (${sizeToAdd}) added to cart 🛒`);
// };

// export default function ProductCard({ product }: { product: Product }) {
//   const [imgError, setImgError] = useState(false);
//   const [showQuickView, setShowQuickView] = useState(false);
//   const [selectedSize, setSelectedSize] = useState("");
//   const router = useRouter();

//   const imageSrc =
//     !imgError && product.image ? product.image : "/images/placeholder.png";

//   // Split sizes if stored as comma-separated string
//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   return (
//     <>
//       {/* 🧩 Product Card */}
//       <div className="bg- border border-[#E8D9C9] rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-3 flex flex-col justify-between">
//         {/* 🖼️ Product Image */}
//         <Link href={`/product/${product._id}`}>
//           <div className="relative w-full h-52 sm:h-56 md:h-60 rounded-lg overflow-hidden mb-4">
//             <Image
//               src={imageSrc}
//               alt={product.name}
//               width={400}
//               height={200}
//               className="object-cover w-full h-full rounded-lg"
//               onError={() => setImgError(true)}
//             />
//           </div>
//         </Link>

//         {/* 📦 Product Info */}
//         <div className="flex flex-col flex-grow justify-between">
//           <h2 className="text-base sm:text-lg font-semibold text-[#5B4636] hover:text-[#C17E2D] transition break-words">
//             {product.name}
//           </h2>
//           <p className="text-lg sm:text-xl font-bold text-[#C17E2D] mt-2">
//             ₹{product.price}
//           </p>

//           {/* 👁️ Quick View Button */}
//           <button
//             onClick={() => setShowQuickView(true)}
//             className="mt-4 w-full bg-[#C17E2D] text-white py-2 rounded-md hover:bg-[#B36A23] transition font-medium"
//           >
//             Quick View
//           </button>
//         </div>
//       </div>

//       {/* 🪄 Quick View Slide-Up Modal */}
//       {showQuickView && (
//         <div className="fixed inset-0 z-50 flex justify-center items-end sm:items-center pointer-events-none">
//           {/* Modal content */}
//           <div className="pointer-events-auto bg-[#FFF8F2] w-full sm:w-[450px] rounded-t-2xl sm:rounded-xl p-6 shadow-2xl animate-slide-up relative border border-[#E8D9C9]">
//             {/* ❌ Close Button */}
//             <button
//               onClick={() => setShowQuickView(false)}
//               className="absolute top-3 right-3 text-[#5B4636] hover:text-[#C17E2D]"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* 🖼️ Product Image */}
//             <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden mb-4">
//               <Image
//                 src={imageSrc}
//                 alt={product.name}
//                 width={400}
//                 height={200}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             {/* Product Details */}
//             <h3 className="text-xl font-semibold text-[#5B4636] mb-2">
//               {product.name}
//             </h3>
//             <p className="text-[#C17E2D] font-bold text-lg mb-4">
//               ₹{product.price}
//             </p>

//             {/* 🏷️ Size Selector */}
//             {sizes.length > 0 && (
//               <div className="mb-5">
//                 <label className="block text-base font-medium text-[#5B4636] mb-2">
//                   Select Size:
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {sizes.map((size, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-3 py-1.5 rounded-md border text-sm sm:text-base transition-all duration-200 ${
//                         selectedSize === size
//                           ? "bg-[#C17E2D] text-white shadow"
//                           : "bg-white text-[#5B4636] hover:bg-[#FAE9DD]"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* 🛒 Actions */}
//             <div className="flex flex-col sm:flex-row gap-3 mt-4">
//               <button
//                 onClick={() => addToCart(product, selectedSize)}
//                 className="flex-1 bg-[#C17E2D] text-white py-2 rounded-md hover:bg-[#B36A23] transition"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => router.push(`/product/${product._id}`)}
//                 className="flex-1 border border-[#C17E2D] text-[#C17E2D] py-2 rounded-md hover:bg-[#FAE9DD] transition"
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔄 Slide-Up Animation */}
//       <style jsx global>{`
//         @keyframes slideUp {
//           0% {
//             transform: translateY(100%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         .animate-slide-up {
//           animation: slideUp 0.35s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  size?: string[];
}

// ✅ Add-to-Cart Function with size check
const addToCart = (
  product: Product,
  selectedSize: string,
  showToast: (msg: string) => void
) => {
  if (product.size && product.size.length > 0 && !selectedSize) {
    showToast("Please select a size!");
    return;
  }

  const sizeToAdd =
    selectedSize || (product.size && product.size[0]) || "Default";

  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = existingCart.find(
    (item: any) => item._id === product._id && item.size === sizeToAdd
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    existingCart.push({ ...product, size: sizeToAdd, quantity: 1 });
  }

  // 🧠 Save updated cart
  localStorage.setItem("cart", JSON.stringify(existingCart));

  // ✅ 🔥 Notify Navbar & other components
  window.dispatchEvent(new Event("cartUpdated"));

  // 🎉 Toast message
  showToast(`${product.name} (${sizeToAdd}) added to cart 🛒`);
};

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const imageSrc =
    !imgError && product.image ? product.image : "/images/placeholder.png";

  const sizes =
    product.size?.length === 1 && product.size[0].includes(",")
      ? product.size[0].split(",").map((s) => s.trim())
      : product.size || [];

  // ✅ Toast Handler
  const handleToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      {/* ✅ Toast */}
      {showToast && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-[#b99d7e] text-white px-6 py-3 rounded-lg shadow-lg z-[9999] animate-fade-in-out max-w-xs w-[86%] text-center">
          {toastMsg}
        </div>
      )}

      {/* 🧩 Product Card */}
      <div className="bg-white border border-[#E8D9C9] rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-3 flex flex-col justify-between">
        <Link href={`/product/${product._id}`}>
          {/* ⬇️ Reduced Image Height */}
          <div className="relative w-full h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-2">
            <Image
              src={imageSrc}
              alt={product.name}
              width={400}
              height={200}
              className="object-cover w-full h-full rounded-lg"
              onError={() => setImgError(true)}
            />
          </div>
        </Link>

        {/* ⬇️ Compact Info Section */}
        <div className="flex flex-col flex-grow justify-between">
          <h2 className="text-sm sm:text-base font-semibold text-[#5B4636] hover:text-[#C17E2D] transition break-words leading-snug">
            {product.name}
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#C17E2D] mt-1">
            ₹{product.price}
          </p>

          <button
            onClick={() => setShowQuickView(true)}
            className="mt-2 w-full bg-[#C17E2D] text-white py-1.5 rounded-md hover:bg-[#B36A23] transition font-medium text-sm sm:text-base"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* 🪄 Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 z-50 flex justify-center items-end sm:items-center pointer-events-none">
          <div className="pointer-events-auto bg-[#FFF8F2] w-full sm:w-[450px] rounded-t-2xl sm:rounded-xl p-6 shadow-2xl animate-slide-up relative border border-[#E8D9C9]">
            {/* ❌ Close */}
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute top-3 right-3 text-[#5B4636] hover:text-[#C17E2D]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 🖼️ Image (slightly reduced height) */}
            <div className="w-full h-44 sm:h-52 rounded-lg overflow-hidden mb-3">
              <Image
                src={imageSrc}
                alt={product.name}
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-lg font-semibold text-[#5B4636] mb-1">
              {product.name}
            </h3>
            <p className="text-[#C17E2D] font-bold text-base mb-3">
              ₹{product.price}
            </p>

            {/* 🏷️ Size Selector */}
            {sizes.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#5B4636] mb-1">
                  Select Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 rounded-md border text-sm transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-[#C17E2D] text-white shadow"
                          : "bg-white text-[#5B4636] hover:bg-[#FAE9DD]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 🛒 Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <button
                onClick={() => addToCart(product, selectedSize, handleToast)}
                className="flex-1 bg-[#C17E2D] text-white py-2 rounded-md hover:bg-[#B36A23] transition text-sm font-medium"
              >
                Add to Cart
              </button>
              <button
                onClick={() => router.push(`/product/${product._id}`)}
                className="flex-1 border border-[#C17E2D] text-[#C17E2D] py-2 rounded-md hover:bg-[#FAE9DD] transition text-sm font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔄 Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.35s ease-out;
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 2.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
