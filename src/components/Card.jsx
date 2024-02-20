import React from 'react'
import './Card.css'

function Card(props) {
  return (
    
    <div className="container">
      <div className='row'>
        <div className='col-md-3 '>

        <div className=" card ">
         <img src={props.image} className="card-img-top" height={'200px'} width={'170px'}  />
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