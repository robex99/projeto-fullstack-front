import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Login from '../screens/Login';
import Register from '../screens/Register';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Register/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
