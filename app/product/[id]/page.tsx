// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Navbar from "../../../components/Navbar";
// import API from "../../../utils/api";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   size?: string[]; // array of sizes from backend
// }

// // ✅ Add to Cart (size optional)
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

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedSize, setSelectedSize] = useState("");

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await API.get(`/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <p className="text-center mt-20">Loading...</p>;

//   // Split sizes if they are in a single string
//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <div className="relative w-full h-96">
//           <Image
//             src={
//               product.image?.includes("res.cloudinary.com")
//                 ? product.image
//                 : "/images/placeholder.png"
//             }
//             alt={product.name}
//             fill
//             sizes="500px"
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
//             {product.name}
//           </h1>
//           <p className="text-indigo-600 text-2xl font-bold mb-4">
//             ₹{product.price}
//           </p>
//           <p className="text-gray-600 dark:text-gray-300 mb-6">
//             {product.description}
//           </p>
//           <p className="text-sm text-gray-500 mb-4">
//             Category: {product.category}
//           </p>

//           {/* Sizes as buttons */}
//           <div className="flex gap-2 mb-6">
//             {sizes.map((size, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-4 py-2 rounded-md border ${
//                   selectedSize === size
//                     ? "bg-indigo-600 text-white"
//                     : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                 } hover:bg-indigo-500 hover:text-white transition`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           {/* Add to Cart */}
//           <button
//             onClick={() => addToCart(product, selectedSize)}
//             className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Navbar from "../../../components/Navbar";
// import API from "../../../utils/api";
// import ProductCard from "../../../components/ProductCard";
// import Footer from "@/components/Footer";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   size?: string[];
// }

// // ✅ Add to Cart
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

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

//   // 🔹 Fetch single product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await API.get(`/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // 🔹 Fetch similar products
//   useEffect(() => {
//     if (!product?.category) return;
//     const fetchSimilar = async () => {
//       try {
//         const res = await API.get("/products");
//         const all = res.data;
//         const filtered = all.filter(
//           (p: Product) =>
//             p.category === product.category && p._id !== product._id
//         );
//         setSimilarProducts(filtered);
//       } catch (err) {
//         console.error("Error fetching similar products:", err);
//       }
//     };
//     fetchSimilar();
//   }, [product]);

//   if (!product) return <p className="text-center mt-20">Loading...</p>;

//   // Split sizes if needed
//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   return (
//     <div>
//       <Navbar />

//       {/* 🧾 Product Details Section */}
//       <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="relative w-full h-96">
//           <Image
//             src={
//               product.image?.includes("res.cloudinary.com")
//                 ? product.image
//                 : "/images/placeholder.png"
//             }
//             alt={product.name}
//             fill
//             sizes="500px"
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Info */}
//         <div>
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
//             {product.name}
//           </h1>
//           <p className="text-indigo-600 text-2xl font-bold mb-4">
//             ₹{product.price}
//           </p>

//           {/* <p className="text-sm text-gray-500 mb-4">
//             Category: {product.category}
//           </p> */}

//           {/* Sizes */}
//           {sizes.length > 0 && (
//             <div className="flex flex-wrap gap-2 mb-6">
//               {sizes.map((size, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 rounded-md border ${
//                     selectedSize === size
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                   } hover:bg-indigo-500 hover:text-white transition`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Add to Cart */}
//           <button
//             onClick={() => addToCart(product, selectedSize)}
//             className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//           >
//             Add to Cart
//           </button>

//           <p className="text-gray-600 dark:text-gray-300 mb-6">
//             {product.description}
//           </p>
//         </div>
//       </div>

//       {/* 🛍️ Similar Products Slider */}
//       {similarProducts.length > 0 && (
//         <section className="max-w-7xl mx-auto px-4 py-12">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
//             Similar Products
//           </h2>

//           <motion.div
//             className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
//             whileTap={{ cursor: "grabbing" }}
//           >
//             {similarProducts.map((p) => (
//               <motion.div
//                 key={p._id}
//                 className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ProductCard product={p} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       )}

//       {similarProducts.length === 0 && (
//         <p className="text-center text-gray-500 pb-10">
//           No similar products found.
//         </p>
//       )}
//       <Footer />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Navbar from "../../../components/Navbar";
// import API from "../../../utils/api";
// import ProductCard from "../../../components/ProductCard";
// import Footer from "@/components/Footer";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   size?: string[];
// }

// // ✅ Add to Cart
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

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

//   // 🔹 Fetch single product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await API.get(`/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // 🔹 Fetch similar products
//   useEffect(() => {
//     if (!product?.category) return;
//     const fetchSimilar = async () => {
//       try {
//         const res = await API.get("/products");
//         const all = res.data;
//         const filtered = all.filter(
//           (p: Product) =>
//             p.category === product.category && p._id !== product._id
//         );
//         setSimilarProducts(filtered);
//       } catch (err) {
//         console.error("Error fetching similar products:", err);
//       }
//     };
//     fetchSimilar();
//   }, [product]);

