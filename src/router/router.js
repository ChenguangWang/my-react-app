import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Game from '../pages/game';
import Study from '../pages/study';
import Home from '../pages/home';
import Philosophy from '../pages/philosophy/philosophy';

export default function RouterConfig() {
  return (
    <div>
      <div>
        <Router>
          <Home />
          <br />
          <Route path="/game" component={Game}></Route>
          <Route path="/study" component={Study}></Route>
          <Route path="/philosophy" component={Philosophy}></Route>
        </Router>
      </div>
    </div>
  );
}
