import axios from "../helpers/axios";
import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import Card from "../components/Card";

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
        <div style={{display:'flex'}}>
        {
          //Fetch Cards
        }
        </div>
    )
}

export default ProductAll