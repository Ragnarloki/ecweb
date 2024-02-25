import React, { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Cards(props) {
  
  const [count,setCount] = useState(null)
   
  function increase(){
    
    setCount(count+1)
  }

  
  function decrease(){
    setCount(count-1)
  }

  return (
    
        
        <div className=" card ">
        <Link to={'/ecweb/cart'}><img src={props.image}  height={'250px'} width={'200px'}  />
        </Link>
             <div className="card-body">
               <h5 className="card-title justify d-flex justify-content-center">{props.name}</h5>
              <div className='d-flex justify-content-center'> 
              
                <button className='button' onClick={decrease}>-</button> Crat
                <sup>{count}</sup> <button onClick={increase} className='button'> +</button>
              </div>
             </div>
        
             </div>
  )
}

export default Cards