import React, { useState } from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'
import contents from './contents';
function Cart({cart,setCart,size,item}){

 const [Price,setprice]=useState(0);
 const [count,setCount]=useState(1);

if(size===0){
  return(
  <div >
    <h1 className=' d-flex justify-content-center cart_empty'>Your cart is empty</h1>
    <Link to={'/ecweb/'} className=' d-flex justify-content-center cart_empty'>go to shop-cart</Link>
  </div>)

}

 const minus=(id)=>{
      if(count>1){
      const arr=cart.filter((item)=>item.id !== id);
      
      setCount(count-1)      
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
    <div >
      {
            cart.map((item)=>(
              
               
                <div key={item.id} >

                  <h3>Total {item.fruitname} price:{item.price*count}</h3>
                  <h3>price:{contents[item.id-1].price*count}</h3>

     <div className='container'>
      <div className='row'>  
        <div className='col-8 d-flex justify-content-center '>             
  <img src={item.img}  alt="..." height={"250px"} width={"200px"}/>
  </div>
  <div className='col-4 '>
    <h5 className=" d-flex justify-content-center t-20px">{item.fruitname}</h5>
    <h3 className=' d-flex justify-content-center'>Rs:{item.price} </h3>
    <div className=' d-flex justify-content-center justify-content-evenly'>
    <button className='button' onClick={()=>minus(item.id)}>-</button><h3 className='d-flex '> {count}</h3><button onClick={plus} className='button'>+</button>
    </div>
    <div className="d-flex justify-content-center"><button onClick={()=>handleremove(item.id)}>remove</button></div> 
    </div>
    
      </div>
    </div>
<hr />
                </div>
    
      ))
        }
     </div>
  )
}

export default Cart