import React from 'react'
import './Card.css'

function Card({card}) {
  return (
    <div className='cardContainer'>
      {
        card?.map((item) => {
          return (
            <div className="cardBox">
              <span></span>
              <div className="cardContent">
                <h2 style={item.cardHeading} className="cardHeading">{item.heading}</h2>
                <p style={item.cardText} className="cardText">{item.text}</p>
                <a className="cardButton">Read More</a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card