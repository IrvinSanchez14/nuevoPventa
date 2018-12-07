import React from "react";
import Radium from 'radium';

import Button from '../Button';

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
    marginLeft: '15px',
  },
  button: {
    marginLeft: '5px',
    height: '80px'
  },
  hrStyle: {
    borderWidth: '5px',
    color: 'red',
  },
}

export class SearchBox extends React.Component {
  render(){
    return(
      <div>
        <div className="card-body row no-gutters align-items-center">
          <div className="col" >
            <input className="form-control form-control-lg form-control-borderless" type="search" style={styles.inputSearch} />
            <div style={styles.divButton}>
              <Button
                className="btn-primary"
                text="Enviar"
                style={styles.button}
                />
              <Button
                className="btn-danger"
                text="Borrar"
                style={styles.button}
              />
              <Button
                className="btn-info"
                text="Resumen"
                style={styles.button}
              />
            </div>
          </div>
        </div>
        <hr style={styles.hrStyle}/>
      </div>
    );
  }
}

export default Radium(SearchBox);
