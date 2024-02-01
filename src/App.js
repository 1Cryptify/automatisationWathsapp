import React from 'react'
import {  Box } from '@mui/material'
import Home from './Home'
import { styled } from '@mui/material/styles';

const MyApp = styled('div')(({ theme }) => ({
  height:'100%',
    [theme.breakpoints.down('md')]: {
      fontSize:'0.7em',
    }
    ,
    [theme.breakpoints.up('md')]: {
      paddingLeft:'10px',
      paddingRight:'10px',
    },
    [theme.breakpoints.up('lg')]: {
      padding:'15%',
      paddingTop:'30px',
      paddingBottom:'30px'
    },
  }));



function App() {
  return (
    <Box sx={{
      minHeight: '100vh', // Assurez-vous que le conteneur occupe au moins toute la hauteur de la vue
      color: 'black', // Ajoutez une couleur de texte appropriée pour améliorer la lisibilité
    }}>
      <MyApp><Home/></MyApp>
        
    </Box>
  )
}

export default App

