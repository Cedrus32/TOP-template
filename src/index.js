import React from 'react';
import { createRoot } from 'react-dom/client'
import MyApp from './components/MyApp';

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
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<MyApp />);
