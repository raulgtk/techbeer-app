import { useState } from 'react'
import logoTrevenque from './assets/logo.svg'
import logoTechBeer from './assets/logo.png'
import './App.css'

function App() {
  const version = 1
  return (
    <div className="App">
      <img src={logoTechBeer} alt="Trevenque" />
      <h1>TechAndBeer #{version}</h1>
    </div>
  )
}
export default App
