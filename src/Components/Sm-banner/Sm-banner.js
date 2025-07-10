import './sm-banner.css'

export function createSmBanner() {
  const smBanner = document.createElement('section')
  smBanner.classList.add('sm-banner')
  smBanner.innerHTML = `
    <div class="banner-box">
    <div class="banner-info">
    <img src="../public/promos/promo01.png" alt="promo-01">
        <h4>Lo Último para Brindar</h4>
        <h2>Del corazón del volcán directo a tu vaso.</h2>
        <p>Probadas, aprobadas y adoradas.</p>
        <button>Destapá el dato.</button>
      </div>
    </div>
  `
  return smBanner
}
