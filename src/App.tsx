import { hot } from "react-hot-loader/root";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import StoreContext from "apis/StoreContext";

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

import { IStore } from "types";

const App: React.FC<{store: IStore}> = ({store}) => {
  store.setVersion("1.01");

  return (
    <div className="app">
        <StoreContext.Provider value={store}>
            <Router>
                <Header />
                <Content />
                <Footer />
            </Router>
        </StoreContext.Provider>
    </div>
  );
}

export default hot(App);
