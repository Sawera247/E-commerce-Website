import React, { useState } from 'react';
import Cards from '../components/Cards';
import Product from '../fetching data/product';

const Shop = () => {
  const allProducts = Product();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query matching any keyword (case-insensitive)
  const filteredProducts = allProducts.filter(product =>
    product.keywords.some(keyword =>
      keyword.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-6">
      <div className="relative mx-auto w-[500px] mb-6">
        <input
          className="bg-[#f5f5f5] w-full p-3 search rounded focus:outline-none"
          type="text"
          placeholder="What do you want?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2"></i>
      </div>

      <Cards products={filteredProducts} />
    </div>
  );
};

export default Shop;
