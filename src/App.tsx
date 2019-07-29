import { hot } from "react-hot-loader/root";
import React from 'react';
import './App.scss';
import Header from 'components/Header';


const App: React.FC = () => {
  return (
    <div className="app">
        <Header />
    </div>
  );
}

export default hot(App);
