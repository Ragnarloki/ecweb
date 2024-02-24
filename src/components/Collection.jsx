import React from 'react'
import '../AppCard.css'
import Cards from '../Cards.jsx'
import contents from '../contents'
import Navbar from './Navbar/Navbar.jsx'

function createCard(content){
 
  return (<Cards 
    key={content.id}
    name={content.fruitname}          
    image={content.img}/>
  );  
}

function Collection() {
  return (
    <div>
        <Navbar/>
        <div>
        <div className='map'>
      {contents.map(createCard)}
      </div>
      </div>

  
    </div>
  )
}

export default Collection