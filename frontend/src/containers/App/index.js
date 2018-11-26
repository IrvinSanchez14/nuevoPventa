import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Raiz() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PEDIDOS">PEDIDOS</Link>
          </li>
          <li>
            <Link to="/CAJA">CAJA</Link>
          </li>
          <li>
            <Link to="/IMPRESION">IMPRESION</Link>
          </li>
          <li>
            <Link to="/NODO">NODO</Link>
          </li>
          <li>
            <Link to="/DESPACHO">DESPACHO</Link>
          </li>
          <li>
            <Link to="/STAT">STAT</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/"  />
        <Route path="/PEDIDOS"  />
        <Route path="/CAJA"  />
        <Route exact path="/IMPRESION"  />
        <Route path="/NODO"  />
        <Route path="/DESPACHO"  />
        <Route path="/STAT"  />
      </div>
    </Router>
  );
}

export default Raiz;