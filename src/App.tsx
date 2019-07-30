import { hot } from "react-hot-loader/root";
import React from 'react';
import './App.scss';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

import Store from "apis/Store";


const App: React.FC = () => {
  const store = new Store();

  return (
    <div className="app">
        <Header />
        <Content store={store}/>
        <Footer />
    </div>
  );
}

export default hot(App);
