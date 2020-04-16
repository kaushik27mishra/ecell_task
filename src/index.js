import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ParticlesBg from "particles-bg";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <ParticlesBg type="color" bg={true}/>
    <App />
    </React.Fragment>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
