import React from 'react';
import StoreContextProvider from './context';
import { ProductPage } from './pages/ProductPage';
import {Route, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
function App() {
  return (
    <div className="App">
    <Switch>
     <StoreContextProvider>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products/:slug' component={ProductPage}/>
     </StoreContextProvider>

    </Switch>
    </div>
  );
}

export default App;
