import './Intro.css'

export function createIntro() {
  const intro = document.createElement('section')
  intro.innerHTML = `
   <section id="intro">
   <div class="contenido-texto">
   <p>Cerveza artesanal con alma volcánica</p>
   <h2>🌋 Bienvenidos a </h2>
   <img class="img-intro" src="../public/img/logo-volcanica-store.png" alt="Logo Volcanica Store}"> 
   <div>
   <p>Elegí. Comprá. Brindá. Todo desde tu casa.</p>
   </div>
   <button class="btn">Comprar!</button>
    </div>
    </section>
  `
  return intro
}

/*
<span class="span-title-1">VOLCANICA</span> <span class="span-title-2">Store</span>
*/
