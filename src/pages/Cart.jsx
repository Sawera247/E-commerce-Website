import React, { useEffect, useState } from "react";
import { db } from "../Config/Firebase";
import { ref, onValue, set, remove } from "firebase/database";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items
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

  // Update quantity
  const handleQuantityChange = (id, newQty) => {
    const itemRef = ref(db, `cart/${id}`);
    set(itemRef, { ...cartItems.find(i => i.id === id), quantity: Number(newQty) });
  };

  // Remove item
  const handleRemove = (id) => {
    const itemRef = ref(db, `cart/${id}`);
    remove(itemRef);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free for now
  const total = subtotal + shipping;

  return (
    <>
    <div className="p-6 max-w-6xl mx-auto search">
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-6 mt-10">
          <table className="w-full border-separate border-spacing-5">
            <thead>
              <tr className="text-left shadow">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="shadow">
                  <td className="p-3 flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-contain rounded" />
                    <span>{item.name}</span>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 ml-4 font-bold"
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

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <button className="border border-[#cfcfcf] shadow px-4 py-2 rounded hover:bg-gray-100">Return To Shop</button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-2 rounded"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Apply Coupon
              </button>
            </div>
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
              <button className="bg-red-500 text-white w-full mt-4 py-2 rounded hover:bg-red-600">
               <Link to={'/checkout'}>Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
