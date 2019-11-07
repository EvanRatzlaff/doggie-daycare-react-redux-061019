import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PetNew from './containers/PetNew';
import PetList from './containers/PetList';
import PetShow from './containers/PetShow';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

class App extends Component {

  render() {
  
    return (
      <Router>
        <Nav />
          <div className="container" align="center">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/pets/new" component={ PetNew } />
              <Route exact path="/pets" component={ PetList } />
              <Route exact path="/pets/:id" component={ PetShow } />
            </Switch>
          </div>
      </Router>
           
    );
  }
}

export default App;
