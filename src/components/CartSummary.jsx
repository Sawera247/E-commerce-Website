// CartSummary.jsx
import React, { useEffect, useState } from "react";
import { db } from "../Config/Firebase";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const [summary, setSummary] = useState({ totalItems: 0, totalPrice: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const cartRef = ref(db, "cart");
    const unsub = onValue(cartRef, (snap) => {
      const data = snap.val();
      if (!data) {
        setSummary({ totalItems: 0, totalPrice: 0 });
        return;
      }

      const items = Object.values(data);
      const totalItems = items.reduce((s, i) => s + (i.quantity || 1), 0);
      const totalPrice = items.reduce(
        (s, i) => s + parseFloat(i.price) * (i.quantity || 1),
        0
      );

      setSummary({ totalItems, totalPrice });
    });

    return () => unsub();
  }, []);

  if (summary.totalItems === 0) return null;

  return (
    <div className="call font-semibold fixed bottom-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-3 shadow-lg z-50">
      <p>
        Items: {summary.totalItems} <br />
        Total: {summary.totalPrice.toFixed(2)}
      </p>
      <button
        onClick={() => navigate("/cart")}
        className="bg-[#db4444] hover:bg-[#b03030] px-4 py-2 rounded font-semibold"
      >
        Go to Cart
      </button>
    </div>
  );
};

export default CartSummary;
