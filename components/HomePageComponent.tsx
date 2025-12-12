"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import API from "../utils/api";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

export default function HomePageComponent() {
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : null;

  // Hydration guard
  useEffect(() => setMounted(true), []);

  // Fetch products from API
  useEffect(() => {
    if (!mounted) return;

    const fetchProducts = async () => {
      try {
        const res = await API.get("/api/products"); // ensure this matches your backend
        const allProducts = res.data.reverse(); // newest first
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [mounted]);

  // Apply filters
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

  if (!mounted) return null; // avoid SSR mismatch

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="bg-[#FFF8F2] min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">
          {selectedCategory === "All"
            ? "Our Crafting Products"
            : `${selectedCategory} Collection`}
        </h2>

        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
