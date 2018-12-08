import React from "react";
import Radium from 'radium';

import SearchBox from '../../components/searchBox';
import ProductBox from '../../components/ProductBox';

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

  selectAditional = () => {
    console.log('menu');
  }

  render(){
    return(
      <div style={styles.head}>
        <SearchBox />
        <div>
          <ProductBox
            onClick={this.selectAditional}
            style={styles.normalProduct} 
            name="Pizza Hawaianna"
            price="$25.00"
          />
        </div>
      </div>
    );
  }
}

export default Radium(Pedidos);