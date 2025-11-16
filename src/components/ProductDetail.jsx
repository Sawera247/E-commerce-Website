import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../Config/Firebase';
import { ref, push, onValue } from 'firebase/database';
import Cates from './Cates';
import Cards from "./Cards";
import CartSummary from "./CartSummary";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartSummary, setCartSummary] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    const cartRef = ref(db, "cart");
    const unsub = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.values(data);
        const totalItems = items.reduce(
          (s, item) => s + (item.quantity || 1),
          0
        );
        const totalPrice = items.reduce(
          (s, item) => s + parseFloat(item.price) * (item.quantity || 1),
          0
        );
        setCartSummary({ totalItems, totalPrice });
      } else {
        setCartSummary({ totalItems: 0, totalPrice: 0 });
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProduct(found || null);

        if (found) {
          const relatedItems = data.filter(
            (p) => p.subCategory === found.subCategory && p.id !== id
          );
          setRelated(relatedItems);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  const handleBuyNow = () => {
    const cartRef = ref(db, "cart");
    push(cartRef, {
      name: product.name,
      price: (product.priceCents / 100).toFixed(2),
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 call">

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mt-1">
            <p className="font-semibold text-[#db4444]">
              ${(product.priceCents / 100).toFixed(2)}
            </p>
            <p className="line-through text-[#808080] font-semibold">
              ${(product.priceCents / 100 + 58).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center text-yellow-500 text-lg my-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < Math.round(product.rating.stars) ? "★" : "☆"}
              </span>
            ))}
            <span className="text-[#808080] font-semibold text-sm">
              ({product.rating.count})
            </span>
          </div>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <button
            onClick={handleBuyNow}
            className="bg-[#db4444] text-white px-6 py-3 rounded hover:bg-[#b03030] font-semibold"
          >
            Buy Now
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <>
          <Cates heading={"Related Items"} />
          <Cards products={related} />
        </>
      )}

      <CartSummary/>
    </div>
  );
};

export default ProductDetail;
