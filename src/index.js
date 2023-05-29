import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/AppFunc';

import './styles/reset.css';
import './styles/style.css';
import icons from './scripts/icons.js';
import fonts from './scripts/fonts.js';

import storage from './scripts/storage.js';
import events from './scripts/events.js';

console.log('webpack is working!');
const root = createRoot(document.getElementById('root'));
root.render(<App />);
