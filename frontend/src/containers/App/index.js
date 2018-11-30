import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Box from '../../components/box';

export class Raiz extends React.Component {

prueba = (e) => {
  e.preventDefault();
  window.location.href = "/"
}

render () {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/">
            <Box
              headTitle="Home"
              text="HOME"
            />
          </Link>
            <Box
              headTitle="Pedidos"
              text="PEDIDOS"
            />
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
}

export default Raiz;