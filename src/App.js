
import { useState } from 'react';
import './App.css';
import SeccionPrincipal from './SeccionPrincipal';
import Menu from './menu';
import Footer from './Footer';

function App() {
  const [mostrarOferta, setMostrarOferta] = useState(false);

  return (
    <div className="restaurante">
      <header className="encabezado">
        <h1>🍰 Dulce Encanto</h1>
        <p>Un pedacito de felicidad en cada bocado</p>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <SeccionPrincipal />

      <section className="oferta">
        <h2>¡Tenemos una sorpresa para ti!</h2>

        <button onClick={() => setMostrarOferta(!mostrarOferta)}>
          {mostrarOferta ? 'Ocultar sorpresa' : 'Descubrir sorpresa'}
        </button>

        {mostrarOferta && (
          <p>🎉 ¡Obtén un 20% de descuento en tu próxima compra!</p>
        )}
      </section>

      <Menu />
      <Footer />
    </div>
  );
}

export default App;

