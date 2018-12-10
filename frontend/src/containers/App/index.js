import React from "react";
import { Link } from "react-router-dom";
import Radium from 'radium';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Box from '../../components/box';

import {selectProductLists} from '../Pedidos/actions';

import { readProduct } from '../../API';
import axios from 'axios';

const hostname = 'http://localhost/nuevoPventa/backend/';

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
  const d = readProduct();
  d.then(res => {
    console.log(res.data.registro)
  })
  .catch(error => {
    console.log(error)
  });
  return (
      <div>
        <ul>
          <Link to="/" style={styles.link}>
            <Box
              headTitle="Home"
              text="HOME"
            />
          </Link>
          <Link to="/PEDIDOS" style={styles.link} onClick={this.props.selectProductLists}>
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

export const actions = {
  selectProductLists
};

export function mapStateToProps(state, props) {
}

Raiz.propTypes = {
  selectProductLists: PropTypes.func.isRequired,
}

export default
  connect(
    mapStateToProps,
    actions
  )(Radium(Raiz));