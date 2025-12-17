// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import { useRouter } from "next/navigation";
// import { Trash2, Plus, Minus } from "lucide-react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   size: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   const updateQuantity = (item: CartItem, delta: number) => {
//     const updatedCart = cart.map((c) =>
//       c._id === item._id && c.size === item.size
//         ? { ...c, quantity: Math.max(1, c.quantity + delta) }
//         : c
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const removeItem = (item: CartItem) => {
//     const updatedCart = cart.filter(
//       (c) => !(c._id === item._id && c.size === item.size)
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0)
//     return (
//       <>
//         <Navbar />
//         <div className="flex flex-col justify-center items-center h-[70vh] text-center">
//           <Image
//             src="/images/empty-cart.png"
//             alt="Empty Cart"
//             width={200}
//             height={200}
//           />
//           <p className="text-lg mt-4 text-gray-600">Your cart is empty 🛒</p>
//           <button
//             onClick={() => router.push("/")}
//             className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </>
//     );

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
//           Your Cart
//         </h1>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* 🛍️ Cart Items Section */}
//           <div className="md:col-span-2 space-y-6">
//             {cart.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 sm:p-6 hover:shadow-md transition"
//               >
//                 {/* Product Image */}
//                 <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
//                   <Image
//                     src={
//                       item.image?.includes("res.cloudinary.com")
//                         ? item.image
//                         : "/images/placeholder.png"
//                     }
//                     alt={item.name}
//                     fill
//                     sizes="100px"
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Product Details */}
//                 <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
//                   <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//                     {item.name}
//                   </h2>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     Size: {item.size}
//                   </p>
//                   <p className="text-indigo-600 font-bold mt-1">
//                     ₹{item.price}
//                   </p>
//                 </div>

//                 {/* Quantity Controls + Remove */}
//                 <div className="flex items-center gap-3 mt-4 sm:mt-0">
//                   <button
//                     onClick={() => updateQuantity(item, -1)}
//                     className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
//                   >
//                     <Minus className="w-4 h-4 text-gray-700 dark:text-gray-200" />
//                   </button>
//                   <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//                     {item.quantity}
//                   </span>
//                   <button
//                     onClick={() => updateQuantity(item, 1)}
//                     className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
//                   >
//                     <Plus className="w-4 h-4 text-gray-700 dark:text-gray-200" />
//                   </button>
//                   <button
//                     onClick={() => removeItem(item)}
//                     className="p-2 bg-red-500 hover:bg-red-600 rounded-full text-white transition"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 💰 Summary Section */}
//           <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 sticky top-20 h-fit">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
//               Order Summary
//             </h2>

//             <div className="space-y-2 text-gray-600 dark:text-gray-300">
//               <div className="flex justify-between">
//                 <p>Subtotal</p>
//                 <p>₹{total}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Shipping</p>
//                 <p className="text-green-600">Free</p>
//               </div>
//               <div className="border-t border-gray-300 dark:border-gray-700 pt-2 mt-2 flex justify-between font-semibold">
//                 <p>Total</p>
//                 <p>₹{total}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => router.push("/checkout")}
//               className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import { useRouter } from "next/navigation";
// import { Trash2, Plus, Minus } from "lucide-react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   size: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   const updateQuantity = (item: CartItem, delta: number) => {
//     const updatedCart = cart.map((c) =>
//       c._id === item._id && c.size === item.size
//         ? { ...c, quantity: Math.max(1, c.quantity + delta) }
//         : c
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const removeItem = (item: CartItem) => {
//     const updatedCart = cart.filter(
//       (c) => !(c._id === item._id && c.size === item.size)
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0)
//     return (
//       <>
//         <Navbar />
//         <div className="flex flex-col justify-center items-center h-[70vh] text-center bg-[#FFF8F2]">
//           <Image
//             src="/images/logo3.png"
//             alt="Empty Cart"
//             width={200}
//             height={200}
//           />
//           <p className="text-lg mt-4 text-[#5B4636]">Your cart is empty 🛒</p>
//           <button
//             onClick={() => router.push("/")}
//             className="mt-4 px-6 py-2 bg-[#A67843] text-white rounded-lg hover:bg-[#8C5E30] transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </>
//     );

//   return (
//     <div className="bg-[#FFF8F2] min-h-screen text-[#5B4636]">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <div className="md:col-span-2 space-y-6">
//             {cart.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col sm:flex-row items-center justify-between bg-[#FDF5E6] border border-[#D3BFA8] rounded-2xl shadow-sm p-4 sm:p-6 hover:shadow-md transition"
//               >
//                 {/* Product Image */}
//                 <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
//                   <Image
//                     src={
//                       item.image?.includes("res.cloudinary.com")
//                         ? item.image
//                         : "/images/logo2.jpg"
//                     }
//                     alt={item.name}
//                     fill
//                     sizes="100px"
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Product Details */}
//                 <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-sm">Size: {item.size}</p>
//                   <p className="text-[#A67843] font-bold mt-1">₹{item.price}</p>
//                 </div>

