import './style.css'
import { createHeader } from './Components/Header/Header.js'
import { createIntro } from './Components/Intro/Intro.js'
import { createFeatures } from './Components/Features/features.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  app.appendChild(createHeader())
  app.appendChild(createIntro())
  app.appendChild(createFeatures())
})
