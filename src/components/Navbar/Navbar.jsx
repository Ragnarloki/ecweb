import React, { useState } from 'react'
import {MdShoppingCart} from 'react-icons/md'
import './Navbar.css'
import Cards from '../../Cards'
import { Link } from 'react-router-dom'



function Navbar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/ecweb/">shop-Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/ecweb/cart'} className="nav-link active" aria-current="page"><MdShoppingCart size={'30px'}/>
          <sup>{Cards.count}</sup>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar