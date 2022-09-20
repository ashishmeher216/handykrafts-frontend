import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
const Card = (props) => {
  const { name, description, image, id } = props;

  return (
    <div className="card">
      <img className="img" src={image} alt={name} />
      <h3 id="name">{name}</h3>
      <p className="price">Starting Onwards Rs.399</p>
      <p id="description">{description}</p>
      <Link to={"/categories/" + id}>
      <p><button>Explore More</button></p>
      </Link>
    </div>
  )
}

export default Card