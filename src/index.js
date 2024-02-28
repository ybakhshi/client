import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './store/store';
import 'materialize-css/dist/css/materialize.min.css'


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Provider store = {store}><App /></Provider>);

console.log("Stripe key", process.env.REACT_APP_STRIPE_KEY)
console.log("Stripe key", process.env.NODE_ENV)