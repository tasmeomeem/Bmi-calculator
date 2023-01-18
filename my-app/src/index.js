import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
<div id="root"></div>
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
