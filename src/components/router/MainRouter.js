import React from 'react';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom';
import { AcercaDe } from '../AcercaDe';
import { Buscar } from '../Buscar';
import { ErrorPage } from '../ErrorPage';
import { Home } from '../Home';
import { Menu } from './Menu';
export const MainRouter = () => {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>{/*Pagina de inicio*/}
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/buscar" component={Buscar}/>
                    <Route exact path="/acercade" component={AcercaDe}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Router>
        </div>
    )
}
