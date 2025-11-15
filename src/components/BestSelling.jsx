import React from 'react'
import Cates from './Cates'
import Product from '../fetching data/product';
import Cards from './Cards';
import Button from './Button';

const BestSelling = () => {
  const products = Product().slice(20, 24);

  return (
    <div>
        <Cates heading={'This Month'} headline={'Best Selling Products'}/>
        <Cards products={products} />
        <div className='flex justify-center items-center my-10'>
          <Button text="View All Products"/>
        </div>
    </div>
  )
}

export default BestSelling