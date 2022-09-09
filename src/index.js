import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import App from './App';
import './index.css';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMOj3XBXVTYQCmZdrwABhLMKNeqEX_FM",
  authDomain: "guitaruy-ecommerce.firebaseapp.com",
  projectId: "guitaruy-ecommerce",
  storageBucket: "guitaruy-ecommerce.appspot.com",
  messagingSenderId: "889388746420",
  appId: "1:889388746420:web:4343f143a98ca45ddb39e1",
  measurementId: "G-YTXWF5N7T8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

