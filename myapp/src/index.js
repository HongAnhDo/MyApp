import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OfferSearch from './components/OfferSearch';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