//   if (!product) return <p className="text-center mt-20">Loading...</p>;

//   // Split sizes if needed
//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   return (
//     <div className="bg-gray-50 text-gray-800 min-h-screen">
//       <Navbar />

//       {/* 🧾 Product Details Section */}
//       <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
//           <Image
//             src={
//               product.image?.includes("res.cloudinary.com")
//                 ? product.image
//                 : "/images/placeholder.png"
//             }
//             alt={product.name}
//             fill
//             sizes="500px"
//             className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Info */}
//         <div className="flex flex-col justify-center">
//           <h1 className="text-3xl font-semibold mb-2 text-gray-900">
//             {product.name}
//           </h1>
//           <p className="text-[#A67843] text-2xl font-bold mb-4">
//             ₹{product.price}
//           </p>

//           {/* 🏷️ Size Label */}
//           {sizes.length > 0 && (
//             <div className="mb-6">
//               <label className="block text-lg font-medium text-gray-700 mb-2">
//                 Select Size:
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {sizes.map((size, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 rounded-md border text-sm sm:text-base transition-all duration-200 ${
//                       selectedSize === size
//                         ? "bg-[#A67843] text-white shadow"
//                         : "bg-white text-gray-800 hover:bg-[#A67843] hover:text-white"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* 🛒 Add to Cart Button */}
//           <button
//             onClick={() => addToCart(product, selectedSize)}
//             className="w-full sm:w-auto px-6 py-2 bg-[#A67843] text-white font-medium rounded-md hover:bg-indigo-700 transition"
//           >
//             Add to Cart
//           </button>

//           {/* 📝 Description Label */}

//           <h3 className=" mt-8 text-lg font-medium text-gray-700 mb-2">
//             Description:
//           </h3>
//           <p className="text-gray-600 leading-relaxed text-justify">
//             {product.description || "No description available."}
//           </p>
//         </div>
//       </div>

//       {/* 🛍️ Similar Products Slider */}
//       {similarProducts.length > 0 && (
//         <section className="max-w-7xl mx-auto px-4 py-12">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
//             Similar Products
//           </h2>

//           <motion.div
//             className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
//             whileTap={{ cursor: "grabbing" }}
//           >
//             {similarProducts.map((p) => (
//               <motion.div
//                 key={p._id}
//                 className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ProductCard product={p} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       )}

//       {similarProducts.length === 0 && (
//         <p className="text-center text-gray-500 pb-10">
//           No similar products found.
//         </p>
//       )}

//       <Footer />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Navbar from "../../../components/Navbar";
// import API from "../../../utils/api";
// import ProductCard from "../../../components/ProductCard";
// import Footer from "@/components/Footer";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   size?: string[];
// }

// // Toast component
// function Toast({ message, onClose }: { message: string; onClose: () => void }) {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 3000); // auto hide after 3s
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className="fixed bottom-6 right-6 bg-[#A67841] text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-slide-up">
//       {message}
//     </div>
//   );
// }

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
//   const [toast, setToast] = useState<string>("");

//   // Fetch product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await API.get(`/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // Fetch similar products
//   useEffect(() => {
//     if (!product?.category) return;
//     const fetchSimilar = async () => {
//       try {
//         const res = await API.get("/api/products");
//         const all = res.data;
//         const filtered = all.filter(
//           (p: Product) =>
//             p.category === product.category && p._id !== product._id
//         );
//         setSimilarProducts(filtered);
//       } catch (err) {
//         console.error("Error fetching similar products:", err);
//       }
//     };
//     fetchSimilar();
//   }, [product]);

//   if (!product) return <p className="text-center mt-20">Loading...</p>;

//   const sizes =
//     product.size?.length === 1 && product.size[0].includes(",")
//       ? product.size[0].split(",").map((s) => s.trim())
//       : product.size || [];

//   // Add to Cart
//   const addToCart = () => {
//     if (!selectedSize && sizes.length > 0) {
//       setToast("Please select a size before adding to cart 🛒");
//       return;
//     }

//     const sizeToAdd = selectedSize || sizes[0] || "Default";
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const existingItem = existingCart.find(
//       (item: any) => item._id === product._id && item.size === sizeToAdd
//     );

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       existingCart.push({ ...product, size: sizeToAdd, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     setToast(`${product.name} (${sizeToAdd}) added to cart 🛒`);
//   };

//   return (
//     <div className="bg-[#FFF8F2] text-[#5B4636] min-h-screen">
//       <Navbar />

//       {/* Product Details */}
//       <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
//         <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
//           <Image
//             src={
//               product.image?.includes("res.cloudinary.com")
//                 ? product.image
//                 : "/images/placeholder.png"
//             }
//             alt={product.name}
//             fill
//             sizes="500px"
//             className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         <div className="flex flex-col justify-center">
//           <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
//           <p className="text-[#A67843] text-2xl font-bold mb-4">
//             ₹{product.price}
//           </p>

//           {sizes.length > 0 && (
//             <div className="mb-6">
//               <label className="block text-lg font-medium text-[#5B4636] mb-2">
//                 Select Size:
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {sizes.map((size, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 rounded-md border text-sm sm:text-base transition-all duration-200 ${
//                       selectedSize === size
//                         ? "bg-[#A67843] text-white shadow"
//                         : "bg-white text-[#5B4636] hover:bg-[#A67843] hover:text-white"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button
//             onClick={addToCart}
//             className="w-full sm:w-auto px-6 py-2 bg-[#A67843] text-white font-medium rounded-md hover:bg-[#8C5E30] transition"
//           >
//             Add to Cart
//           </button>

//           <h3 className="mt-8 text-lg font-medium mb-2">Description:</h3>
//           <p className="leading-relaxed text-justify">
//             {product.description || "No description available."}
//           </p>
//         </div>
//       </div>

//       {/* Similar Products */}
//       {similarProducts.length > 0 && (
//         <section className="max-w-7xl mx-auto px-4 py-12">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
//             Similar Products
//           </h2>

//           <motion.div
//             className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
//             whileTap={{ cursor: "grabbing" }}
//           >
//             {similarProducts.map((p) => (
//               <motion.div
//                 key={p._id}
//                 className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ProductCard product={p} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       )}

//       {similarProducts.length === 0 && (
//         <p className="text-center text-gray-500 pb-10">
//           No similar products found.
//         </p>
//       )}

//       <Footer />

//       {/* Toast */}
//       {toast && <Toast message={toast} onClose={() => setToast("")} />}

//       <style jsx>{`
//         @keyframes slide-up {
//           0% {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-slide-up {
//           animation: slide-up 0.4s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import API from "../../../utils/api";
import ProductCard from "../../../components/ProductCard";
import Footer from "@/components/Footer";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  size?: string[];
}

// Toast component
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-[#A67841] text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-slide-up">
      {message}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [toast, setToast] = useState<string>("");
  const [loading, setLoading] = useState(true); // ✅ Loader state

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false); // ✅ Hide loader
      }
    };
    fetchProduct();
  }, [id]);

  // Fetch similar products
  useEffect(() => {
    if (!product?.category) return;
    const fetchSimilar = async () => {
      try {
        const res = await API.get("/api/products");
        const all = res.data;
        const filtered = all.filter(
          (p: Product) =>
            p.category === product.category && p._id !== product._id
        );
        setSimilarProducts(filtered);
      } catch (err) {
        console.error("Error fetching similar products:", err);
      }
    };
    fetchSimilar();
  }, [product]);

  // Add to Cart
  const addToCart = () => {
    const sizes =
      product?.size?.length === 1 && product.size[0].includes(",")
        ? product.size[0].split(",").map((s) => s.trim())
        : product?.size || [];

    if (!selectedSize && sizes.length > 0) {
      setToast("Please select a size before adding to cart 🛒");
      return;
    }

    const sizeToAdd = selectedSize || sizes[0] || "Default";
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = existingCart.find(
      (item: any) => item._id === product?._id && item.size === sizeToAdd
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, size: sizeToAdd, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setToast(`${product?.name} (${sizeToAdd}) added to cart 🛒`);
  };

  return (
    <div className="bg-[#FFF8F2] text-[#5B4636] min-h-screen">
      <Navbar />

      {/* ✅ Loader */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-[#C17E2D] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && product && (
        <>
          {/* Product Details */}
          <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={
                  product.image?.includes("res.cloudinary.com")
                    ? product.image
                    : "/images/placeholder.png"
                }
                alt={product.name}
                fill
                sizes="500px"
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
              <p className="text-[#A67843] text-2xl font-bold mb-4">
                ₹{product.price}
              </p>

              {product.size && product.size.length > 0 && (
                <div className="mb-6">
                  <label className="block text-lg font-medium text-[#5B4636] mb-2">
                    Select Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(product.size.length === 1 && product.size[0].includes(",")
                      ? product.size[0].split(",").map((s) => s.trim()) // Split comma-separated string
                      : product.size
                    ).map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-md border text-sm sm:text-base transition-all duration-200 ${
                          selectedSize === size
                            ? "bg-[#A67843] text-white shadow"
                            : "bg-white text-[#5B4636] hover:bg-[#A67843] hover:text-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={addToCart}
                className="w-full sm:w-auto px-6 py-2 bg-[#A67843] text-white font-medium rounded-md hover:bg-[#8C5E30] transition"
              >
                Add to Cart
              </button>

              <h3 className="mt-8 text-lg font-medium mb-2">Description:</h3>
              <p className="leading-relaxed text-justify">
                {product.description || "No description available."}
              </p>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 py-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Similar Products
              </h2>

              <motion.div
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                whileTap={{ cursor: "grabbing" }}
              >
                {similarProducts.map((p) => (
                  <motion.div
                    key={p._id}
                    className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {similarProducts.length === 0 && (
            <p className="text-center text-gray-500 pb-10">
              No similar products found.
            </p>
          )}
        </>
      )}

      <Footer />

      {/* Toast */}
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}
