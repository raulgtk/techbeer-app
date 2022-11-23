import { useState } from 'react'
import logoTrevenque from './assets/logo.svg'
import techBeer from './assets/techbeer.png'
import './App.css'

function App() {
  const version = 1
  return (
    <div className="App">
      <img src={logoTrevenque} alt="Trevenque" />
      <h1>TechAndBeer #{version}</h1>
    </div>
  )
}
export default App
