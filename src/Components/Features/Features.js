import './features.css'

export function createFeatures() {
  const features = document.createElement('section')
  features.classList.add('features')
  features.innerHTML = `
      <div class="features-container">
        <div class="features-track">
          <div class="feature-item">
            <img src="../../../public/features/free-shipping.webp" alt="Free Shipping" class="features-image">
            <img src="../../../public/features/free-shipping-black.webp" alt="Free Shipping" class="features-image-black">
          </div>

          <div class="feature-item">
            <img src="../../../public/features/online-order.webp" alt="Online Order" class="features-image">
            <img src="../../../public/features/online-order-black.webp" alt="Online Order" class="features-image-black">
          </div>

          <div class="feature-item">
            <img src="../../../public/features/promotions.webp" alt="Promotions" class="features-image">
            <img src="../../../public/features/promotions-black.webp" alt="Promotions" class="features-image-black">
          </div>

          <div class="feature-item">
            <img src="../../../public/features/save-money.webp" alt="Save Money" class="features-image">
            <img src="../../../public/features/save-money-black.webp" alt="Save Money" class="features-image-black">
          </div>

          <div class="feature-item">
            <img src="../../../public/features/support.webp" alt="Support" class="features-image">
            <img src="../../../public/features/support-black.webp" alt="Support" class="features-image-black">
          </div>
        </div>
      </div>
  `

  // Inicializar el carrusel después de que el DOM esté listo
  setTimeout(() => {
    initCarousel(features)
  }, 0)

  return features
}

function initCarousel(container) {
  const track = container.querySelector('.features-track')
  const items = Array.from(container.querySelectorAll('.feature-item'))
  const itemWidth = items[0].offsetWidth
  const totalWidth = itemWidth * items.length

  // Duplicar los items para un desplazamiento infinito suave
  items.forEach((item) => {
    const clone = item.cloneNode(true)
    track.appendChild(clone)
  })

  let position = 0
  const speed = 0.5 // píxeles por frame

  function animate() {
    position -= speed

    // Si hemos recorrido el ancho de todos los items originales,
    // reiniciamos la posición para un desplazamiento continuo
    if (position <= -totalWidth) {
      position = 0
    }

    track.style.transform = `translateX(${position}px)`
    requestAnimationFrame(animate)
  }

  // Iniciar la animación
  requestAnimationFrame(animate)
}
