import { Delete, Edit, ModeEdit, Search, SearchRounded, Send, SendAndArchive } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Divider, Grid, IconButton, InputBase, Paper, TextField, TextareaAutosize, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
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

    const [alignment, setAlignment] = React.useState('left');

    const handleChange2 = (event, newAlignment) => {
      if (newAlignment!=null){setAlignment(newAlignment);}
  };
    const control = {
      value: alignment,
      onChange: handleChange2,
      exclusive: true,
    };

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
        <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} placeItems={'center'}>
        <TextField sx={{marginBottom:5,marginTop:5,width:'80%'}} label="Entrer un contact" value={phoneNumber} error={error} helperText={"entrer un numero valide au format +xxxxxxxx..."} onChange={handleChange} variant="outlined" />
        <Button sx={{width:'80%',top:0,padding:2}} variant='contained' onClick={handleNum}>Ajouter a la liste de contacts</Button>
        <Box sx={{borderWidth:1,borderColor:'#2196f3',height:'500px',borderStyle:'solid',
    borderBottomRightRadius:'100px',width:'80%',display:'flex', flexDirection:'column',paddingTop:2,backdropFilter:`blur(15px)`,background:`rgba(255, 255, 255, 0.2)`}}>
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
        <Box sx={{padding:5,height:'300px',overflow:'scroll'}}>{listDiffusion.map(numero=><Box key={numero.id} sx={{border:'solid',borderWidth:'1px',margin:3,padding:'10px',borderRadius:'10px',borderColor:'#2196f3',display:'flex',flexDirection:'row',justifyContent:'space-between' ,alignItems:'center'}}>{numero.num}<Box><IconButton><ModeEdit sx={{color:'#2196f3'}}/></IconButton><IconButton><Delete sx={{color:'#ff6666'}}/></IconButton></Box> </Box>)}</Box>
        <Button color={"primary"} variant='contained' sx={{width:'50%'}}>Modifier <Edit/></Button>
        </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box sx={{paddingTop:5}}>
                <Paper elevation={2} sx={{height:'60px',display:'grid',placeItems:'center'}}>
                    <ToggleButtonGroup exclusive color="primary" {...control}><ToggleButton value={'left'} sx={{width:'150px'}} variant='contained'>Message</ToggleButton><ToggleButton value="right" sx={{width:'150px'}}>Statut</ToggleButton></ToggleButtonGroup>
                </Paper>
                <Paper sx={{width:'100%',backdropFilter:`blur(15px)`,background:`rgba(255, 255, 255, 0.2)` ,height:'350px',alignSelf:'center'}}>
                  <Box sx={{width:'100%'}}>
                    <Typography sx={{padding:2,color:'#2196f3'}} textAlign={"center"}>Programmez votre publication</Typography>
                    <Divider/>
                      <TextField sx={{margin:1}}  type='date' helperText="date de publication" required/>
                      <TextField sx={{margin:1}} type='time' helperText="heure de publication" required/>
                      <TextField sx={{margin:1}} helperText="publier dans un pays particulier"/>
                      <TextField sx={{margin:1}}  helperText="publier dans une ville particuliere"/>
                      <TextField sx={{margin:1}}  type='file' helperText="Importer une liste de Contacts"/>
                      
                    </Box>
                </Paper>
            </Box>
            <Box sx={{padding:5,alignItems:'flex-end',justifyContent:'center',display:'flex'}}>
            <Paper elevation={2} sx={{width:'100%',marginTop:5,marginBottom:5,display:'grid',placeItems:'center',padding:'5px',backdropFilter:`blur(15px)`,background:`rgba(255, 255, 255, 0.2)`}}><TextField  sx={{width:'90%'}} multiline={true} maxRows={4} placeholder='message...' variant='outlined' helperText="Faire une publication"  InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <Send/>
            </IconButton>
          ),
        }}/>
        </Paper>
            </Box>
        </Grid>
        </Grid>
    </Box>
  )
}
