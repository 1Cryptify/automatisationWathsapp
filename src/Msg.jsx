import { Box, Button, Grid, InputBase, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

export default function Msg() {
  return (
    <Box sx={{height:'100px',widows:'100%'}}>
        <Grid container>
        <Grid item xs={6}>
        <TextField sx={{marginBottom:5,marginTop:5,width:'100%'}} label="Entrer un contact" variant="outlined" />
        <Button sx={{width:'100%',top:0,padding:2}} variant='contained'>Ajouter a la liste</Button>
        <Box sx={{borderWidth:1,borderColor:'#2196f3',height:'500px',borderStyle:'solid',
    borderBottomRightRadius:'100px'}}>
        </Box>
        </Grid>
        <Grid item xs={6}></Grid>
        </Grid>
    </Box>
  )
}
