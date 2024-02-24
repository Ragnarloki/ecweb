import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import Card from './components/Card'
import contents from './contents'


function createCard(content){
  return (<Card 
    key={1}
    name={content.fruitname}          
    image={content.img}/>
  );  
}
function App() {
  return (
    <div>
      <Navbar/>
      <div className='map'>
      {contents.map(createCard)}
      </div>
    </div>
  )
}

export default App