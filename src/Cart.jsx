import React, { useState } from 'react'

function Cart({cart,setCart}){

 const [price,setprice]=useState(0);
 const [count,setCount]=useState();

 function buttonClicked(){

 }





  return (
    <div className='map'>
        {
            cart.map((item)=>(
                <div key={item.id} >
                    <div className="card" >
  <img src={item.img}  alt="..." height={"250px"} width={"200px"}/>
  <div className="card-body">
    <h5 className="card-title d-flex justify-content-center">{item.fruitname}</h5>
    <h3 className='cart-title d-flex justify-content-center'>{item.price}</h3>
    <div className='cart-title d-flex justify-content-center justify-content-evenly'>
    <button className='button' onClick={minus}>-</button><h3 className='d-flex '> Add </h3><button onClick={plus} className='button'>+</button>
    </div> 
  </div>
</div>

                </div>
            ))
        }
    </div>
  )
}

export default Cart