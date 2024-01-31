import React from 'react'
import {  Box } from '@mui/material'
import Home from './Home'
function App() {
  return (
    <Box sx={{
      backgroundImage: `url('background.jpg')`, // Assurez-vous de spécifier le chemin correct vers votre image
      backgroundSize: 'cover', // Ajustez la taille de l'image selon vos besoins
      backgroundPosition: 'center', // Centrez l'image
      backgroundRepeat: 'no-repeat', // Ne répétez pas l'image

      minHeight: '100vh', // Assurez-vous que le conteneur occupe au moins toute la hauteur de la vue
      color: 'black', // Ajoutez une couleur de texte appropriée pour améliorer la lisibilité
    
      
      
      
      display:'flex',flexDirection:'row',flex:1,overflow:'hidden',justifyContent:'center'
    
    
    
    }}>
      <Box sx={{width:'60%',height:'100%', padding:'60px'}}>
        <Home/>
      </Box>
    </Box>
  )
}

export default App

