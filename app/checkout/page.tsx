"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import toast from "react-hot-toast";

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

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("🎉 Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
      } else {
        toast.error(data.error || "Failed to place order");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, try again!");
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
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
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
                className="w-full py-2 bg-[#A67843] text-white rounded-md hover:bg-[#A67849] transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
