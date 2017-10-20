import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloWorld from 'views/HelloWorld';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HelloWorld} />
                </Switch>
            </div>
        );
    }
}

export default App;
