import React from 'react'
import Cards from './Cards'
import Cates from './Cates'
import Product from '../fetching data/product';
import Button from './Button';

const Explore = () => {
  const products = Product().slice(11, 19);

  return (
    <div>
        <Cates heading={'Our Products'} headline={'Explore Our Products'}/>
        <Cards products={products}/>
        <div className='flex justify-center items-center my-10'>
          <Button text="View All Products"/>
        </div>
    </div>
  )
}

export default Explore