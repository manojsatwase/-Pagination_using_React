import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';


const PAGE_SIZE = 10;

const Pagination = () => {
    const [products,setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(0);
  
    const fetchData = async() => {
      try {
        const URL = 'https://dummyjson.com/products?limit=500';
        const data = await fetch(URL);
        const json = await data.json();
        setProducts(json?.products);
      } catch (error) {
        throw new Error(error);
      }
    }
 
    // this cb function will be call only once after my component has been render
    useEffect(()=>{
        fetchData();
    },[]);

 // total number of product divided by page size 
 // ceil give me upper level
  const total_products = products.length;
  const numOfPages = Math.ceil(total_products / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const filterProduct = products?.slice(start,end);

  const goToNextPage = () => {
    // inconsistency problem if we are directly think that we do this
    setCurrentPage(prevState=>prevState + 1)
  }
  const goToPrevPage = () => {
    setCurrentPage(prevState=> prevState - 1)
  }
  return (
    <>
      <div className='pagination'>
      <button disabled={currentPage===0} onClick={goToPrevPage}>prev</button>
       {[...Array(numOfPages).keys()].map((num,index)=><div key={index} onClick={()=>setCurrentPage(index)} className={currentPage === index ? 'active':''}>{num+1}</div>)}
      <button disabled={currentPage===numOfPages-1} onClick={goToNextPage}>next</button>
       </div>
       <div className='products'>
       {
       !products.length 
       ? <p>No Product found</p> 
       : (filterProduct?.map(product => <ProductCard key={product.id} product={product} />
       ))}
    </div>
    </>
 
  )
}

export default Pagination;