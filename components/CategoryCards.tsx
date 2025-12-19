// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const categories = [
//   {
//     name: "Wall Clock",
//     image: "/images/c.jpg",
//     gradient: "from-[#F7D6D0] to-[#EFC3B0]",
//   },
//   {
//     name: "Money Bank",
//     image: "/images/moneyu.jpg",
//     gradient: "from-[#E6E8FF] to-[#D1D6F5]",
//   },
//   {
//     name: "Gifting Box",
//     image: "/images/bo.jpg",
//     gradient: "from-[#EBDCC2] to-[#E5C88B]",
//   },
//   {
//     name: "Wall Art Piece",
//     image: "/images/watch.jpg",
//     gradient: "from-[#F6E4D3] to-[#EBD0A5]",
//   },
//   {
//     name: "Night Lamps",
//     image: "/images/boxx.png",
//     gradient: "from-[#EDE9F9] to-[#D8CCF0]",
//   },
//   {
//     name: "Car Stand",
//     image: "/images/car.jpg",
//     gradient: "from-[#F7DDE6] to-[#F2B7C5]",
//   },
// ];

// export default function CategoryCards() {
//   const router = useRouter();

//   const handleCategoryClick = (category: string) => {
//     router.push(`/category/${encodeURIComponent(category)}`);
//   };

//   return (
//     <section className="py-3 bg-[#FFF8F2]">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#5B4636] text-center mb-10">
//           Best Selling Collection
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {categories.map((cat, index) => (
//             <div
//               key={index}
//               onClick={() => handleCategoryClick(cat.name)}
//               className={`cursor-pointer rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b ${cat.gradient} p-4 flex flex-col items-center justify-center text-center`}
//             >
//               <div className="w-full aspect-square bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={cat.image}
//                   alt={cat.name}
//                   width={300}
//                   height={300}
//                   className="object-cover w-full h-full rounded-xl"
//                 />
//               </div>
//               <p className="mt-3 text-[#5B4636] font-semibold text-sm sm:text-base">
//                 {cat.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    name: "Wall Clock",
    image: "/images/c.jpg",
    gradient: "from-[#F7D6D0] to-[#EFC3B0]",
  },
  {
    name: "Money Bank",
    image: "/images/moneyu.jpg",
    gradient: "from-[#E6E8FF] to-[#D1D6F5]",
  },
  {
    name: "Gifting Box",
    image: "/images/bo.jpg",
    gradient: "from-[#EBDCC2] to-[#E5C88B]",
  },
  {
    name: "Wall Art Piece",
    image: "/images/watch.jpg",
    gradient: "from-[#F6E4D3] to-[#EBD0A5]",
  },
  {
    name: "Night Lamps",
    image: "/images/boxx.png",
    gradient: "from-[#EDE9F9] to-[#D8CCF0]",
  },
  {
    name: "Car Stand",
    image: "/images/car.jpg",
    gradient: "from-[#F7DDE6] to-[#F2B7C5]",
  },
];

export default function CategoryCards() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    // ✅ Optional: Save scroll position before navigation
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    }
    router.push(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-10 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5B4636] text-center mb-10">
          Best Selling Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(cat.name)}
              className={`cursor-pointer rounded-2xl shadow-[0_6px_14px_rgba(139,94,42,0.3)] hover:shadow-[0_10px_20px_rgba(139,94,42,0.45)] hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b ${cat.gradient} p-4 flex flex-col items-center justify-center text-center`}
            >
              <div className="w-full aspect-square bg-[#fff8f2] rounded-xl border border-[#E8D9C9] shadow-inner flex items-center justify-center overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <p className="mt-3 text-[#5B4636] font-semibold text-sm sm:text-base tracking-wide">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
