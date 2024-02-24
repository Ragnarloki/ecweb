import React from 'react'
import './Card.css'
function Cards(props) {
  return (
    
        
        <div className=" card ">
         <img src={props.image}  height={'250px'} width={'200px'}  />
             <div className="card-body">
               <h5 className="card-title justify d-flex justify-content-center">{props.name}</h5>
              
             </div>
        
             </div>
  )
}

export default Cards