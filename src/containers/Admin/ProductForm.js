import axios from "../../helpers/axios";
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const ProductForm = () => {
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productImage, setproductImage] = useState("")
    const [categoryId, setCategoryId] = useState("")

    const formSubmit = (e) =>{
        e.preventDefault();

        const productObj = {
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
            productImage: productImage,
            categoryId: categoryId
        }

        console.log(productObj);

        axios
        .post('/products/create', productObj)
        .then((res) =>{
            console.log(res)

            toast.success("Product Created !", {
                position: toast.POSITION.TOP_CENTER
            })
        }).catch((error) =>{
            console.log(error)

            toast.error("Error in Creation Of Product",{
                position: toast.POSITION.TOP_CENTER
            })
        })
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2020/02/form-builders-11.webp"
                        className="img-fluid" alt="Computer image" />
                </div>
                <div className="col-md-6">
                    <form name="Signin">
                        <h3 className="text-center font-weight-bold">Enter Your Product Here</h3>
                        <p className="text-center">Send your product around the world</p>

                        <label htmlFor="productName"> Name </label>
                        <input className='inputField' type="text" id="name" name="productName" autoComplete="off" value={productName} onChange={(e)=>setProductName(e.target.value)} />

                        <label htmlFor="productDescription"> Desciption </label>
                        <input className='inputField' type="text" id="desciption" name="productDescription" autoComplete="off" value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} />

                        <label htmlFor="productImage"> Image URL </label>
                        <input className='inputField' type="text" id="url" name="productImage" autoComplete="off" value={productImage} onChange={(e)=>setproductImage(e.target.value)} />

                        <label htmlFor="productPrice">Price </label>
                        <input className='inputField' type="text" id="productPrice" name="productPrice" autoComplete="off" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} />

                        <label htmlFor="categoryId"> Category ID </label>
                        <input className='inputField' type="text" id="categoryId" name="categoryId" autoComplete="off" value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} />
                        <input type="submit" defaultValue="Submit" onClick={(e) => formSubmit(e)}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductForm