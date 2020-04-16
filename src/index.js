import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParticlesBg from "particles-bg";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ParticlesBg type="color" bg={true}/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
