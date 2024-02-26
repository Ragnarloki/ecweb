import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './Craft.css'





function Craft(props) {
    
  return (
        <div>
            <Navbar/>
        <div className="container-fluid">
  <div className="row">
    <div className="col-sm-4">
      <img  className='craftimg' src={props.image} alt="hbvku"/>
    </div>
    <div className="col-sm-8">
      
    </div>
  </div>
  </div>

  </div>
  )
}

export default Craft