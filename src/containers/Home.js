import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import axios from "../helpers/axios";

const Home = () => {

    const [categories, setCategoryies] = useState([])

    const getCategory = () => {
        axios.get('/categories')
            .then(response => {
                console.log(response.data)

                setCategoryies(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCategory()
    }, [])



    return (
        <>
            <Carousel />
            <div>
                <h3 className="text-center">Our Collections</h3>
                <div className="row">
                    {
                        categories.length > 0 && categories.map(item =>
                            <div className='col-sm-3' key={item.catid}>
                                <Card key={item.catid} id={item.catid} name={item.catname} description={item.catdesc}
                                    image={item.catlink} />
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