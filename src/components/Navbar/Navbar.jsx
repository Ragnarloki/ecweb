import React from 'react'
import './Navbar.css'
import '../../AppCard.css'
import Cards from '../../Cards.jsx'
import contents from '../../contents'

function createCard(content){
  return (<Cards 
    key={1}
    name={content.fruitname}          
    image={content.img}/>
  );  
}

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">shop-card</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
<div className='map'>
      {contents.map(createCard)}
      </div>

    </div>
  )
}

export default Navbar