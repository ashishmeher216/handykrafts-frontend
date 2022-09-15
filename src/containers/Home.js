import React from 'react'
import Card from '../components/Card'
import carousel from '../images/home-carousel.jpg'
import { Link } from 'react-router-dom'
function Home() {

    const categories = [
        {
            id: 111,
            name: "Wooden crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
        {
            id: 222,
            name: "Bamboo crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
        {
            id: 333,
            name: "Clay crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
        {
            id: 444,
            name: "Fabric crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
    ]
    return (
        <div>
            <img src={carousel} alt="Home Carousel" id="carousel"/>
            <h3 id="heading">Our Collections</h3>
            <div className="flexColRow">
                {
                    categories.map(item => <Card key={item.id} name={item.name} description={item.description}/>)
                }
            </div>
            <div>
                <Link to='/allproducts'>
                <button style={{}}>Our Products</button>
                </Link>
            </div>
        </div>
    )
}

export default Home