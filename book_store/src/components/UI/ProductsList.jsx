import React from 'react';
import ProductCard from './ProductCard';
import useGetData from '../../custom-hooks/useGetData';

const ProductsList = ({data}) => {
  const {data : products } = useGetData ('products');
  return (
    <>
      {
        products?.map((item , index) =>(
            <ProductCard item={item} key={index}/>  
      ))
      }
            
    </>
  );
}

export default ProductsList