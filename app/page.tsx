// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import API from "../utils/api";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
// import Hero from "../components/Hero";

// export default function HomePage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const searchParams = useSearchParams();
//   const selectedCategory = searchParams.get("category") || "All";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await API.get("/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <Navbar />
//       <Hero />

//       <section className="max-w-7xl mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
//           {selectedCategory === "All"
//             ? "Our Crafting Products"
//             : `${selectedCategory} Collection`}
//         </h2>

//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
//             {filteredProducts.map((p: any) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 text-lg mt-10">
//             No products found 😔
//           </p>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import API from "../utils/api";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
// import Hero from "../components/Hero";
// import PriceFilter from "./pricefilter/page";

// export default function HomePage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const searchParams = useSearchParams();
//   const selectedCategory = searchParams.get("category") || "All";
//   const [filteredProduct, setFilteredProducts] = useState(products);

//   const handleFilterChange = (maxPrice: number) => {
//     setFilteredProducts(products.filter((p) => p.price <= maxPrice));
//   };

//   // 🔹 Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await API.get("/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // 🔹 Filter products by category
//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col">
//       <Navbar />
//       <Hero />

//       <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* 🏷️ Page Title */}
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           {selectedCategory === "All"
//             ? "Our Crafting Products"
//             : `${selectedCategory} Collection`}
//         </h2>

//         {/* 🛍️ Product Grid */}
//         {filteredProducts.length > 0 ? (
//           <div
//             className="
//               grid
//               grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
//               gap-4 sm:gap-6
//             "
//           >
//             {filteredProducts.map((p: any) => (
//               <div key={p._id} className="flex">
//                 <ProductCard product={p} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 text-lg mt-10">
//             No products found 😔
//           </p>
//         )}
//       </section>
//       <div>
//         <PriceFilter onFilterChange={handleFilterChange} />
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {filteredProduct.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import API from "../utils/api";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
// import Hero from "../components/Hero";

// export default function HomePage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
//   const [showAll, setShowAll] = useState(false);
//   const searchParams = useSearchParams();
//   const selectedCategory = searchParams.get("category") || "All";

//   // 🔹 Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await API.get("/products");
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // 🔹 Apply category filter
//   useEffect(() => {
//     let filtered = [...products];

//     if (selectedCategory !== "All") {
//       filtered = filtered.filter((p) => p.category === selectedCategory);
//     }

//     setFilteredProducts(filtered);
//     setShowAll(false); // reset when category changes
//   }, [selectedCategory, products]);

//   // Show first 8 products unless “View All” is clicked
//   const visibleProducts = showAll
//     ? filteredProducts
//     : filteredProducts.slice(0, 8);

//   return (
//     <div className="bg-[#FFF8F2] min-h-screen flex flex-col">
//       <Navbar />
//       <Hero />

//       <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         {/* 🏷️ Title */}
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">
//           {selectedCategory === "All"
//             ? "Our Crafting Products"
//             : `${selectedCategory} Collection`}
//         </h2>

//         {/* 🛍️ Product Grid */}
//         {filteredProducts.length > 0 ? (
//           <>
//             <div
//               className="
//                 grid
//                 grid-cols-2
//                 sm:grid-cols-3
//                 lg:grid-cols-4
//                 gap-4 sm:gap-6 md:gap-8
//               "
//             >
//               {visibleProducts.map((p: any) => (
//                 <ProductCard key={p._id} product={p} />
//               ))}
//             </div>

//             {/* 🌿 View All Button */}
//             {filteredProducts.length > 8 && !showAll && (
//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={() => setShowAll(true)}
//                   className="px-6 py-3 bg-[#C17E2D] text-white font-medium rounded-lg hover:bg-[#A86B22] transition shadow-md"
//                 >
//                   View All Products
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-center text-gray-500 text-lg mt-10">
//             No products found 😔
//           </p>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import API from "../utils/api";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
// import Hero from "../components/Hero";
// import RecentlyAdded from "../components/RecentlyAdded";

// import { motion } from "framer-motion";

// export default function HomePage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
//   const [showAll, setShowAll] = useState(false);
//   const searchParams = useSearchParams();

//   const selectedCategory = searchParams.get("category") || "All";
//   const maxPrice = searchParams.get("maxPrice")
//     ? Number(searchParams.get("maxPrice"))
//     : null;

//   // 🔹 Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await API.get("/products");
//         const allProducts = res.data;

//         // Sort by newest first (assuming recent = last added)
//         const sortedProducts = [...allProducts].reverse();

//         setProducts(sortedProducts);
//         setFilteredProducts(sortedProducts);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // 🔹 Apply category + price filters
//   useEffect(() => {
//     let filtered = [...products];

//     if (selectedCategory !== "All") {
//       filtered = filtered.filter((p) => p.category === selectedCategory);
//     }

//     if (maxPrice !== null) {
//       filtered = filtered.filter((p) => p.price <= maxPrice);
//     }

//     setFilteredProducts(filtered);
//     setShowAll(false);
//   }, [selectedCategory, maxPrice, products]);

//   // 🔹 Show 8 products by default
//   const visibleProducts = showAll
//     ? filteredProducts
//     : filteredProducts.slice(0, 8);

//   // 🔹 Recently Added (latest 10)
//   const recentProducts = products.slice(0, 10);

//   return (
//     <div className="bg-[#FFF8F2] min-h-screen flex flex-col font-sans">
//       <Navbar />
//       <Hero />
//       {/* <RecentlyAdded products={products} /> */}

//       {/* 🪵 All Products Section */}
//       <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">
//           {selectedCategory === "All"
//             ? "Our Crafting Products"
//             : `${selectedCategory} Collection`}
//         </h2>

//         {filteredProducts.length > 0 ? (
//           <>
//             <div
//               className="
//                 grid
//                 grid-cols-2
//                 sm:grid-cols-3
//                 lg:grid-cols-4
//                 gap-4 sm:gap-6 md:gap-8
//               "
//             >
//               {visibleProducts.map((p: any) => (
//                 <ProductCard key={p._id} product={p} />
//               ))}
//             </div>

//             {filteredProducts.length > 8 && !showAll && (
//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={() => setShowAll(true)}
//                   className="px-6 py-3 bg-[#C17E2D] text-white font-medium rounded-lg hover:bg-[#A86B22] transition shadow-md"
//                 >
//                   View All Products
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <p className="text-center text-gray-500 text-lg mt-10">
//             No products found 😔
//           </p>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import API from "../utils/api";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Hero from "../components/Hero";
// import RecentlyAdded from "../components/RecentlyAdded"; // optional
import { motion } from "framer-motion";

export default function HomePage() {
  const [mounted, setMounted] = useState(false); // ✅ hydration guard
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : null;

  // ✅ Hydration guard — avoids SSR mismatch warnings
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔹 Fetch products from API (client side)
  useEffect(() => {
    if (!mounted) return; // ensures only runs on client

    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        const allProducts = res.data;

        // Sort newest first
        const sortedProducts = [...allProducts].reverse();
        setProducts(sortedProducts);
        setFilteredProducts(sortedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [mounted]);

  // 🔹 Apply category & price filters
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (maxPrice !== null) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    setFilteredProducts(filtered);
    setShowAll(false);
  }, [selectedCategory, maxPrice, products]);

  if (!mounted) return null; // 🧠 avoid SSR mismatch

  // 🔹 Show 8 products initially
  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="bg-[#FFF8F2] min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      {/* <RecentlyAdded products={products} /> */}

      {/* 🪵 All Products Section */}
      <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">
          {selectedCategory === "All"
            ? "Our Crafting Products"
            : `${selectedCategory} Collection`}
        </h2>

        {filteredProducts.length > 0 ? (
          <>
            <div
              className="
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                lg:grid-cols-4 
                gap-4 sm:gap-6 md:gap-8
              "
            >
              {visibleProducts.map((p: any) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>

            {filteredProducts.length > 8 && !showAll && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 bg-[#C17E2D] text-white font-medium rounded-lg hover:bg-[#A86B22] transition shadow-md"
                >
                  View All Products
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No products found 😔
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
}
