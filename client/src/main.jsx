import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {store} from './redux/store/store.js';
// import {Provider} from 'react-redux';

//Removed Redux and will apply contextAPI
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>,
)
