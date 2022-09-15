import axios from "../helpers/axios";
import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import Card from "../components/Card";
import ProductCard from "./ProductCard";

const ProductAll = () => {
     const [products,setProducts] = useState([])

    const getProducts = () => {
        axios.get('/products').then((response) =>{
            console.log(response.data)
             
           setProducts(response.data)

        }).catch((error) =>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getProducts();
    },[])

    return(
       <div className="flexColRow">
       {
            products.map(
               product =>
                    <ProductCard key={product.productId} productName={product.productName} 
                    productDescription={product.productDescription} productPrice={product.productPrice}
                    productImage = {product.productImage}/> 
            )
       }
       </div>
    )
}

export default ProductAll