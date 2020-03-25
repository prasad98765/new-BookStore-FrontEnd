import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BookStoreFirstPage from './component/FrontPage/BookStoreFirstPage'
import CustDetails from './component/addToCart/addToCart'
import SignUpAndSignIn from './component/login/singUpAndSign'
import TopBar from "./component/topbar/navbar";
import Checkout from './component/checkout/checkout'
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path = "/" component = {BookStoreFirstPage} exact = {true}/>
        <Route path = "/addToCart" component = {CustDetails}/>
        <Route path = "/checkout" component = {Checkout}/>
        <Route path = "/login" component = {SignUpAndSignIn}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
