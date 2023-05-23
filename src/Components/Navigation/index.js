import React from 'react'
import {List, ListItem, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';

function Navigation() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem>
      <LocalShippingIcon sx={{mr: '5px'}}/>
      <Typography  sx={{fontSize: '13px'}}>MY MOVES</Typography>
    </ListItem>
    <ListItem>
      <PersonIcon />
      <Typography  sx={{fontSize: '13px'}}>MY PROFILE</Typography>
    </ListItem>
    <ListItem>
      <CalculateTwoToneIcon />
      <Typography  sx={{fontSize: '13px'}}>GET QUOTE</Typography>
    </ListItem>
    <ListItem>
      <CopyrightTwoToneIcon />
      <Typography  sx={{fontSize: '13px'}}>LOGOUT</Typography>
    </ListItem>
  </List>
  )
}

export default Navigation