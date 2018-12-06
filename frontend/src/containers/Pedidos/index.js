import React from "react";
import Radium from 'radium';

import SearchBox from '../../components/searchBox';

const styles = {
  head: {
    padding: '10px',
  },
}

export class Pedidos extends React.Component {
  render(){
    return(
      <div style={styles.head}>
        <SearchBox />
      </div>
    );
  }
}

export default Radium(Pedidos);