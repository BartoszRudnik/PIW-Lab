import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Components/MainSection/Hero";
import Products from "./Components/ProductList/Products";
import HomePage from "./Components/Account/HomePage";
import SignIn from "./Components/Account/SignIn";
import SignUp from "./Components/Account/SignUp";
import PasswordReset from "./Components/Account/PasswordReset";
import PizzaProvider from "./Providers/PizzaProvider";
import Wrapper from "./Components/Account/Wrapper";
import UserProvider from "./Providers/UserProvider";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/wrapper" component={Wrapper} />
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/resetPassword" component={PasswordReset} />
      </Switch>
      <UserProvider>
        <Hero />
      </UserProvider>
      <PizzaProvider>
        <Products heading="Choose your favorite" />
      </PizzaProvider>
    </Router>
  );
}

export default App;
