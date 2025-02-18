import React from 'react'

const ProductCard = ({product}) => {
    const {title,thumbnail,description,price,discountPercentage,rating,stock} = product;
  return (
    <div className='product_card'>
        <h3>{title}</h3>
        <img src={thumbnail} className='product_img' alt={title} /> 
        <p>{description}</p>
        {/* <span>Price {price} RS</span>
        <span>discount {discountPercentage} %</span>
        <span>Rating {rating}</span>
        <span>Stock In {stock}</span> */}
    </div>
  )
}

export default ProductCard;