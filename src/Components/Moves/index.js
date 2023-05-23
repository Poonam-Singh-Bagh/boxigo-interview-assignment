import React, { useState } from 'react'
import {Grid, Box, Typography, Button,Collapse} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HomeIcon from '@mui/icons-material/Home';
import RouteIcon from '@mui/icons-material/Route';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WidgetsIcon from '@mui/icons-material/Widgets';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WarningIcon from '@mui/icons-material/Warning';
import ViewDetails from '../ViewDetails';

function Moves({moving_from, moving_to, estimate_id, property_size, total_items, distance, moving_on, old_floor_no, old_elevator_availability, old_parking_distance, new_floor_no, new_elevator_availability,new_parking_distance, inventory }) {
    const [open, setOpen] = useState(false);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = `${new Date(moving_on).toLocaleDateString([],options)
} at ${
  new Date(moving_on).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}`

const ViewMoveDetails = () => {
    setOpen(!open);
}
  return (
    <>
      <Grid container spacing={2} sx={{mb: '20px'}}>
        <Grid item xs={3}>
          <Box>
            <Typography variant="text" sx={{fontSize: '14px',fontWeight: 600}}>From</Typography>
            <Typography sx={{fontSize: '14px', color: "#616161"}}>{moving_from}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{display: "flex", justifyContent: "center"}}> 
            <ArrowCircleRightIcon color="primary"/>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Typography sx={{fontSize: '14px',fontWeight: 600}}>To</Typography>
            <Typography sx={{fontSize: '14px', color: "#616161"}}>{moving_to}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box >
            <Typography sx={{fontSize: '14px',fontWeight: 600, display: "flex", justifyContent: "center"}}>Request</Typography>
            <Typography color="primary" sx={{fontSize: '14px',fontWeight: 600, display: "flex", justifyContent: "center"}}>{estimate_id}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{display: 'flex', mb: '8px'}}>
        <Box sx={{display: 'flex', marginRight: '35px'}}>
          <Typography><HomeIcon color="primary"/></Typography>
          <Typography sx={{fontSize: '14px', mt:'3px'}}>{property_size}</Typography>
        </Box>
        <Box sx={{display: 'flex', marginRight: '35px'}}>
          <Typography><WidgetsIcon color="primary"/></Typography>
          <Typography sx={{fontSize: '15px', mt:'2px'}}> {total_items}</Typography>
        </Box>
        <Box sx={{display: 'flex', marginRight: '35px'}}>
          <Typography><RouteIcon color="primary"/></Typography>
          <Typography sx={{fontSize: '15px', mt:'2px'}}>{distance}</Typography>
        </Box>
        <Box sx={{display: 'flex', marginRight: '10px'}}>
          <Typography><CalendarMonthIcon color="primary"/></Typography>
          <Typography sx={{fontSize: '15px', mt:'2px'}}>{date}</Typography>
        </Box>
        <EditOutlinedIcon sx={{marginRight: '25px'}}/>
        <Box sx={{display: 'flex',marginRight: '50px'}}>
          <Typography><CheckBoxIcon color="primary" sx={{fontSize: '15px'}}/></Typography>
          <Typography sx={{fontSize: '13px'}}>Is flexible</Typography>
        </Box>
        <Button variant="outlined" sx={{fontSize: '12px',marginRight: '5px', height: "33px",}} onClick={ViewMoveDetails} color="primary" >View move details</Button>
        <Button variant="contained" sx={{fontSize: '12px', marginRight: '5px', height: "33px"}} color="primary">Quotes Awaiting</Button>
      </Box>
      <Box sx={{display: 'flex', marginRight: '10px'}}>
        <WarningIcon color="primary" sx={{marginRight: '7px', fontSize: '17px'}}/>
        <Typography sx={{fontSize: '13px',fontWeight: 600, marginRight: '5px'}}>Disclaimer:</Typography>
        <Typography sx={{fontSize: '13px',marginTop:'1px'}}>Please update your move date before two days of shifting</Typography>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ViewDetails
            old_floor_no={old_floor_no} 
            old_elevator_availability={old_elevator_availability}
            old_parking_distance={old_parking_distance}
            new_floor_no={new_floor_no}
            new_elevator_availability={new_elevator_availability}
            new_parking_distance={new_parking_distance}
            inventory={inventory}
        />
      </Collapse>
    </>
  )
}

export default Moves 