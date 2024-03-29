import React, { useState } from 'react'
import {motion} from 'framer-motion';
import './Card.css'
import { Link } from 'react-router-dom'

function Cards({item,handleClick,handleclick}) {
 
  const {id,fruitname,img,price}=item;
 
  

  return (
    
        
        <motion.div className=" card "
        intial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
        <Link to={'/ecweb/craft'} onClick={()=>handleClick(item)}><img src={img}  height={'250px'} width={'200px'}/>  
        </Link>
             <div className="card-body">
               <h5 className="card-title justify d-flex justify-content-center">{fruitname}</h5>
              <div  className='d-flex justify-content-center' >
                Rs:{price } Rs:<del>{price+1000}</del>
              </div>
              <div></div>
              <div className='d-flex justify-content-center'> 
              <button className='button'onClick={()=>handleclick(item)}>Add to cart</button>  
              </div>
             </div>
        
             </motion.div>
  )
}

export default Cards