import React from "react";
import Radium from 'radium';
import { connect } from 'react-redux';

import SearchBox from '../../components/searchBox';
import ProductBox from '../../components/ProductBox';

import { getProducts } from './selectors';

const styles = {
  head: {
    padding: '15px',
  },
  normalProduct: {
    backgroundColor: '#3498db',
    border: '3px solid #2980b9',
    color: '#ffffff',
    ':hover': {
      color: '#f1c40f',
    }
  }
}

export class Pedidos extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0,20)
    });
  }

  selectAditional = () => {
    console.log('menu');
  }

  componentDidMount() {
  }

  render(){
    const product = this.props.getProducts.filter((product) => {
      return product.nombre.toLowerCase().indexOf(this.state.search) !== -1 ;
    });
    const listProducto = product.map((name) => {
      return (
        <ProductBox
        key={name.ID_producto}
        style={styles.normalProduct} 
        name={name.nombre}
        price={`$${name.precio}`}
        onClick={this.selectAditional}
      />
      );
    })
    console.log(this.state)
    return(
      <div style={styles.head}>
        <SearchBox
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <div>
        {listProducto}
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state, props) {
  return {
    getProducts: getProducts(state,props),
  };
}

export const actions = {
};

Pedidos.propTypes = {
}

export default
  connect(
    mapStateToProps,
    actions
  )(Radium(Pedidos));
