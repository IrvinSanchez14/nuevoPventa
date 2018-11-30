import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  boxDefault: {
    borderColor: '#ddd',
  },
  boxHead: {
    color: '#333',
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
  },
  boxBody: {
    padding: '15px',
  }
}

export class Box extends React.Component {

  render(){
    const box = (
      <div
        id="box-default"
        className="panel panel-default"
      >
        <div
          id="box-head"
          className="panel-heading"
        >
          {this.props.headTitle}
        </div>
        <div
          id="box-body"
          className="panel-body"
          onClick={this.props.onClick}
        >
          {this.props.text}
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