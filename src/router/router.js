import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Game from '../components/game';
import Study from '../components/study';
import Home from '../components/home';


export default function RouterConfig() {
    return (
        <div>
            <Home />
            <div>
                <Router>
                    <Route path="/game" component={Game}></Route>
                    <Route path="/study" component={Study}></Route>
                </Router>
            </div>
        </div>
    )
};