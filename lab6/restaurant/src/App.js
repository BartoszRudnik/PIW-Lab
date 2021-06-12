import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./Components/MainSection/Hero";
import Products from "./Components/ProductList/Products";
import HomePage from "./Components/Account/HomePage";
import SignIn from "./Components/Account/SignIn";
import SignUp from "./Components/Account/SignUp";
import PasswordReset from "./Components/Account/PasswordReset";
import PizzaProvider from "./Providers/PizzaProvider";
import UserProvider from "./Providers/UserProvider";
import OrderProvider from "./Providers/OrderProvider";
import OrderNow from "./Components/ConfirmOrder/OrderNow";
import OrdersList from "./Components/OrdersHistory/OrdersList";
import OrderItem from "./Components/OrdersHistory/OrderItem";

function App() {
  const [orderedPizzas, setOrder] = useState([]);

  const checkIfAlreadyInCart = (name) => {
    return orderedPizzas.some((pizza) => pizza.name === name);
  };

  const clearCart = () => {
    setOrder([]);
  };

  const cartManager = (name, price) => {
    if (checkIfAlreadyInCart(name)) {
      incrementQuantity(name);
    } else {
      addPizza(name, price);
    }
  };

  const incrementQuantity = (name) => {
    const index = orderedPizzas.findIndex((pizza) => pizza.name === name);
    var tmpOrderedPizzas = [...orderedPizzas];

    var pizzaToEdit = orderedPizzas.find((pizza) => pizza.name === name);
    pizzaToEdit.quantity += 1;

    tmpOrderedPizzas[index] = pizzaToEdit;

    setOrder([...tmpOrderedPizzas]);
  };

  const addPizza = (name, price) => {
    const quantity = 1;

    const newPizza = { name, price, quantity };

    setOrder([...orderedPizzas, newPizza]);
  };

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/resetPassword" component={PasswordReset} />
          <Route
            exact
            path="/orderNow"
            render={(props) => <OrderNow {...props} clearCart={clearCart} />}
          />
          <Route exact path="/ordersHistory" component={OrdersList} />
          <Route exact path="/orderItem" component={OrderItem} />
        </Switch>
        <Hero actualOrder={orderedPizzas} />
        <PizzaProvider>
          <Products heading="Choose your favorite" addToCart={cartManager} />
        </PizzaProvider>
      </Router>
    </UserProvider>
  );
}

export default App;
