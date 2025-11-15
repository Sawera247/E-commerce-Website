import React, { useEffect, useState } from "react";
import { db } from "../Config/Firebase";
import { ref, onValue } from "firebase/database";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Fetch cart items from Firebase
  useEffect(() => {
    const cartRef = ref(db, "cart");
    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCartItems(items);
      } else {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <>
    <div className="min-h-screen flex justify-center items-start bg-gray-50 p-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Street Address*"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Apartment, floor, etc. (optional)"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Town/City*"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 pb-4"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <span>{item.name}</span>
                    </div>
                    <span>
                      ${Number(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    Bank
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    Cash on delivery
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Apply Coupon
                    </button>
                  </div>
                  <button className="w-full bg-red-500 text-white py-3 rounded mt-2 hover:bg-red-600">
                   <Link to={'/final'}>Place Order</Link>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
