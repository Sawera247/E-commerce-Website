import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../fetching data/product';
import Cards from '../components/Cards';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const allProducts = Product();
  const filtered = allProducts.filter(
    (p) => p.category === decodeURIComponent(categoryName)
  );

  return (
    <div className="p-4 md:p-10">
      <h2 className="text-2xl font-semibold">
        {decodeURIComponent(categoryName)}
      </h2>
      <Cards products={filtered} />
    </div>
  );
};

export default CategoryPage;
