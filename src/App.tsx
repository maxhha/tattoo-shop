import { hot } from "react-hot-loader/root";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

import { IStore } from "types";

const App: React.FC<{store: IStore}> = ({store}) => {
  return (
    <div className="app">
        <Router>
            <Header />
            <Content store={store}/>
            <Footer />
        </Router>
    </div>
  );
}

export default hot(App);
