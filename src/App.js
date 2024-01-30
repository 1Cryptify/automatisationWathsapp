import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import Home from './Home'
function App() {
  return (
    <Box sx={{display:'flex',flexDirection:'row',flex:1,height:'100vh',justifyContent:'center'}}>
      <Box sx={{background:'#ececec',width:'60%',height:'100%', padding:'60px'}}>
        <Home/>
      </Box>
    </Box>
  )
}

export default App

