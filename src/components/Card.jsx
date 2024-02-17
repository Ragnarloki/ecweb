import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='body'>
    <div className="row">
      <div className="column">
        <div className=" card ">
         <img src={props.image} className="card-img-top" />
             <div className="card-body">
               <h5 className="card-title justify d-flex justify-content-center">{props.name}</h5>
              
             </div>
        </div>
      </div>
  </div>
  </div>
  )
}

export default Card