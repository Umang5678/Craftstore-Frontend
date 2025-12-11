"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface RecentlyAddedProps {
  products: any[];
}

export default function RecentlyAdded({ products }: RecentlyAddedProps) {
  const recentProducts = products.slice(0, 10); // latest 10 products

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#5B4636]">
        Recently Added Items
      </h2>

      {recentProducts.length > 0 ? (
        <motion.div
          className="
            flex 
            gap-4 sm:gap-5 md:gap-6 
            overflow-x-auto 
            scrollbar-hide 
            pb-3 sm:pb-4 
            snap-x snap-mandatory
          "
          whileTap={{ cursor: "grabbing" }}
        >
          {recentProducts.map((p: any) => (
            <motion.div
              key={p._id}
              className="
                flex-shrink-0 
                w-[48%]           /* 🟢 Shows 2 cards on mobile */
                sm:w-[32%]        /* 🟡 3 on tablets */
                md:w-[24%]        /* 🔵 4 on desktops */
                lg:w-[22%]
                snap-center
              "
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No recent products found 😔
        </p>
      )}
    </section>
  );
}
