import React from 'react'
import './Craft.css'


function Craft({cart,setCart,item}) {
    
  return (
    
    <div >
   {
       cart.map((item)=>(
         
          
           <div key={item.id} >

     
        
        <div className="container-fluid">
    <div className="row">
    <div className="col-sm-4">
      <img  className='craftimg' src={item.img} alt="hbvku"/>
    </div>
    <div className="col-sm-8">
      <h1>{item.fruitname}</h1>
      <h2>{item.price}</h2>
         
    </div>
    </div>
    </div>

   </div>

 ))
   }
</div>


    
  )
}

export default Craft