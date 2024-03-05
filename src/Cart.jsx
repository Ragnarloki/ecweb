import React, { useState } from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'
import contents from './contents';
import Totalprice from './Totalprice';
function Cart({cart,setCart,size,item}){

 const [Price,setprice]=useState(1);
 const [count,setCount]=useState(1);

if(size===0){
  return(
  <div >
    <h1 className=' d-flex justify-content-center cart_empty'>Your cart is empty</h1>
    <Link to={'/ecweb/'} className=' d-flex justify-content-center cart_empty'>go to shop-cart</Link>
  </div>)

}

const click=()=>{
var no=document.getElementById("no");
var setprice= no.options[no.selectedIndex].text;
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

                  <h3>Total {item.fruitname} price:{item.price*Price}</h3>

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
    <select className="d-flex justify-content-center" id="no">
    
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
  </select>
  <button onClick={click}>add</button>
  <div className="d-flex justify-content-center"><button onClick={()=>handleremove(item.id)}>remove</button></div> 
    </div>
    
      </div>
    </div>
<hr />
                </div>
    
      ))
        }
        <h1 className='footer'><Totalprice /></h1>
     </div>
  )
}

export default Cart