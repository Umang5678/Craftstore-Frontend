// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Crafting Products</h1>

//       {/* ✅ Responsive Grid — 2 columns on mobile */}
//       <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
}

// 🪵 Category List (same as admin)
const categories = [
  "All",
  "Wall Clock",
  "Money Bank",
  "Car Stand ",
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* 🏷️ Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Crafting Products
      </h1>

      {/* 🪵 Category Filter Bar */}
      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide justify-start sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-md scale-105"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 hover:text-indigo-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🛍️ Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No products found in this category 😔
        </p>
      )}
    </div>
  );
}
