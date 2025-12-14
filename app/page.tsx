// // app/page.tsx
// import dynamic from "next/dynamic";
// import { Suspense } from "react";

// // Dynamically import client component with no SSR
// const HomePageComponent = dynamic(
//   () => import("../components/HomePageComponent"),
//   { ssr: false }
// );

// export default function Page() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <HomePageComponent />
//     </Suspense>
//   );
// }

// app/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HomePageComponent = dynamic(
  () => import("../components/HomePageComponent"),
  { ssr: false }
);

// ✅ Custom loader component
function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FFF8F2]">
      <div className="w-16 h-16 border-4 border-[#C17E2D] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <HomePageComponent />
    </Suspense>
  );
}
