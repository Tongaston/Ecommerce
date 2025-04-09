import './Header.css'

export function createHeader() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.innerHTML = `
  <a href="#" class='logo'><img src="../public/img/logo-volcanica-store.png"></a>
  <nav>
    <ul id="navbar">
      <li><a class="active" href="index.html">Inicio</a></li>
      <li><a href="shop.html">Tienda</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="about.html">Sobre nosotros</a></li>
      <li><a href="contact.html">Contacto</a></li>
      <li><a href="cart.html"><i class="bi bi-cart-fill"></i></a></li>
    </ul>
  </nav>
  `
  return header
}
