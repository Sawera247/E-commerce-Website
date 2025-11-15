import React, { useState, useEffect } from 'react';
import Product from '../fetching data/product';
import { db } from '../Config/Firebase';
import { ref, push, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const Cards = ({ products: propProducts, discount }) => {
  const allProducts = Product();
  const products = propProducts || allProducts;

  const [cartSummary, setCartSummary] = useState({ totalItems: 0, totalPrice: 0 });
  const navigate = useNavigate();

  // Listen to cart changes in Firebase
  useEffect(() => {
    const cartRef = ref(db, 'cart');
    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.values(data);
        const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
        const totalPrice = items.reduce((sum, item) => sum + parseFloat(item.price) * (item.quantity || 1), 0);
        setCartSummary({ totalItems, totalPrice });
      } else {
        setCartSummary({ totalItems: 0, totalPrice: 0 });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAddToCart = (product) => {
    const cartRef = ref(db, 'cart');
    push(cartRef, {
      name: product.name,
      price: (product.priceCents / 100).toFixed(2),
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-4 md:p-10">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {discount && (
              <p className="absolute top-2 left-2 bg-[#db4444] text-white px-3 py-1 rounded text-sm z-10">
                -{discount}%
              </p>
            )}
            <div className="relative">
              <div className="border border-[#f5f5f5] py-10 rounded shadow overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-contain"
                />
              </div>

              {/* Add to Cart overlay */}
              <p
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-0 font-semibold left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                ADD TO CART
              </p>
            </div>

            <div>
              <h2 className="font-semibold mt-2">{product.name}</h2>

              <div className="flex items-center gap-4 mt-1">
                <p className="font-semibold text-[#db4444]">
                  ${(product.priceCents / 100).toFixed(2)}
                </p>
                <p className="line-through text-[#808080] font-semibold">
                  ${(product.priceCents / 100 + 58).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center text-yellow-500 text-lg">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.round(product.rating.stars) ? '★' : '☆'}
                  </span>
                ))}
                <span className="text-[#808080] font-semibold text-sm">
                  ({product.rating.count})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartSummary.totalItems > 0 && (
        <div className="fixed font-semibold bottom-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-3 shadow-lg">
          <p>
            Total Item{cartSummary.totalItems > 1 ? 's' : ''} : {cartSummary.totalItems} <br />
            Total Price: {cartSummary.totalPrice.toFixed(2)}
          </p>
          <button
            onClick={() => navigate('/cart')}
            className="bg-[#db4444] hover:bg-red-600 px-4 py-2 rounded font-semibold"
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
};

export default Cards;
