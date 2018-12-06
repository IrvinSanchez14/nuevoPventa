import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  boxDefault: {
    borderColor: '#ddd',
  },
  boxHead: {
    textAlign: 'center',
    borderColor: '#ddd',
    ':hover': {
      background: '#bdc3c7',
    },
  },
  boxBody: {
    fontSize: '2em',
    textAlign: 'center',
  }
}

export class Box extends React.Component {

  render(){
    const box = (
      <div
        id="box-default"
        className="panel panel-default"
        style={styles.boxDefault}
      >
        <div
          id="box-head"
          className="panel-heading"
          style={styles.boxHead}
        >
          {this.props.headTitle}
        <div
          id="box-body"
          className="panel-body"
          onClick={this.props.onClick}
          style={styles.boxBody}
        >
          {this.props.text}
        </div>
       </div>
      </div>
    );
    return box;
  }
}

Box.propTypes = {
  headTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Radium(Box);