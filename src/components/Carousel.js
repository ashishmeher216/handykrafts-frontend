import React from 'react'
import carousel from '../images/home-carousel.jpg'
const Carousel = () => {
    return (
        <div id="carousel" className="jumbotron" style={{ backgroundImage: `url(${carousel})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',borderRadius: 0 }}>
            <div className="text-white">
                <h1 className="mb-3">HandyKrafts</h1>
                <h4 className="mb-3">Explore the Arts of rural India</h4>
                <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
            </div>
        </div>
    )
}

export default Carousel