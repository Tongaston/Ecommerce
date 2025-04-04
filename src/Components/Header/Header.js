import './Header.css'

export function createHeader() {
  const header = document.createElement('header')
  header.classList.add('header')
  header.innerHTML = `
  <a href="#" class='logo'>VOLCANICA <span>STORE</span></a>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  `
  return header
}
