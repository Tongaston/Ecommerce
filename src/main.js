import './style.css'
import { createHeader } from './Components/Header/Header.js'
import { createIntro } from './Components/Intro/Intro.js'
import { createFeatures } from './Components/Features/features.js'
import { createFavs } from './Components/Favs/Favs.js'
import { createBanner } from './Components/Banner/Banner.js'
import { createNuevosProductos } from './Components/Nuevos-productos/NuevosProductos.js'
import { createSmBanner } from './Components/Sm-banner/Sm-banner.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  app.appendChild(createHeader())
  app.appendChild(createIntro())
  app.appendChild(createFeatures())
  app.appendChild(createFavs())
  app.appendChild(createBanner())
  app.appendChild(createNuevosProductos())
  app.appendChild(createSmBanner())
})
