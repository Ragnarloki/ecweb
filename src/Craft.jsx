import React from 'react'
import './Craft.css'





function Craft({item}) {
    
  const {id,fruitname,img,price}=item;
  
  return (
        <div>
            
        <div className="container-fluid">
  <div className="row">
    <div className="col-sm-4">
      <img  className='craftimg' src={img} alt="hbvku"/>
    </div>
    <div className="col-sm-8">
      <h1>{fruitname}</h1>
      <h2>{price}</h2>
    </div>
  </div>
  </div>

  </div>
  )
}

export default Craft