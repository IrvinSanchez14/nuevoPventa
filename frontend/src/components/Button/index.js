import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

export class Button extends React.Component {
  render() {
    return(
      <button
        className={this.props.className}
        style={this.props.style}
      >
      {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Radium(Button);