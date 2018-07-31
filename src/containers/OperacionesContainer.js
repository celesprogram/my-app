import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setIncrement,setDecrement} from '../actions'

class OperacionesContainer extends Component {
   
    render() {
        const { setIncrement, setDecrement,  valor  }  = this.props;
        return (
            <div>
              <p> Contador: {valor}</p>  
              <div>
                <button onClick={setIncrement}>Increment</button>
                <button onClick={setDecrement}>Decrement</button>
              </div>  
            </div>
        );
    }
}


OperacionesContainer.propTypes = {
    valor : PropTypes.number.isRequired,
    setIncrement : PropTypes.func.isRequired,
    setDecrement : PropTypes.func.isRequired
};

const mapDistpachToProps = dispatch =>({
    setIncrement : () => dispatch(setIncrement()),
    setDecrement : () => dispatch(setDecrement())
});

const mapStateToProps = state =>({
    valor: state.operaciones.valor
});    

export default connect(mapStateToProps,mapDistpachToProps) (OperacionesContainer);