// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import toast from "react-hot-toast";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   size: string;
//   quantity: number;
// }

// export default function CheckoutPage() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [pincode, setPincode] = useState("");

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handlePlaceOrder = async () => {
//     if (!name || !email || !phone || !address || !city || !state || !pincode) {
//       toast.error("Please fill all required details!");
//       return;
//     }

//     const orderData = {
//       customer: { name, email, phone, address, city, state, pincode },
//       items: cart,
//       total,
//     };

//     localStorage.setItem("userEmail", email);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("🎉 Order placed successfully!");
//         localStorage.removeItem("cart");
//         setCart([]);
//       } else {
//         toast.error(data.error || "Failed to place order");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong, try again!");
//     }
//   };

//   if (cart.length === 0)
//     return (
//       <>
//         <Navbar />
//         <p className="text-center mt-20 text-xl">Your cart is empty 🛒</p>
//       </>
//     );

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* 🛒 Order Summary */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="space-y-4">
//               {cart.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between border p-4 rounded-lg"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-20 h-20 relative">
//                       <Image
//                         src={item.image || "/images/placeholder.png"}
//                         alt={item.name}
//                         fill
//                         sizes="80px"
//                         className="object-cover rounded"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-sm text-gray-500">Size: {item.size}</p>
//                       <p className="text-[#A67843] font-bold">₹{item.price}</p>
//                     </div>
//                   </div>
//                   <span>Qty: {item.quantity}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-4 text-xl font-bold text-right">Total: ₹{total}</p>
//           </div>

//           {/* 📝 Customer Details */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handlePlaceOrder();
//               }}
//               className="space-y-4"
//             >
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />

//               <input
//                 type="text"
//                 placeholder="City"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="State"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Pincode"
//                 value={pincode}
//                 onChange={(e) => setPincode(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <textarea
//                 placeholder="Address (Street, Area, etc.)"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-[#A67843] text-white rounded-md hover:bg-[#A67849] transition"
//               >
//                 Place Order
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import API from "@/utils/api";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   size: string;
//   quantity: number;
// }

// export default function CheckoutPage() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   // ✅ Load Razorpay script
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   // ✅ Handle payment
//   const handlePlaceOrder = async () => {
//     if (!name || !email || !phone || !address || !city || !state || !pincode) {
//       toast.error("Please fill all required details!");
//       return;
//     }

//     const orderData = {
//       customer: { name, email, phone, address, city, state, pincode },
//       items: cart,
//       total,
//     };

//     const res = await loadRazorpayScript();
//     if (!res) {
//       toast.error("Razorpay SDK failed to load");
//       return;
//     }

//     try {
//       setLoading(true);
//       // Step 1: Create Razorpay order via backend
//       const { data: order } = await API.post("api/payment/create-order", {
//         amount: total,
//       });

//       // Step 2: Open Razorpay popup
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Craft Store",
//         description: "Order Payment",
//         order_id: order.id,
//         handler: async (response: any) => {
//           console.log("Payment Success:", response);
//           toast.success("🎉 Payment successful!");

//           // Step 3: Save order in backend
//           await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(orderData),
//           });

//           localStorage.removeItem("cart");
//           setCart([]);
//         },
//         prefill: {
//           name,
//           email,
//           contact: phone,
//         },
//         theme: { color: "#A67843" },
//       };

//       const paymentObject = new (window as any).Razorpay(options);
//       paymentObject.open();
//     } catch (err) {
//       console.error(err);
//       toast.error("Payment failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (cart.length === 0)
//     return (
//       <>
//         <Navbar />
//         <p className="text-center mt-20 text-xl">Your cart is empty 🛒</p>
//       </>
//     );

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* 🛒 Order Summary */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="space-y-4">
//               {cart.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between border p-4 rounded-lg"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-20 h-20 relative">
//                       <Image
//                         src={item.image || "/images/placeholder.png"}
//                         alt={item.name}
//                         fill
//                         sizes="80px"
//                         className="object-cover rounded"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-sm text-gray-500">Size: {item.size}</p>
//                       <p className="text-[#A67843] font-bold">₹{item.price}</p>
//                     </div>
//                   </div>
//                   <span>Qty: {item.quantity}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="mt-4 text-xl font-bold text-right">Total: ₹{total}</p>
//           </div>

//           {/* 📝 Customer Details */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handlePlaceOrder();
//               }}
//               className="space-y-4"
//             >
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="State"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Pincode"
//                 value={pincode}
//                 onChange={(e) => setPincode(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//               <textarea
//                 placeholder="Address (Street, Area, etc.)"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-2 bg-[#A67843] text-white rounded-md hover:bg-[#A67849] transition"
//               >
//                 {loading ? "Processing..." : "Pay with Razorpay"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import toast from "react-hot-toast";
import API from "@/utils/api";
import { useRouter } from "next/navigation";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image?: string;
  size: string;
  quantity: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ Auto-fill city & state based on PIN code
  useEffect(() => {
    const fetchPincodeDetails = async () => {
      if (pincode.length === 6) {
        try {
          const res = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`
          );
          const data = await res.json();

          if (data[0].Status === "Success") {
            const postOffice = data[0].PostOffice[0];
            setCity(postOffice.District);
            setState(postOffice.State);
            toast.success(
              `📍 Auto-filled: ${postOffice.District}, ${postOffice.State}`
            );
          } else {
            toast.error("Invalid Pincode. Please enter a valid 6-digit code.");
            setCity("");
            setState("");
          }
        } catch (error) {
          console.error("Error fetching pincode details:", error);
        }
      }
    };

    fetchPincodeDetails();
  }, [pincode]);

  // ✅ Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Handle payment
  const handlePlaceOrder = async () => {
    if (!name || !email || !phone || !address || !city || !state || !pincode) {
      toast.error("Please fill all required details!");
      return;
    }

    const orderData = {
      customer: { name, email, phone, address, city, state, pincode },
      items: cart,
      total,
    };
    localStorage.setItem("userEmail", email);
    // try {
    //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(orderData),
    //   });

    const res = await loadRazorpayScript();
    if (!res) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    try {
      setLoading(true);
      // Step 1: Create Razorpay order via backend
      const { data: order } = await API.post("api/payment/create-order", {
        amount: total,
      });

      // Step 2: Open Razorpay popup
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Craft Store",
        description: "Order Payment",
        order_id: order.id,
        handler: async (response: any) => {
          console.log("Payment Success:", response);
          toast.success("🎉 Payment successful!");

          // Step 3: Save order in backend
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
          });

          localStorage.removeItem("cart");
          setCart([]);

          toast.loading("Redirecting to your orders...", { duration: 1500 });

          // ✅ Redirect to My Orders page after 1s
          setTimeout(() => {
            router.push("/my-order");
          }, 1500);
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: { color: "#A67843" },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      toast.error("Payment failed!");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0)
    return (
      <>
        <Navbar />
        <p className="text-center mt-20 text-xl">Your cart is empty 🛒</p>
      </>
    );

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 🛒 Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={item.image || "/images/placeholder.png"}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <p className="text-[#A67843] font-bold">₹{item.price}</p>
                    </div>
                  </div>
                  <span>Qty: {item.quantity}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xl font-bold text-right">Total: ₹{total}</p>
          </div>

          {/* 📝 Customer Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePlaceOrder();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (email && !emailRegex.test(email)) {
                    toast.error("Please enter a valid email address!");
                  }
                }}
                className="w-full p-2 border rounded-md"
                required
              />

              <input
                type="text"
                placeholder="Phone (10 digits)"
                value={phone}
                onChange={(e) => {
                  // Allow only numbers and max 10 digits
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) setPhone(value);
                }}
                onBlur={() => {
                  if (phone.length > 0 && phone.length !== 10) {
                    toast.error("Phone number must be exactly 10 digits!");
                  }
                }}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
                maxLength={6}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-50"
                readOnly
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-50"
                readOnly
              />
              <textarea
                placeholder="Address (Street, Area, etc.)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-[#A67843] text-white rounded-md hover:bg-[#A67849] transition"
              >
                {loading ? "Processing..." : "Pay with Razorpay"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
