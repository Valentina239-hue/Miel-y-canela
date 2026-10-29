
import './App.css';

function App() {
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

      <section id="inicio" className="principal">
        <h2>¡Bienvenidos a Dulce Encanto!</h2>
        <p>
          Disfruta deliciosos postres, tortas y bebidas
          preparados con mucho amor.
        </p>
        <a className="boton" href="#menu">Ver nuestro menú</a>
      </section>

      <section id="menu" className="menu">
        <h2>Nuestro menú</h2>

        <div className="productos">
          <article className="producto">
            <div className="emoji">🎂</div>
            <h3>Torta de chocolate</h3>
            <p>Suave, esponjosa y llena de sabor.</p>
            <strong>$8.000</strong>
          </article>

          <article className="producto">
            <div className="emoji">🧁</div>
            <h3>Cupcakes</h3>
            <p>Pequeños pastelitos con deliciosas cremas.</p>
            <strong>$4.000</strong>
          </article>

          <article className="producto">
            <div className="emoji">🍪</div>
            <h3>Galletas</h3>
            <p>Crujientes y perfectas para compartir.</p>
            <strong>$3.000</strong>
          </article>

          <article className="producto">
            <div className="emoji">🥤</div>
            <h3>Malteadas</h3>
            <p>Bebidas cremosas de diferentes sabores.</p>
            <strong>$7.000</strong>
          </article>
        </div>
      </section>

      <footer id="contacto">
        <h2>¡Te esperamos!</h2>
        <p>📍 Medellín, Colombia</p>
        <p>📞 300 000 0000</p>
        <p>© 2026 Dulce Encanto - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
