// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import API from "../utils/api";

// export default function RecentlyAdded() {
//   const [recentProducts, setRecentProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await API.get("/api/products");
//         const allProducts = res.data.reverse();
//         setRecentProducts(allProducts.slice(0, 10)); // latest 10
//       } catch (err) {
//         console.error("Error fetching recent products:", err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (recentProducts.length === 0)
//     return (
//       <p className="text-center text-gray-500 py-10 text-lg">
//         Loading recently added products...
//       </p>
//     );

//   return (
//     <section className="bg-[#FFF8F2] py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">
//           Recently Added
//         </h2>

//         {/* ✅ Scrollable Row (Swipeable) */}
//         <div
//           className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           {recentProducts.map((product, idx) => (
//             <div
//               key={idx}
//               className="min-w-[240px] sm:min-w-[260px] snap-start flex-shrink-0"
//             >
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Optional small CSS to hide scrollbar */}
//       <style jsx global>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import API from "../utils/api";

export default function RecentlyAdded() {
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/api/products");
        const allProducts = res.data.reverse();
        setRecentProducts(allProducts.slice(0, 10)); // latest 10
      } catch (err) {
        console.error("Error fetching recent products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-[#FFF8F2] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#5B4636]">
          Recently Added
        </h2>

        {/* ✅ Simple Spinner Loader */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-10 h-10 border-4 border-[#C17E2D] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {recentProducts.length > 0 ? (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {recentProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="min-w-[48%] sm:min-w-[220px] md:min-w-[250px] flex-shrink-0 snap-start"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg mt-10">
                No recently added products 😔
              </p>
            )}
          </>
        )}
      </div>

      {/* Hide scrollbar globally */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