//                 {/* Quantity Controls + Remove */}
//                 <div className="flex items-center gap-3 mt-4 sm:mt-0">
//                   <button
//                     onClick={() => updateQuantity(item, -1)}
//                     className="p-2 bg-[#E6D3B3] rounded-full hover:bg-[#D1B78F] transition"
//                   >
//                     <Minus className="w-4 h-4 text-[#5B4636]" />
//                   </button>
//                   <span className="text-lg font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item, 1)}
//                     className="p-2 bg-[#E6D3B3] rounded-full hover:bg-[#D1B78F] transition"
//                   >
//                     <Plus className="w-4 h-4 text-[#5B4636]" />
//                   </button>
//                   <button
//                     onClick={() => removeItem(item)}
//                     className="p-2 bg-red-500 hover:bg-red-600 rounded-full text-white transition"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="bg-[#FDF5E6] border border-[#D3BFA8] rounded-2xl shadow-md p-6 sticky top-20 h-fit">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <p>Subtotal</p>
//                 <p>₹{total}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Shipping</p>
//                 <p className="text-green-600">Free</p>
//               </div>
//               <div className="border-t border-[#D3BFA8] pt-2 mt-2 flex justify-between font-semibold">
//                 <p>Total</p>
//                 <p>₹{total}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => router.push("/checkout")}
//               className="w-full mt-6 py-3 bg-[#A67843] text-white rounded-lg font-semibold hover:bg-[#8C5E30] transition"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image?: string;
  size: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateQuantity = (item: CartItem, delta: number) => {
    const updatedCart = cart.map((c) =>
      c._id === item._id && c.size === item.size
        ? { ...c, quantity: Math.max(1, c.quantity + delta) }
        : c
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (item: CartItem) => {
    const updatedCart = cart.filter(
      (c) => !(c._id === item._id && c.size === item.size)
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("updatedCart"));
  };

  // const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const shippingCharge = total < 499 ? 49 : 0;
  // const grandTotal = total + shippingCharge;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCharge = subtotal < 499 ? 49 : 0;
  const discount = subtotal >= 1200 ? subtotal * 0.1 : 0;
  const grandTotal = subtotal + shippingCharge - discount;

  if (cart.length === 0)
    return (
      <>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[70vh] text-center bg-[#FFF8F2]">
          <Image
            src="/images/logo3.png"
            alt="Empty Cart"
            width={200}
            height={200}
          />
          <p className="text-lg mt-4 text-[#5B4636]">Your cart is empty 🛒</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 bg-[#A67843] text-white rounded-lg hover:bg-[#8C5E30] transition"
          >
            Continue Shopping
          </button>
        </div>
      </>
    );

  return (
    <div className="bg-[#FFF8F2] min-h-screen text-[#5B4636]">
      {/* <Navbar /> */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-left">Cart</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 🛍️ Cart Items Section */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-[#FDF5E6] border border-[#D3BFA8] rounded-xl shadow-sm p-3 hover:shadow-md transition"
              >
                {/* 🖼️ Product Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={
                      item.image?.includes("res.cloudinary.com")
                        ? item.image
                        : "/images/logo2.jpg"
                    }
                    alt={item.name}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>

                {/* 📄 Details + Quantity */}
                <div className="flex flex-col justify-between flex-grow ml-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-base font-semibold">{item.name}</h2>
                      <p className="text-sm text-[#7B6A58]">
                        Size: {item.size}
                      </p>
                      <p className="text-[#A67843] font-bold mt-1">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* ❌ Delete button (desktop only) */}
                    <button
                      onClick={() => removeItem(item)}
                      className="hidden sm:flex p-2 bg-red-500 hover:bg-red-600 rounded-full text-white transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 🔢 Quantity Controls (always visible) */}
                  <div className="flex items-center justify-between mt-3 sm:mt-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item, -1)}
                        className="p-1.5 bg-[#E6D3B3] rounded-full hover:bg-[#D1B78F] transition"
                      >
                        <Minus className="w-4 h-4 text-[#5B4636]" />
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item, 1)}
                        className="p-1.5 bg-[#E6D3B3] rounded-full hover:bg-[#D1B78F] transition"
                      >
                        <Plus className="w-4 h-4 text-[#5B4636]" />
                      </button>
                    </div>

                    {/* ❌ Delete (mobile only) */}
                    <button
                      onClick={() => removeItem(item)}
                      className="flex sm:hidden p-1.5 bg-red-500 hover:bg-red-600 rounded-full text-white transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="bg-[#FDF5E6] border border-[#D3BFA8] rounded-xl shadow-md p-6 sticky top-20 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{total}</p>
              </div>

              <div className="flex justify-between">
                <p>Shipping</p>
                {shippingCharge === 0 ? (
                  <p className="text-green-600">Free</p>
                ) : (
                  <p>₹{shippingCharge}</p>
                )}
              </div>

              <div className="border-t border-[#D3BFA8] pt-2 mt-2 flex justify-between font-semibold">
                <p>Total</p>
                <p>₹{grandTotal}</p>
              </div>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full mt-6 py-3 bg-[#A67843] text-white rounded-lg font-semibold hover:bg-[#8C5E30] transition"
            >
              Proceed to Checkout
            </button>
          </div> */}
          <div className="bg-[#FDF5E6] border border-[#D3BFA8] rounded-xl shadow-md p-6 sticky top-20 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{subtotal}</p>
              </div>

              <div className="flex justify-between">
                <p>Shipping</p>
                {shippingCharge === 0 ? (
                  <p className="text-green-600">Free</p>
                ) : (
                  <p>₹{shippingCharge}</p>
                )}
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-700 font-semibold">
                  <p>🎉 Discount (10% off)</p>
                  <p>-₹{discount.toFixed(0)}</p>
                </div>
              )}

              <div className="border-t border-[#D3BFA8] pt-2 mt-2 flex justify-between font-semibold">
                <p>Total</p>
                <p>₹{grandTotal.toFixed(0)}</p>
              </div>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full mt-6 py-3 bg-[#A67843] text-white rounded-lg font-semibold hover:bg-[#8C5E30] transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
