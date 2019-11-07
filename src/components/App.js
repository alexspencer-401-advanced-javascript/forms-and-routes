import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import List from './list/List';
import CharacterContainer from '../components/containers/CharacterContainer';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/list/:search" component={List}></Route>
          <Route path="/character/:id" component={CharacterContainer}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
