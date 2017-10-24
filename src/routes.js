import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloWorld from 'views/HelloWorld';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
/* eslint-disable react/prefer-stateless-function */

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HelloWorld} />
            </Switch>
        );
    }
}

export default Routes;
