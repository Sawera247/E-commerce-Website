import React from 'react';
import Cards from './Cards';
import Product from '../fetching data/product';
import FlashSale from './FlashSale';

const TodayCard = () => {
  const products = Product().slice(0, 4); 

  return( 
    <>
        <FlashSale/>
        <Cards products={products} />
    </>
    );
};

export default TodayCard;
