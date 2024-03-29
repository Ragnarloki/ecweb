import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './Cart'
import Collection from './components/Collection'
import Craft from './Craft'


function App() {
  const [cart,setCart]=useState([]);
  const [craft,setCraft]=useState([]);
  
  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((contents)=>{
      if(item.id===contents.id)
         isPresent=true;
    })
    if(isPresent)
       return;
    setCart([...cart,item]);
}
  
  const handleclick=(item)=>{
    
    let isPresent=false;
    cart.forEach((products)=>{
      if(item.id===products.id)
         isPresent=true;
    })
    if(isPresent)
       return;
    setCart([...cart,item]);
}

const handleChange=(item, d)=>{
  let ind = -1;
  cart.forEach((data,index)=>{
    if (data.id===item.id)
          ind = index;
  });

  const tempArr = cart;
  tempArr[ind].add+= d;
  if(tempArr[ind].add === 0)
      tempArr[ind].add = 1;
  setCart([...tempArr])
 
}


  return (<div>
    
    <BrowserRouter>
    <Navbar size={cart.length} />
    <Routes>
      
     <Route path='/ecweb' element={<Collection  handleClick={handleClick} handleclick={handleclick}/>}></Route>
     <Route path='/ecweb/Cart'  element={<Cart cart={cart} setCart={setCart} size={cart.length} handleChange={handleChange}/>}/>
     <Route path='/ecweb/Craft'  element={<Craft cart={cart} setCart={setCart} size={cart.length}/>}/>
   </Routes>
</BrowserRouter>
</div>

  )
}

export default App