import React, { useEffect, useState } from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'
import contents from './contents';
import Totalprice from './Totalprice';
function Cart({cart,setCart,size,item,handleChange}){


 const [Price,setPrice]=useState(0);

 const handlePrice=()=>{
     let ans=0
     cart.map((item)=>{
      ans+=item.add*item.price
     })
     setPrice(ans)
 }
 
 useEffect(()=>{
    handlePrice();
 })

if(size===0){
  return(
  <div >
    <h1 className=' d-flex justify-content-center cart_empty'>Your cart is empty</h1>
    <Link to={'/ecweb/'} className=' d-flex justify-content-center cart_empty'>go to shop-cart</Link>
  </div>)

}



//  const minus=(id)=>{
//       if(count>1){
      
//       setCount(count-1)      
//       }
//       if(count<=1){
//         const arr=cart.filter((item)=>item.id !== id);
//         setCart(arr)
//       }
     
//  }

// function plus(){
//   setCount(count+1)
  
// }

const handleremove = (id)=>{
     
     const arr=cart.filter((item)=>item.id !== id);
     setCart(arr)
}


  return (
    <div >
      {
            cart?.map((item)=>(
              
               
                <div key={item.id} >

                  <h3>Total {item.fruitname} price:{item.price}</h3>

     <div className='container'>
      <div className='row'>  
        <div className='col-8 d-flex justify-content-center '>             
  <img src={item.img}  alt="..." height={"250px"} width={"200px"}/>
  </div>
  <div className='col-4 '>
    <h5 className=" d-flex justify-content-center t-20px">{item.fruitname}</h5>
    <h3 className=' d-flex justify-content-center'>Rs:{item.price} </h3>
    <div className=' d-flex justify-content-center justify-content-evenly'>
    <button className='button' onClick={()=>handleChange(item,-1)}>-</button><h3 className='d-flex '> {item.add}</h3><button onClick={()=>handleChange(item,+1)} className='button'>+</button>
    </div>
  <div className="d-flex justify-content-center"><button onClick={()=>handleremove(item.id)}>remove</button></div> 
    </div>
    
      </div>
    </div>
<hr />
                </div>
    
      ))
        }
        <h1 className='footer'><Totalprice />{Price}</h1>
     </div>
  )
}

export default Cart