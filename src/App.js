import React from 'react'
import {  Box } from '@mui/material'
import Home from './Home'
function App() {
  return (
    <Box sx={{
      minHeight: '100vh', // Assurez-vous que le conteneur occupe au moins toute la hauteur de la vue
      color: 'black', // Ajoutez une couleur de texte appropriée pour améliorer la lisibilité
    }}>
      <Box sx={{height:'100%',xs:{background:'red'},md:{background:'blue'}}}>
        <Home/>
      </Box>
    </Box>
  )
}

export default App

