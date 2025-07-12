import './sm-banner.css'

export function createSmBanner() {
  const smBanner = document.createElement('section')
  smBanner.classList.add('sm-banner')
  smBanner.innerHTML = `
    <div class="banner-box">
    <div class="banner-info">
    <h4>¡Brindá con Volcanica!</h4>
    <h2>Compra 1 y llevate otra GRATIS</h2>
    <span>Ediciones frescas, listas para sorprender.</span>
    <button>Conocer más.</button>
    </div>
    </div>

    <div class="banner-box">
    <div class="banner-info">
    <h4>¡Brindá con Volcanica!</h4>
    <h2>Compra 1 y llevate otra GRATIS</h2>
    <span>Ediciones frescas, listas para sorprender.</span>
    <button>Conocer más.</button>
    </div>
    </div>
  `
  return smBanner
}
