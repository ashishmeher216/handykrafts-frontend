import { render } from "react-dom"
import axios from "../helpers/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsForEachCategories = () => {
    const id = useParams()

    //console.log(id);

    const [products, setProducts] = useState([])

    const getProducts = () =>{
        //console.log('/categories/'+id.id+'/products')

        axios.get('/categories/'+id.id+'/products')
        .then(Response =>{
            console.log(Response.data)

            setProducts(Response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    useEffect(() =>{
        getProducts()
    },[])

    if(products.length == 0)
    {
        return(
        <>
        <h1 className="text-center" style={{margin: "2%"}}>Oops, Out Of Stocks..... Sorry</h1>
        </>
        )
    }
    else{
    return (
        <>
        <h1 className="text-center" style={{margin: "2%"}}>Our Products</h1>
       <div className="row">
       {
                products.map(
                    product =>
                         <div className="col-sm-3">
                         <ProductCard key={product.productId} productName={product.productName} 
                         productDescription={product.productDescription} productPrice={product.productPrice}
                         productImage = {product.productImage}/> 
                         </div>
                 )
        }
       </div>
        </>
    )
    }
    
}

export default ProductsForEachCategories