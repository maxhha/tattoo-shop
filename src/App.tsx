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
  const cartReduced = useReducer(
      withLocalStorage("cart", CartReducer),
      cartInitialState,
      reducerLocalStorageInit("cart")
  );

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

function withLocalStorage<F extends any[], FR>(saveKey: string, fn: (...args: F) => FR){
    return (...args: F) => {
        const result : FR = fn(...args);
        console.log("local storage");
        try {
            window.localStorage.setItem(saveKey, JSON.stringify(result))
        } catch(e) {
            console.error(e)
        }
        return result;
    }
}

function reducerLocalStorageInit<S>(saveKey: string){
    return (initState: S) => {
        let state = initState;
        try {
            const data = window.localStorage.getItem(saveKey);
            if (data)
                state = JSON.parse(data);
        } catch(e) {
            console.error(e);
        }

        return state;
    }
}

export default hot(App);
