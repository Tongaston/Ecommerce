import './banner.css'

export function createBanner() {
  const banner = document.createElement('section')
  banner.classList.add('banner-container')
  banner.innerHTML = `
   <h4>¡Cervezas artesanales a precio de lava fría!</h4>
   <h2>Promo volcánica: <span>¡30% OFF!</span></h2>
   <button>Destapá el dato.</button>
  `
  return banner
}
