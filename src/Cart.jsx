import React, { useState } from 'react'

function Cart({cart,setCart}){

 const [price,setprice]=useState(0);
 const [count,setCount]=useState(1);

 const minus=(id)=>{
      if(count>1){
      const arr=cart.filter((item)=>item.id !== id);
      console.log(arr)
      arr(setCount(count-1))      
      }
      if(count<=1){
        const arr=cart.filter((item)=>item.id !== id);
        setCart(arr)
      }
     
 }

function plus(){
  setCount(count+1)
  
}

const handleremove = (id)=>{
     
     const arr=cart.filter((item)=>item.id !== id);
     setCart(arr)
}


  return (
    <div className='map'>
        {
            cart.map((item)=>(
                <div key={item.id} >
                    <div className="card" >
  <img src={item.img}  alt="..." height={"250px"} width={"200px"}/>
    <h5 className="card-title d-flex justify-content-center">{item.fruitname}</h5>
    <h3 className='cart-title d-flex justify-content-center'>Rs:{item.price} Rs:<del>{item.price}</del></h3>
    <div className='cart-title d-flex justify-content-center justify-content-evenly'>
    <button className='button' onClick={()=>minus(item.id)}>-</button><h3 className='d-flex '> {count}</h3><button onClick={plus} className='button'>+</button>
    </div>
    <div className="card-title d-flex justify-content-center"><button onClick={()=>handleremove(item.id)}>remove</button></div> 
  </div>

                </div>
            ))
        }
    </div>
  )
}

export default Cart