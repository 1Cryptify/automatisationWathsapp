import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, CircularProgress } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

export  function Princ() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simulez un chargement asynchrone (par exemple, une requête à une API)
  const simulateAsyncLoad = async () => {
    // Utilisez setTimeout pour simuler un chargement pendant 3 secondes (ajustez selon vos besoins)
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Mettez à jour l'état pour indiquer que le chargement est terminé
    setLoading(false);
  };

  simulateAsyncLoad();
}, []); // Le tableau de dépendances est vide, donc cela s'exécute une seule fois au montage


  return (
    <>
    {loading?<Box sx={{display:'grid',height:'100vh',placeItems:'center'}}><CircularProgress/></Box>:<App/>}
    </>
  )
}


root.render(
  <React.StrictMode>
    <Princ/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
