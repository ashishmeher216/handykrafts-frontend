import axios from "../helpers/axios";
import React, { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('/products').then((response) => {
            console.log(response.data)

            setProducts(response.data)

        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <h1 className="text-center" style={{ margin: "2%" }}>Our Products</h1>
            <div className="row">
                {
                    products.length > 0 && products.map(
                        product =>
                            <div className="col-sm-3" key={product.productId}>
                                <ProductCard key={product.productId} productName={product.productName}
                                    productDescription={product.productDescription} productPrice={product.productPrice}
                                    productImage={product.productImage} />
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default ProductAll