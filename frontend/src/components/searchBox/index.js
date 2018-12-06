import React from "react";
import Radium from 'radium';

const styles = {
  inputSearch: {
    height: '70px',
    fontSize: '2em',
    width: '80%',
    display: 'inline-block',
  },
  divButton: {
    height: 'auto',
    display: 'inline-block',
    marginLeft: '5px',
  },
  button: {

    marginLeft: '2px',
    height: '80px'
  },
}

export class SearchBox extends React.Component {
  render(){
    return(
      <div class="">
        <div className="card-body row no-gutters align-items-center">
          <div className="col" >
            <input className="form-control form-control-lg form-control-borderless" type="search" style={styles.inputSearch} />
            <div style={styles.divButton}>
              <button className="btn-default" style={styles.button} >Resumen</button>
              <button className="btn-primary" style={styles.button}>Enviar</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Radium(SearchBox);
