import './style.css'
import { createHeader } from './Components/Header/Header.js'
import { createIntro } from './Components/Intro/Intro.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  app.appendChild(createHeader())
  app.appendChild(createIntro())
})
