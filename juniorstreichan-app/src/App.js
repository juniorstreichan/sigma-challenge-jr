import React, { Component } from 'react';
import { Navbar, Container, Footer } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, ListarCandidatos, DetalhesCandidato } from './views';

class App extends Component {


  render() {
    const styles = {

      maxWidth: '950px',
      width: '100%',
      margin: '80px auto'

    }
    return (

      <BrowserRouter >
        <div>
          <Navbar />
          <div style={styles}>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/candidatos/:cargo"  component={ListarCandidatos} />
              <Route path="/candidato/:id" exact component={DetalhesCandidato} />
              <Route path="*" exact component={Home} />

            </Switch>

          </div>
          <Footer />
        </div>

      </BrowserRouter>


    );
  }
}

export default App;
