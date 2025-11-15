import React from 'react';
import Cards from './Cards';
import Product from '../fetching data/product';
import FlashSale from './FlashSale';
import Button from './Button';

const TodayCard = () => {
  const products = Product().slice(0, 4);
  const discount = Math.floor(Math.random() * 40) + 10; 

  return( 
    <>
        <FlashSale/>
        <Cards products={products} discount={discount}/>
        <div className='flex justify-center items-center my-10'>
          <Button text="View All Products"/>
        </div>
        <div className='border-1 border-[#ececec] mx-10 my-5'></div>
    </>
    );
};

export default TodayCard;
