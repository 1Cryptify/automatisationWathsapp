import { Delete, ModeEdit, Search, SearchRounded, Send, SendAndArchive } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Grid, IconButton, InputBase, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'






export default function Msg() {
    const [listDiffusion,setListDiffusion]=useState([
        {
            id: 1,
            num: '+237670436423',
        },
        {
            id: 2,
            num: '+237690036423',
        },
        {
            id: 3,
            num: '+237680436423',
        },
        {
            id: 4,
            num: '+237654436423',
        },
        {
            id: 5,
            num: '+237670436423',
        },
        {
            id: 5,
            num: '+237678436423',
        },
    ])

    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);
    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
      };
    const handleNum=() =>{
        const isValidPhoneNumber = /^\+\d{1,}$/g.test(phoneNumber);
        if (isValidPhoneNumber){
            const listDiffusion1=[{id:listDiffusion.length+1,num:String(phoneNumber)},...listDiffusion]
            setListDiffusion(listDiffusion1)
            setError(false)
        }else{
            setError(true)
        }
    }
  return (
    <Box sx={{height:'100%'}}>
        <Grid container>
        <Grid item xs={6} display={'flex'} flexDirection={'column'} placeItems={'center'}>
        <TextField sx={{marginBottom:5,marginTop:5,width:'80%'}} label="Entrer un contact" value={phoneNumber} error={error} helperText={"entrer un numero valide au format +xxxxxxxx..."} onChange={handleChange} variant="outlined" />
        <Button sx={{width:'80%',top:0,padding:2}} variant='contained' onClick={handleNum}>Ajouter a la liste de contacts</Button>
        <Box sx={{borderWidth:1,borderColor:'#2196f3',height:'500px',borderStyle:'solid',
    borderBottomRightRadius:'100px',width:'80%',display:'flex', flexDirection:'column',paddingTop:2}}>
      <TextField sx={{width:"80%",alignSelf:'center'}}
        label="Recherche"
        variant="standard"
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <SearchRounded/>
            </IconButton>
          ),
        }}
      />    
        <Box sx={{padding:5,height:'300px',overflow:'scroll'}}>{listDiffusion.map(numero=><Box key={numero.id} sx={{border:'solid',borderWidth:'1px',margin:3,padding:'20px',borderRadius:'10px',borderColor:'#2196f3',display:'flex',flexDirection:'row',justifyContent:'space-between' ,alignItems:'center'}}>{numero.num}<Box><IconButton><ModeEdit sx={{color:'#2196f3'}}/></IconButton><IconButton><Delete sx={{color:'#ff6666'}}/></IconButton></Box> </Box>)}</Box>
        </Box>
        </Grid>
        <Grid item xs={6}>
            <Box sx={{height:'50px',paddingTop:5}}>
                <Paper elevation={2} sx={{height:'60px',display:'grid',placeItems:'center'}}>
                    <ButtonGroup><Button sx={{width:'200px'}} variant='contained'>Message</Button><Button sx={{width:'200px'}}>Statut</Button></ButtonGroup>
                </Paper>
            </Box>
            <Box sx={{padding:5,height:'620px',alignItems:'flex-end',justifyContent:'center',display:'flex'}}>
            <TextField placeholder='message...' variant='outlined' sx={{width:'100%',marginTop:5,marginBottom:5}} InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <Send/>
            </IconButton>
          ),
        }}/>
            </Box>
        </Grid>
        </Grid>
    </Box>
  )
}
