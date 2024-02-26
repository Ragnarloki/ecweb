import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Craftcollection from './Craftcollection'
import Craft from './Craft'
import Collection from './components/Collection'





function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/ecweb' element={<Collection/>}></Route>
     <Route path='/ecweb/cart' element={<Craftcollection/>}></Route>
   </Routes>
</BrowserRouter>

  )
}

export default App