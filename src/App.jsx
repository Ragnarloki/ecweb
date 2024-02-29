import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Craftcollection from './Craftcollection'
import Craft from './Craft'
import Collection from './components/Collection'
import CraftNavbar from './CraftNavbar'





function App() {
  const handleClick=(item)=>{
    console.log(item);
  
  }
  return (<div>
    
    <BrowserRouter>
    <Routes>
     <Route path='/ecweb' element={<Collection  handleClick={handleClick}/>}></Route>
     <Route path='/ecweb/cart' element={<CraftNavbar/>}></Route>
   </Routes>
</BrowserRouter>
</div>

  )
}

export default App