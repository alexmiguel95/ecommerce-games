import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Checkout from './pages/checkout';
import Header from './components/header';
import Footer from './components/footer';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/checkout" component={Checkout}></Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
 
export default Routes;
