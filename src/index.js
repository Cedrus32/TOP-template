import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './scripts/components/MyApp';

import './styles/style.css';
import './styles/reset.css';
import iconsArray from './scripts/icons.js';

import storage from './scripts/storage.js';
import events from './scripts/events.js';

// import Img from './img.png';
// import XmlData from './data.xml';
// import CsvData from './data.csv';

// manager function here
console.log('webpack is working!');
ReactDOM.render(<MyApp />, document.getElementById('app'));
