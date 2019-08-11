import { hot } from "react-hot-loader/root";
import React, { useReducer } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import StoreContext from "apis/StoreContext";
import CartContext, { CartReducer } from "components/CartContext";

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

import { IStore } from "types";

const App: React.FC<{store: IStore}> = ({store}) => {
  store.setVersion("1.01");

  const cartInitialState = {items: []};
  const cartReduced = useReducer(CartReducer, cartInitialState, (s) => s);

  return (
    <div className="app">
        <StoreContext.Provider value={store}>
            <CartContext.Provider value={cartReduced}>
                <Router>
                    <Header />
                    <Content />
                    <Footer />
                </Router>
            </CartContext.Provider>
        </StoreContext.Provider>
    </div>
  );
}

export default hot(App);
