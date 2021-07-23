import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Clientes, Produtos, Home} from './components';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/produtos' component={Produtos}/>
                <Route exact path='/clientes' component={Clientes} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routes;