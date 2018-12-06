import React from "react";
import { Link } from "react-router-dom";
import Box from '../../components/box';

const styles = {
  link: {
    textDecoration: 'none',
  },
}

export class Raiz extends React.Component {

prueba = (e) => {
  e.preventDefault();
  window.location.href = "/"
}


render () {
  console.log('this.props',this.props);
  return (
      <div>
        <ul>
          <Link to="/" style={styles.link}>
            <Box
              headTitle="Home"
              text="HOME"
            />
          </Link>
          <Link to="/PEDIDOS" style={styles.link}>
            <Box
              headTitle="Pedidos"
              text="PEDIDOS"
            />
          </Link>
          <Link to="/CAJA" style={styles.link}>
            <Box
              headTitle="Caja"
              text="CAJA"
            />
          </Link>
          <Link to="/IMPRESION" style={styles.link}>
            <Box
              headTitle="Impresion"
              text="IMPRESION"
            />
          </Link>
          <Link to="/NODO" style={styles.link}>
            <Box
              headTitle="Nodo"
              text="NODO"
            />
          </Link>
          <Link to="/DESPACHO" style={styles.link}>
            <Box
              headTitle="Despacho"
              text="DESPACHO"
            />
          </Link>
          <Link to="/STAT" style={styles.link}>
            <Box
              headTitle="Stat"
              text="STAT"
            />
          </Link>
        </ul>
      </div>
    );
  }
}

export default Raiz;