import './features.css'

export function createFeatures() {
  const features = document.createElement('section')
  features.classList.add('features')
  features.innerHTML = `
      <div class="features-container">
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
`

  return features
}
