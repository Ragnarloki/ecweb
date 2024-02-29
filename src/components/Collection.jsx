import React, { useState } from 'react'
import '../AppCard.css'
import Cards from '../Cards.jsx'
import contents from '../contents'
import Navbar from './Navbar/Navbar.jsx'

// function createCard(content){
 
//   return (<Cards 
//     key={content.id}
//     name={content.fruitname}          
//     image={content.img}
//     price={content.price}/>
//   );  
// }

function Collection({handleClick,handleclick}) {
  
  return (
    <div>

        <div>
        <div className='map'>
        {contents.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} handleclick={handleclick}/>
            ))}</div>
      </div>

  
    </div>
  )
}

export default Collection