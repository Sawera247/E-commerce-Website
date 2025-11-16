// Cart.jsx
import React, { useEffect, useState } from "react";
import { db, auth } from "../Config/Firebase";
import { ref, onValue, set, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [coupon, setCoupon] = useState("");          
  const [couponMsg, setCouponMsg] = useState("");    
  const navigate = useNavigate();

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleQuantityChange = (id, newQty) => {
    const itemRef = ref(db, `cart/${id}`);
    set(itemRef, { ...cartItems.find((i) => i.id === id), quantity: Number(newQty) });
  };

  const handleRemove = (id) => {
    const itemRef = ref(db, `cart/${id}`);
    remove(itemRef);
  };

  const handleApplyCoupon = () => {
    if (coupon.trim() === "") return;
    setCouponMsg("Coupon declined");  
    setCoupon("");                     
    setTimeout(() => setCouponMsg(""), 3000); 
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; 
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (!user) {
      navigate("/signup", { state: { message: "You must be logged in to proceed to checkout." } });
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-6 mt-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-separate border-spacing-3">
              <thead>
                <tr className="text-left shadow bg-gray-50">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="shadow bg-white">
                    <td className="p-3 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 object-contain rounded"
                      />
                      <span className="text-sm md:text-base">{item.name}</span>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 ml-4 font-bold text-xl md:text-2xl hover:text-red-700 transition-all"
                      >
                        ×
                      </button>
                    </td>
                    <td className="py-3">${item.price}</td>
                    <td className="py-3">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 border border-[#cfcfcf] rounded p-1 text-center"
                      />
                    </td>
                    <td className="py-3">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border p-2 rounded flex-1"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-[#db4444] text-white px-4 py-2 rounded hover:bg-[#b03030]"
              >
                Apply Coupon
              </button>
            </div>
            {couponMsg && <span className="text-red-500 font-medium">{couponMsg}</span>}

            <div className="border p-4 rounded w-full md:w-64">
              <h2 className="font-bold mb-2">Cart Total</h2>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[#db4444] text-white w-full mt-4 py-2 rounded hover:bg-[#b03030]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          <button
            onClick={() => navigate("/shop")}
            className="border border-[#cfcfcf] shadow px-4 py-2 rounded hover:bg-gray-100 mt-4 w-full md:w-auto"
          >
            Return To Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
