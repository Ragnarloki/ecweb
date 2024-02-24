import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Craft from './Craft'





function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/ecweb' element={<Navbar/>}></Route>
     <Route path='/craft' element={<Craft/>}></Route>
   </Routes>
</BrowserRouter>

  )
}

export default App