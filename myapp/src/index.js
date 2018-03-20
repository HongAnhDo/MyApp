import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OfferSearch from './components/OfferSearch';
import registerServiceWorker from './registerServiceWorker';
import PickLocation from './components/PickLocation'


ReactDOM.render(<PickLocation />, document.getElementById('root'));
registerServiceWorker();
