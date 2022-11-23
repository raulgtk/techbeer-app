import { useState } from 'react'
import logoTrevenque from './assets/logo.svg'
import logoTechBeer from './assets/logo.png'
import './App.css'

function App({ version }) {
  if (typeof version !== 'number') {
    throw new Error("number")
  }
  return (
    <div className="App">
      <img src={logoTechBeer} alt="TechAndBeer" />
      <h1>TechAndBeer #{version}</h1>
    </div>
  )
}
export default App
