// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// interface Slide {
//   id: number;
//   image: string;
// }

// const slides: Slide[] = [
//   { id: 1, image: "/images/bankk.jpg" },
//   { id: 2, image: "/images/boxx.png" },
//   { id: 3, image: "/images/watch.jpg" },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden flex items-center justify-center bg-gray-100">
//       <AnimatePresence>
//         {slides.map(
//           (slide, index) =>
//             index === current && (
//               <motion.div
//                 key={slide.id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 {/* ✅ Use <Image> with responsive fit */}
//                 <div className="relative w-full h-full flex items-center justify-center">
//                   <Image
//                     src={slide.image}
//                     alt={`Slide ${slide.id}`}
//                     fill
//                     sizes="100vw"
//                     priority={index === 0}
//                     className="object-contain md:object-cover object-center max-w-full max-h-full transition-all duration-500"
//                     loading={index === 0 ? "eager" : "lazy"}
//                     placeholder="blur"
//                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0dH2qDwADdwF/VDZ3uQAAAABJRU5ErkJggg=="
//                   />
//                 </div>

//                 {/* Overlay for smooth contrast */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
//               </motion.div>
//             )
//         )}
//       </AnimatePresence>

//       {/* ✅ Navigation Dots */}
//       <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               idx === current
//                 ? "bg-indigo-600 scale-125 shadow-md"
//                 : "bg-gray-300 opacity-70"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// interface Slide {
//   id: number;
//   image: string;
// }

// const slides: Slide[] = [
//   { id: 1, image: "/images/bankk.jpg" },
//   { id: 2, image: "/images/boxx.png" },
//   { id: 3, image: "/images/watch.jpg" },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   // 🕐 Auto-slide every 5 seconds (pause when dragging)
//   useEffect(() => {
//     if (isDragging) return;
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isDragging]);

//   // ✅ Correct Swipe Directions
//   const handleSwipe = (offsetX: number) => {
//     if (offsetX > 100) {
//       // swipe right → go to previous
//       setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     } else if (offsetX < -100) {
//       // swipe left → go to next
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }
//   };

//   return (
//     <section className="relative  w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden bg-gray-100 ">
//       <div className="relative w-full h-full flex items-center justify-center">
//         <AnimatePresence initial={false} mode="wait">
//           <motion.div
//             key={slides[current].id}
//             className="absolute w-full h-full"
//             initial={{ opacity: 0, x: 150 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -150 }}
//             transition={{ type: "tween", duration: 0.6 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragStart={() => setIsDragging(true)}
//             onDragEnd={(e, info) => {
//               setIsDragging(false);
//               handleSwipe(info.offset.x);
//             }}
//           >
//             {/* 🖼️ Hero Image */}
//             <Image
//               src={slides[current].image}
//               alt={`Slide ${slides[current].id}`}
//               fill
//               priority
//               className="object-cover w-full h-full"
//             />
//             {/* Overlay for soft fade */}
//             <div className="absolute inset-0 bg-black/30" />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// interface Slide {
//   id: number;
//   image: string;
// }

// const slides: Slide[] = [
//   { id: 1, image: "/images/bankk.jpg" },
//   { id: 2, image: "/images/boxx.png" },
//   { id: 3, image: "/images/watch.jpg" },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   useEffect(() => {
//     if (isDragging) return;
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isDragging]);

//   const handleSwipe = (offsetX: number) => {
//     if (offsetX > 100)
//       setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     else if (offsetX < -100) setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <section className="w-full relative overflow-hidden">
//       <div className="w-full max-h-[90vh] sm:max-h-[80vh] md:max-h-[85vh] lg:max-h-[90vh] flex items-center justify-center relative">
//         <AnimatePresence initial={false} mode="wait">
//           <motion.div
//             key={slides[current].id}
//             className="w-full relative"
//             initial={{ opacity: 0, x: 150 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -150 }}
//             transition={{ type: "tween", duration: 0.6 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragStart={() => setIsDragging(true)}
//             onDragEnd={(e, info) => {
//               setIsDragging(false);
//               handleSwipe(info.offset.x);
//             }}
//           >
//             {/* 🖼️ Image - responsive and centered */}
//             <Image
//               src={slides[current].image}
//               alt={`Slide ${slides[current].id}`}
//               width={1600} // base width of your image
//               height={900} // base height
//               className="w-full h-auto object-contain"
//               priority
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/20" />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
//

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  category: string;
}

// ✅ Restored your original data paths
const slides: Slide[] = [
  {
    id: 1,
    image: "/images/bank2.jpg",
    title: "Future Banking",
    subtitle: "Secure. Seamless. Smart.",
    category: "Finance",
  },
  {
    id: 2,
    image: "/images/box2.png",
    title: "Premium Logistics",
    subtitle: "Delivering excellence globally.",
    category: "Services",
  },
  {
    id: 3,
    image: "/images/watch2.jpg",
    title: "Timeless Precision",
    subtitle: "Luxury on your wrist.",
    category: "Lifestyle",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);

  // ✅ Auto-slide (Functionality unchanged)
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // ✅ Swipe logic
  const handleSwipe = useCallback(
    (offsetX: number) => {
      if (offsetX > 100) {
        // Swipe Right -> Show Previous
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (offsetX < -100) {
        // Swipe Left -> Show Next
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    },
    [slides.length]
  );

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
      scale: 1.1,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 6, ease: "linear" },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] bg-neutral-900 overflow-hidden font-sans">
      {/* Main Slider Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={slides[current].id}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info: PanInfo) => {
              setIsDragging(false);
              handleSwipe(info.offset.x);
            }}
          >
            {/* 🖼️ Image */}
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="object-cover w-full h-full select-none"
              draggable={false}
            />

            {/* ✨ Modern Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 📝 Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-20 pointer-events-none">
        <div className="max-w-4xl w-full pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-4 text-center md:text-left"
            ></motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ⚪ Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-4 px-6 py-3 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className="group relative flex items-center justify-center w-4 h-4 outline-none"
            >
              <span
                className={`absolute w-full h-full rounded-full transition-all duration-500 ease-out border-2 ${
                  current === index
                    ? "border-[#C17E2D] scale-125 opacity-100"
                    : "border-transparent scale-0 opacity-0"
                }`}
              />
              <span
                className={`block rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-2 h-2 bg-[#C17E2D]"
                    : "w-1.5 h-1.5 bg-white/50 group-hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Border Line */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C17E2D] to-transparent opacity-50" />
    </section>
  );
}
