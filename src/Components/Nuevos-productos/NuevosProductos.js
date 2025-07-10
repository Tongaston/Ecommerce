import './nuevosProductos.css'

export function createNuevosProductos() {
  const nuevosProductos = document.createElement('section')
  nuevosProductos.classList.add('favs-container')
  nuevosProductos.innerHTML = `
    <h2>Lo Último para Brindar</h2>
    <p>Del corazón del volcán directo a tu vaso.</p>
      <div class="product-container">
        <div class="product">
          <img src="../public/products/pro-1.png" alt="cerveza blonde">
          <div class="product-info">
          <span>100% Orgánica</span>
            <h5>Cerveza Blonde</h5>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h4>$139.99</h4>
          </div>
          <a href="#" class="bi bi-cart-fill cart"></a>
        </div>

        <div class="product">
          <img src="../public/products/pro-2.png" alt="cerveza blonde">
          <div class="product-info">
          <span>100% Orgánica</span>
            <h5>Cerveza IPA</h5>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h4>$139.99</h4>
          </div>
          <a href="#" class="bi bi-cart-fill cart"></a>
        </div>

        <div class="product">
          <img src="../public/products/pro-3.png" alt="cerveza blonde">
          <div class="product-info">
          <span>100% Orgánica</span>
            <h5>Cerveza Dark ALE</h5>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h4>$139.99</h4>
          </div>
          <a href="#" class="bi bi-cart-fill cart"></a>
        </div>

        <div class="product">
          <img src="../public/products/pro-4.png" alt="cerveza blonde">
          <div class="product-info">
          <span>100% Orgánica</span>
            <h5>Cerveza Dubbel</h5>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h4>$139.99</h4>
          </div>
          <a href="#" class="bi bi-cart-fill cart"></a>
        </div>

        <div class="product">
          <img src="../public/products/pro-5.png" alt="cerveza blonde">
          <div class="product-info">
          <span>100% Orgánica</span>
            <h5>Cerveza IPA Mango</h5>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h4>$139.99</h4>
          </div>
          <a href="#" class="bi bi-cart-fill cart"></a>
        </div>

        <div class="product">
          <img src="../public/products/pro-6.png" alt="cerveza blonde">
          <div class="product-info">
          <span>100% Orgánica</span>
            <h5>Cerveza Doble IPA</h5>
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <h4>$139.99</h4>
          </div>
          <a href="#" class="bi bi-cart-fill cart"></a>
        </div>
      </div>
    `
  return nuevosProductos
}
