import React, { useState } from 'react'

import './Card.css'
import { Link } from 'react-router-dom'

function Cards({item,handleClick}) {
 
  const {id,fruitname,img,price}=item;
 
  

  return (
    
        
        <div className=" card ">
        <Link to={'/ecweb/cart'}><button onClick={()=>handleClick(item)}><img src={img}  height={'250px'} width={'200px'}  /></button>
        </Link>
             <div className="card-body">
               <h5 className="card-title justify d-flex justify-content-center">{fruitname}</h5>
              <div  className='d-flex justify-content-center' >
                Rs:{price } <del>Rs:{price+1000}</del>
              </div>
              <div></div>
              <div className='d-flex justify-content-center'> 
              <button className='button'>Add to cart</button>  
              </div>
             </div>
        
             </div>
  )
}

export default Cards