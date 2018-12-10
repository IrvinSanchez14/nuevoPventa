import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  base: {
    display: 'inline-block',
    fontSize: '1em',
    margin: '2px',
    padding: '4px',
    fontWeight: 'bold',
  },
  name: {
    minWidth: '140px',
    float: 'left',
  },
  precio: {
    float: 'right',
    marginLeft: '35px',
  }
}

export class ProductBox extends React.Component {
  render() {
    return (
      <div 
        className="panel panel-default" 
        style={[
          styles.base,
          this.props.style,
        ]}
        onClick={this.props.onClick} 
      >
        <div style={styles.name}>
          {this.props.name}
          <div style={styles.precio}>
            {this.props.price}
          </div>
        </div>
      </div>
    );
  }
}

ProductBox.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
}

export default Radium(ProductBox);