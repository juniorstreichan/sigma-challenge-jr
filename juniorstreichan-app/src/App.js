import React, { Component } from 'react';
import { Navbar, Container, Footer } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './views';

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

            </Switch>

          </div>
          <Footer />
        </div>

      </BrowserRouter>


    );
  }
}

export default App;
