
function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Nuestro menú</h2>

      <div className="productos">
        <article className="producto">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
            alt="Torta de chocolate"
          />
          <h3>Torta de chocolate</h3>
          <p>Suave, esponjosa y llena de sabor.</p>
          <strong>$8.000</strong>
        </article>

        <article className="producto">
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500"
            alt="Cupcakes"
          />
          <h3>Cupcakes</h3>
          <p>Pequeños pastelitos con deliciosas cremas.</p>
          <strong>$4.000</strong>
        </article>

        <article className="producto">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"
            alt="Galletas"
          />
          <h3>Galletas</h3>
          <p>Crujientes y perfectas para compartir.</p>
          <strong>$3.000</strong>
        </article>

        <article className="producto">
          <img
            src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
            alt="Malteada"
          />
          <h3>Malteadas</h3>
          <p>Bebidas cremosas de diferentes sabores.</p>
          <strong>$7.000</strong>
        </article>
      </div>
    </section>
  );
}

export default Menu;
