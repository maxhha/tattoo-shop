import { hot } from "react-hot-loader/root";
import React from 'react';
import './App.scss';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default hot(App);
