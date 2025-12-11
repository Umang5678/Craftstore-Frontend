"use client";

import { useState } from "react";

interface FilterProps {
  onFilterChange: (maxPrice: number) => void;
}

export default function PriceFilter({ onFilterChange }: FilterProps) {
  const [activePrice, setActivePrice] = useState<number | null>(null);

  const prices = [49, 99, 199, 499];

  const handleClick = (price: number) => {
    setActivePrice(price);
    onFilterChange(price);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-3 text-[#5B4636]">
        Filter by Price
      </h3>
      <div className="flex flex-wrap gap-2">
        {prices.map((price) => (
          <button
            key={price}
            onClick={() => handleClick(price)}
            className={`px-4 py-2 rounded-md border transition-all duration-200 ${
              activePrice === price
                ? "bg-[#C17E2D] text-white shadow"
                : "bg-white text-[#5B4636] hover:bg-[#FAE9DD]"
            }`}
          >
            Under ₹{price}
          </button>
        ))}
      </div>
    </div>
  );
}
