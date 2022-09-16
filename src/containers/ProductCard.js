import React from 'react'

const ProductCard = (props) =>{

    const {productName, productDescription, productPrice, productImage} = props
    console.log(productName, productDescription)
    return (
        <>
            <div className="card text-center">
            <img className="card-img-top" src={productImage} alt={productName} />
            <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">{productDescription}</p>
            <h6 className='card-text'>{productPrice}</h6>
            <a href="#" className="btn btn-dark " >View Product</a>
            </div>
            </div>

        </>
    )
}

export default ProductCard