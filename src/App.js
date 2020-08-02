import React from "react";
import StoreContextProvider from "./context";
import { ProductPage } from "./pages/ProductPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsList } from "./pages/ProductsList";
import { PageNotFound } from "./pages/PageNotFound";
import {Navbar} from './components/navbar/Navbar';
import {Cart} from './components/cart/Cart'

function App() {
  return (
    <div className="App">

      <StoreContextProvider>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/:slug" component={ProductPage} />
          <Route path='/cart' component={Cart} />
          <Route path="/404" component={PageNotFound} />

          <Redirect to="/404" />
        </Switch>
      </StoreContextProvider>
    </div>
  );
}

export default App;
