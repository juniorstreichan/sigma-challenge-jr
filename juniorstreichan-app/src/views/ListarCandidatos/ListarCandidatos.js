import React, { Component } from 'react';
import Spinner from 'react-spinkit' 

class ListarCandidatos extends Component {
    render() {
        return (
            <div>
             <Spinner name="cube-grid"  color='yellow'  />  
             <Spinner name="cube-grid"  color='yellow'  />  
             <Spinner name="cube-grid"  color='yellow'  />  
            </div>
        );
    }
}

export default ListarCandidatos;