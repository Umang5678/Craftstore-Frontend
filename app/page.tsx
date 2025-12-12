// app/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import client component with no SSR
const HomePageComponent = dynamic(
  () => import("../components/HomePageComponent"),
  { ssr: false }
);

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomePageComponent />
    </Suspense>
  );
}
