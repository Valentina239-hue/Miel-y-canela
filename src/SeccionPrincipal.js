
import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal" id="inicio">
      <h1>¡Bienvenidos a Dulce Encanto!</h1>

      <p>
        Disfruta deliciosos postres, tortas y bebidas
        preparados con mucho amor.
      </p>

      <img
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
        alt="Deliciosa torta de chocolate"
        className="imagen-destacada"
      />

      <br />

      <button
        className="boton-accion"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          ¡Felicidades! Tienes un 20% de descuento en tu primera compra.
        </p>
        
      )}
            <section className="productos" id="menu">
        <h2>Nuestros productos</h2>

        <div className="lista-productos">
          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
              alt="Torta de chocolate"
            />
            <h3>Torta de chocolate</h3>
            <p>$8.000</p>
          </div>

          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600"
              alt="Cupcakes"
            />
            <h3>Cupcakes</h3>
            <p>$4.000</p>
          </div>

          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600"
              alt="Galletas"
            />
            <h3>Galletas</h3>
            <p>$3.000</p>
          </div>

          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
              alt="Malteada"
            />
            <h3>Malteadas</h3>
            <p>$7.000</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SeccionPrincipal;
