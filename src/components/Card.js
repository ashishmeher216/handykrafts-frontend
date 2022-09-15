import React from 'react'
import './Card.css'
const Card = (props) => {
  const { name, description } = props;
  return (
    <div className="card-1">
      <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S0rZT344Y6YH6CqXc8Jm1vgdzzV9z3JeNg&usqp=CAU" alt={name} />
      <h3 id="name">{name}</h3>
      <p className="price">Starting Onwards Rs.399</p>
      <p id="description">{description}</p>
      <p><button>Explore More</button></p>
    </div>
  )
}

export default Card