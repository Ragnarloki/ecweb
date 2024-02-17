import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js"
import 'bootstrap/dist/js/bootstrap.min.js'
import Card from './components/Card'

function App() {
  return (
    <div>
      <Navbar/>
      <Card />
    </div>
  )
}

export default App