import './style.css'
import { createHeader } from './Components/Header/Header.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app') // Suponiendo que hay un <div id="app"></div>
  app.appendChild(createHeader())
})
