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

// // ✅ Add-to-Cart Function with size check
// const addToCart = (
//   product: Product,
//   selectedSize: string,
//   showToast: (msg: string) => void
// ) => {
//   if (product.size && product.size.length > 0 && !selectedSize) {
//     showToast("Please select a size!");
//     return;
//   }

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

//   // 🧠 Save updated cart
//   localStorage.setItem("cart", JSON.stringify(existingCart));

//   // ✅ 🔥 Notify Navbar & other components
//   window.dispatchEvent(new Event("cartUpdated"));

//   // 🎉 Toast message
//   showToast(`${product.name} (${sizeToAdd}) added to cart 🛒`);
// };

// export default function ProductCard({ product }: { product: Product }) {
//   const [imgError, setImgError] = useState(false);
//   const [showQuickView, setShowQuickView] = useState(false);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [toastMsg, setToastMsg] = useState("");
//   const [showToast, setShowToast] = useState(false);
//   const router = useRouter();

//   const imageSrc =
//     !imgError && product.image ? product.image : "/images/placeholder.png";

//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   // ✅ Toast Handler
//   const handleToast = (msg: string) => {
//     setToastMsg(msg);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 2500);
//   };

//   return (
//     <>
//       {/* ✅ Toast */}
//       {showToast && (
//         <div className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-[#b99d7e] text-white px-6 py-3 rounded-lg shadow-lg z-[9999] animate-fade-in-out max-w-xs w-[86%] text-center">
//           {toastMsg}
//         </div>
//       )}

//       {/* 🧩 Product Card */}
//       <div className="bg-white border border-[#E8D9C9] rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-3 flex flex-col justify-between">
//         <Link href={`/product/${product._id}`}>
//           {/* ⬇️ Reduced Image Height */}
//           <div className="relative w-full h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-2">
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

//         {/* ⬇️ Compact Info Section */}
//         <div className="flex flex-col flex-grow justify-between">
//           <h2 className="text-sm sm:text-base font-semibold text-[#5B4636] hover:text-[#C17E2D] transition break-words leading-snug">
//             {product.name}
//           </h2>

//           <p className="text-base sm:text-lg font-bold text-[#C17E2D] mt-1">
//             ₹{product.price}
//           </p>

//           <button
//             onClick={() => setShowQuickView(true)}
//             className="mt-2 w-full bg-[#C17E2D] text-white py-1.5 rounded-md hover:bg-[#B36A23] transition font-medium text-sm sm:text-base"
//           >
//             Quick View
//           </button>
//         </div>
//       </div>

//       {/* 🪄 Quick View Modal */}
//       {showQuickView && (
//         <div className="fixed inset-0 z-50 flex justify-center items-end sm:items-center pointer-events-none">
//           <div className="pointer-events-auto bg-[#FFF8F2] w-full sm:w-[450px] rounded-t-2xl sm:rounded-xl p-6 shadow-2xl animate-slide-up relative border border-[#E8D9C9]">
//             {/* ❌ Close */}
//             <button
//               onClick={() => setShowQuickView(false)}
//               className="absolute top-3 right-3 text-[#5B4636] hover:text-[#C17E2D]"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* 🖼️ Image (slightly reduced height) */}
//             <div className="w-full h-44 sm:h-52 rounded-lg overflow-hidden mb-3">
//               <Image
//                 src={imageSrc}
//                 alt={product.name}
//                 width={400}
//                 height={200}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             <h3 className="text-lg font-semibold text-[#5B4636] mb-1">
//               {product.name}
//             </h3>
//             <p className="text-[#C17E2D] font-bold text-base mb-3">
//               ₹{product.price}
//             </p>

//             {/* 🏷️ Size Selector */}
//             {sizes.length > 0 && (
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-[#5B4636] mb-1">
//                   Select Size:
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {sizes.map((size, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-3 py-1 rounded-md border text-sm transition-all duration-200 ${
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
//             <div className="flex flex-col sm:flex-row gap-3 mt-3">
//               <button
//                 onClick={() => addToCart(product, selectedSize, handleToast)}
//                 className="flex-1 bg-[#C17E2D] text-white py-2 rounded-md hover:bg-[#B36A23] transition text-sm font-medium"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => router.push(`/product/${product._id}`)}
//                 className="flex-1 border border-[#C17E2D] text-[#C17E2D] py-2 rounded-md hover:bg-[#FAE9DD] transition text-sm font-medium"
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔄 Animations */}
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

//         @keyframes fadeInOut {
//           0%,
//           100% {
//             opacity: 0;
//           }
//           10%,
//           90% {
//             opacity: 1;
//           }
//         }
//         .animate-fade-in-out {
//           animation: fadeInOut 2.5s ease-in-out forwards;
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

// ✅ Add-to-Cart Function
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

  localStorage.setItem("cart", JSON.stringify(existingCart));
  window.dispatchEvent(new Event("cartUpdated"));
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
        <div
          onClick={() => {
            // Save current scroll position
            sessionStorage.setItem("scrollPosition", window.scrollY.toString());
            window.location.href = `/product/${product._id}`;
          }}
          className="cursor-pointer"
        >
          {/* 🖼️ Product Image with Shadow */}
          <div className="relative w-full h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden mb-2 shadow-[0_6px_16px_rgba(140,94,48,0.35)] hover:shadow-[0_6px_16px_rgba(140,94,48,0.35)] transition-shadow duration-300">
            <Image
              src={imageSrc}
              alt={product.name}
              width={400}
              height={200}
              className="object-cover w-full h-full rounded-lg"
              onError={() => setImgError(true)}
            />
          </div>
        </div>

        {/* Info Section */}
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

            {/* 🖼️ Image with shadow in modal */}
            <div className="w-full h-44 sm:h-52 rounded-lg overflow-hidden mb-3 shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300">
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
