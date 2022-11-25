import logoTechBeer from './assets/logo.png'
import { checkVersion } from './utils'
import './App.css'

function App({ version }) {
  checkVersion(version)
  return (
    <div className="App">
      <img src={logoTechBeer} alt="TechAndBeer" />
      <h1>TechAndBeer #{version}</h1>
    </div>
  )
}
export default App
