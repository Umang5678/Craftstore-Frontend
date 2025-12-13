// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import { CheckCircle, Truck, Package, Clock } from "lucide-react";

// interface Order {
//   _id: string;
//   customer: { name: string; email: string; phone: string; address: string };
//   items: {
//     name: string;
//     image?: string;
//     size: string;
//     price: number;
//     quantity: number;
//   }[];
//   total: number;
//   status: "Pending" | "Processing" | "Shipped" | "Delivered";
//   createdAt: string;
// }

// export default function MyOrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const email = localStorage.getItem("userEmail");
//     if (!email) {
//       alert("Please log in or provide your email at checkout!");
//       return;
//     }

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/user/${email}`)
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error("Error fetching orders:", err));
//   }, []);

//   const getStatusStep = (status: string) => {
//     const stages = ["Pending", "Processing", "Shipped", "Delivered"];
//     return stages.indexOf(status);
//   };

//   const statusIcons = [Clock, Package, Truck, CheckCircle];

//   return (
//     <div className="bg-[#FFF8F2] min-h-screen text-[#5B4636]">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold mb-8 text-center">🛍️ My Orders</h1>

//         {orders.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg">
//             No orders found 😔
//           </p>
//         ) : (
//           <div className="space-y-10">
//             {orders.map((o) => (
//               <div
//                 key={o._id}
//                 className="rounded-2xl shadow-md bg-white p-6 border border-gray-100 hover:shadow-lg transition-transform hover:scale-[1.01]"
//               >
//                 {/* Header */}
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gradient-to-r from-[#F0D9C8] to-[#E0C1A0] rounded-xl mb-4">
//                   <div>
//                     <p className="font-semibold text-lg">
//                       Order #{o._id.slice(-6).toUpperCase()}
//                     </p>
//                     <p className="text-sm opacity-80">
//                       Placed on {new Date(o.createdAt).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <p className="text-2xl font-bold mt-3 sm:mt-0">₹{o.total}</p>
//                 </div>

//                 {/* Items */}
//                 <div className="space-y-4 divide-y divide-gray-200 pb-4">
//                   {o.items.map((i, idx) => (
//                     <div key={idx} className="flex items-center gap-4 pt-2">
//                       <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//                         <Image
//                           src={
//                             i.image?.includes("res.cloudinary.com")
//                               ? i.image
//                               : "/images/placeholder.png"
//                           }
//                           alt={i.name}
//                           fill
//                           sizes="80px"
//                           className="object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <p className="font-medium">{i.name}</p>
//                         <p className="text-sm opacity-70">
//                           Size: {i.size} × {i.quantity}
//                         </p>
//                       </div>
//                       <p className="font-semibold text-[#A67843]">₹{i.price}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Tracking Status */}
//                 <div className="mt-6">
//                   <p className="text-sm font-medium opacity-80 mb-3">
//                     Order Progress
//                   </p>
//                   <div className="relative flex justify-between items-center w-full">
//                     {["Pending", "Processing", "Shipped", "Delivered"].map(
//                       (stage, index) => {
//                         const Icon = statusIcons[index];
//                         const active = index <= getStatusStep(o.status);
//                         return (
//                           <div
//                             key={index}
//                             className="flex flex-col items-center text-center flex-1"
//                           >
//                             <div
//                               className={`w-10 h-10 flex items-center justify-center rounded-full border-4 transition-all duration-300 ${
//                                 active
//                                   ? "bg-[#A67843] text-white border-[#A67843] shadow-md"
//                                   : "border-gray-300 text-gray-400 bg-white"
//                               }`}
//                             >
//                               <Icon className="w-5 h-5" />
//                             </div>
//                             <p
//                               className={`mt-2 text-xs font-medium ${
//                                 active ? "text-[#A67843]" : "text-gray-400"
//                               }`}
//                             >
//                               {stage}
//                             </p>
//                             {index < 3 && (
//                               <div
//                                 className={`absolute top-5 left-[calc(12.5%+${
//                                   index * 25
//                                 }%)] h-[4px] w-[25%] -z-10 rounded-full transition-all duration-500 ${
//                                   index < getStatusStep(o.status)
//                                     ? "bg-[#A67843]"
//                                     : "bg-gray-300"
//                                 }`}
//                               ></div>
//                             )}
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";
import { CheckCircle, Truck, Package, Clock } from "lucide-react";

interface Order {
  _id: string;
  customer: { name: string; email: string; phone: string; address: string };
  items: {
    name: string;
    image?: string;
    size: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  createdAt: string;
}

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      toast.error("⚠️ Please log in or provide your email at checkout!");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        if (data.length === 0) {
          toast("No orders found yet 🛍️", { icon: "📦" });
        }
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const getStatusStep = (status: string) => {
    const stages = ["Pending", "Processing", "Shipped", "Delivered"];
    return stages.indexOf(status);
  };

  const statusIcons = [Clock, Package, Truck, CheckCircle];

  return (
    <div className="bg-[#FFF8F2] min-h-screen text-[#5B4636]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-left">🛍️ My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center mt-16">
            {/* <Image
              src="/images/empty-box.png"
              alt="No Orders"
              width={180}
              height={180}
              className="mx-auto opacity-90"
            /> */}
            <p className="text-gray-600 text-lg mt-4">
              You haven’t placed any orders yet.
            </p>
            <p className="text-[#A67843] font-medium mt-2">
              Start shopping and craft your first order! ✨
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {orders.map((o) => (
              <div
                key={o._id}
                className="rounded-2xl shadow-md bg-white p-6 border border-gray-100 hover:shadow-lg transition-transform hover:scale-[1.01]"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gradient-to-r from-[#F0D9C8] to-[#E0C1A0] rounded-xl mb-4">
                  <div>
                    <p className="font-semibold text-lg">
                      Order #{o._id.slice(-6).toUpperCase()}
                    </p>
                    <p className="text-sm opacity-80">
                      Placed on {new Date(o.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-2xl font-bold mt-3 sm:mt-0">₹{o.total}</p>
                </div>

                {/* Items */}
                <div className="space-y-4 divide-y divide-gray-200 pb-4">
                  {o.items.map((i, idx) => (
                    <div key={idx} className="flex items-center gap-4 pt-2">
                      {/* <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src={
                            i.image?.includes("res.cloudinary.com")
                              ? i.image
                              : "/images/placeholder.png"
                          }
                          alt={i.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div> */}
                      <div className="flex-1">
                        <p className="font-medium">{i.name}</p>
                        <p className="text-sm opacity-70">
                          Size: {i.size} × {i.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-[#A67843]">₹{i.price}</p>
                    </div>
                  ))}
                </div>

                {/* Tracking Status */}
                <div className="mt-6">
                  <p className="text-sm font-medium opacity-80 mb-3">
                    Order Progress
                  </p>
                  <div className="relative flex justify-between items-center w-full">
                    {["Pending", "Processing", "Shipped", "Delivered"].map(
                      (stage, index) => {
                        const Icon = statusIcons[index];
                        const active = index <= getStatusStep(o.status);
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center text-center flex-1"
                          >
                            <div
                              className={`w-10 h-10 flex items-center justify-center rounded-full border-4 transition-all duration-300 ${
                                active
                                  ? "bg-[#A67843] text-white border-[#A67843] shadow-md"
                                  : "border-gray-300 text-gray-400 bg-white"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <p
                              className={`mt-2 text-xs font-medium ${
                                active ? "text-[#A67843]" : "text-gray-400"
                              }`}
                            >
                              {stage}
                            </p>
                            {index < 3 && (
                              <div
                                className={`absolute top-5 left-[calc(12.5%+${
                                  index * 25
                                }%)] h-[4px] w-[25%] -z-10 rounded-full transition-all duration-500 ${
                                  index < getStatusStep(o.status)
                                    ? "bg-[#A67843]"
                                    : "bg-gray-300"
                                }`}
                              ></div>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
