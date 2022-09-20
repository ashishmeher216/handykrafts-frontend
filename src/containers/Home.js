import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import {Link} from 'react-router-dom'
import axios from "../helpers/axios";


function Home() {

    const [categories, setCategoryies] = useState([])

    const getCategory = () =>{
        axios.get('/categories')
        .then(Response =>{
            console.log(Response.data)

            setCategoryies(Response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    useEffect(() =>{
        getCategory()
    },[])


    
    return (
        <>
        <Carousel/>
        
            <div>
            <h3 className="text-center">Our Collections</h3>
             <div className="row">
                {
                    categories.map(item =>
                        <div className='col-sm-3'>
                        <Card key={item.catid} id={item.catid} name={item.catname} description={item.catdesc}
                        image = {item.catlink}/>
                        </div>
                    )
                }
            </div> 
            </div>

            <div className='button-ourProducts'>
                <Link to="/allproducts">
                <button type="button" className="btn btn-outline-dark" >Our Products</button>
                </Link>
            </div>
        </>
    )
}

export default Home