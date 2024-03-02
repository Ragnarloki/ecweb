import React, { useState } from 'react'
import {MdShoppingCart} from 'react-icons/md'
import './Navbar.css'
import Cards from '../../Cards'
import { Link } from 'react-router-dom'



function Navbar({size}) {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to={"/ecweb/"} className="navbar-brand" > shop-Cart</Link>

        <Link to={'/ecweb/cart'} className="nav-link active" aria-current="page"><MdShoppingCart size={'30px'}/>
          <sup>{size}</sup>
          </Link>
      
    
  </div>
</nav>
    </div>
  )
}

export default Navbar