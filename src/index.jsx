import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './Component/NavBar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <NavBar />
        <App />
    </>
);