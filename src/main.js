import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importará App.jsx
import './style.css'; // Estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);