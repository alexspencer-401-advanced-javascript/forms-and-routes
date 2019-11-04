import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        {/* <Link to='/yellow'>Yellow</Link> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
