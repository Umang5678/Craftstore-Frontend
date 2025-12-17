"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import API from "@/utils/api";

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/api/products");
        const all = res.data.reverse(); // show newest first
        setProducts(all);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Apply category filter (same logic as homepage)
  useEffect(() => {
    if (!category || products.length === 0) return;

    const cat = decodeURIComponent(category.toString());
    const filtered =
      cat === "All"
        ? products
        : products.filter(
            (p: any) =>
              p.category?.toLowerCase().trim() === cat.toLowerCase().trim()
          );

    setFilteredProducts(filtered);
  }, [category, products]);

  return (
    <div className="bg-[#FFF8F2] min-h-screen flex flex-col font-sans">
      {/* ✅ Header */}
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#5B4636] mb-4">
          {decodeURIComponent(String(category))} Collection
        </h1>
        <p className="text-[#8B7157]">
          Discover our handcrafted {decodeURIComponent(String(category))} items
          ✨
        </p>
      </div>

      {/* ✅ Loader */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-[#C17E2D] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* ✅ Product Grid */}
      {!loading && (
        <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No products found 😔
            </p>
          )}
        </section>
      )}

      <Footer />
    </div>
  );
}
