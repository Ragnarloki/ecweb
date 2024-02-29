import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Craftcollection from './Craftcollection'
import Craft from './Craft'
import Collection from './components/Collection'




function App() {
  const [cart,setCart]=useState([]);

  const handleClick=(item)=>{
    console.log(item);
  
  }

  
  
  const handleclick=(item)=>{
    let isPresent=false;
    cart.forEach((contents)=>{
      if(item.id===contents.id)
         isPresent=true;
    })
    if(isPresent)
       return;
    setCart([...cart,item]);
}
  return (<div>
    
    <BrowserRouter>
    <Navbar size={cart.length} />
    <Routes>
      
     <Route path='/ecweb' element={<Collection  handleClick={handleClick} handleclick={handleclick}/>}></Route>
     <Route path='/ecweb/cart' element={<Craftcollection/>}></Route>
   </Routes>
</BrowserRouter>
</div>

  )
}

export default App