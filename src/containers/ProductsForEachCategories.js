import axios from "../helpers/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductsForEachCategories = () => {
    const {id} = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {

        axios.get('/categories/' + id + '/products')
            .then(Response => {
                console.log(Response.data)

                setProducts(Response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <h1 className="text-center" style={{ margin: "2%" }}>Our Products</h1>
            <div className="row">
                {
                    products.length > 0 ?
                        products.map(
                            product =>
                                <div className="col-sm-3" key={product.productId}>
                                    <ProductCard key={product.productId} productName={product.productName}
                                        productDescription={product.productDescription} productPrice={product.productPrice}
                                        productImage={product.productImage} />
                                </div>
                        )
                        :
                        <h1 className="text-center" style={{ margin: "2%" }}>Oops, Out Of Stocks..... Sorry</h1>
                }
            </div>
        </>
    )
}

export default ProductsForEachCategories