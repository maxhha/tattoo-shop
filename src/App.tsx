import { hot } from "react-hot-loader/root";
import React from 'react';
import './App.scss';
import Header from 'components/Header';
import Content from 'components/Content';


const App: React.FC = () => {
  return (
    <div className="app">
        <Header />
        <Content />
    </div>
  );
}

export default hot(App);
