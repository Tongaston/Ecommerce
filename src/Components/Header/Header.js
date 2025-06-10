import './Header.css'

export function createHeader() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.innerHTML = `
  <a href="#" class='logo'><img src="../public/img/logo-volcanica-store.png"></a>
  <div class="menu-btn">
    <div class="menu-btn__burger"></div>
    <div class="menu-btn__burger"></div>
    <div class="menu-btn__burger"></div>
  </div>
  <nav class="nav">
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

  // Agregar funcionalidad al menú hamburguesa
  const menuBtn = header.querySelector('.menu-btn')
  const nav = header.querySelector('.nav')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    nav.classList.toggle('open')
  })

  return header
}
