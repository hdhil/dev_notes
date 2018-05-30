import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello greeting="Harman" date="thursday"/>, document.getElementById('root'));

registerServiceWorker();
