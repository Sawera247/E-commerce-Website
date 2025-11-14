import React from 'react'
import Product from '../fetching data/product';

const Cards = ({ products: propProducts }) => {
  const allProducts = Product();
  const products = propProducts || allProducts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-10">
      {products.map(product => (
        <div>
        <div key={product.id} className="border border-[#f5f5f5] py-6 px-4 rounded shadow">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-contain mb-2"
          />
          </div>
          <h2 className="font-semibold mt-2">{product.name}</h2>

          <div className="flex items-center gap-4 mt-1">
            <p className="font-semibold text-[#db4444]">${(product.priceCents / 100).toFixed(2)}</p>
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
            <span className="text-[#808080] font-semibold text-sm">({product.rating.count})</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
