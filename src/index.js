import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Link } from "react-router-dom";
import AddUsers from "./pages/AddUsers";
import Home from "./pages/Home"
ReactDOM.render((
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
), document.getElementById('root'))


