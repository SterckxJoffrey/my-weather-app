import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/* //Créer le composant App
function App() {
  return (
    <>
    <div className="container">
      <h1 className='text-center'>Mon App méteo avec React</h1>      
    </div>
    </>
  )
} */
// On importe le composant App depuis App.js
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


