import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './Craft.css'

function Craft(props) {
    

    return (
        <div>
            <Navbar/>
       
        <div className="container">
  <div className="row">
    <div className="col-sm-8">
      <img  className='craftimg' src={props.image} alt=""/>
    </div>
    <div className="col-sm-4">
      
    </div>
  </div>
  </div>

  </div>
  )
}

export default Craft