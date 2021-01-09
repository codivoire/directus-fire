import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './components/Nav';

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <div className="container">
        
        <Nav />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
