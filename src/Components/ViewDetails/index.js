import React from 'react'
import {Box, Typography, Button} from '@mui/material';
import Inventory from '../Inventory';

function ViewDetails({old_floor_no, old_elevator_availability, old_parking_distance, new_floor_no, new_elevator_availability,new_parking_distance, inventory}) {
    const new_par_dis = new_parking_distance?.split(' ')[0] * 0.30
    const old_par_dis = old_parking_distance?.split(' ')[0] * 0.30
  return (
    <Box>
        <Box sx={{mt: '20px', display: "flex", justifyContent: "space-between"}}>
            <Typography sx={{fontWeight: 600, fontSize: '14px'}}>Additional Information</Typography>
            <Button variant="contained" sx={{bgcolor: 'black', fontSize: '12px', height: "33px",}}>Edit Additional Info</Button>
        </Box>
        <Typography sx={{fontSize: '13px', color: "#616161"}}>Test Data</Typography>
        <Box sx={{mt: '20px', display: "flex", justifyContent: "space-between"}}>
            <Typography sx={{fontWeight: 600, fontSize: '14px'}}>House Details</Typography>
            <Button variant="contained" sx={{bgcolor: 'black', fontSize: '12px', height: "33px",}}>Edit House Details</Button>
        </Box>
        <Typography color="primary" sx={{mt: '20px',fontSize: '14px', fontWeight: 600,}}>Existing House Details</Typography>
        <Box sx={{mt: '5px', display: "flex", justifyContent: "space-between", mr: '200px'}}>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: '13px'}}>Floor No.</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '13px',color: "#616161"}} color="secondary" >{old_floor_no}</Typography>
            </Box>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: '13px'}}>Elevator Available</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '13px',color: "#616161"}}>{old_elevator_availability}</Typography>
            </Box>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: '13px'}}>Distance from Elevator/Staircase to truck</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '13px',color: "#616161"}}>{old_par_dis} meter</Typography>        
            </Box>        
        </Box>
        <Typography color="primary" sx={{mt: '20px',fontSize: '14px', fontWeight: 600,}}>New House Details</Typography>
        <Box sx={{mt: '5px', display: "flex", justifyContent: "space-between", mr: '200px'}}>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: '13px'}}>Floor No.</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '13px',color: "#616161"}}>{new_floor_no}</Typography>
            </Box>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: '13px'}}>Elevator Available</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '13px',color: "#616161"}}>{new_elevator_availability}</Typography>
            </Box>
            <Box>
            <Typography sx={{fontWeight: 600, fontSize: '13px'}}>Distance from Elevator/Staircase to truck</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '13px',color: "#616161"}}>{new_par_dis} meter</Typography>        
            </Box>        
        </Box>
        <Box sx={{mt: '20px', mb:'20px', display: "flex", justifyContent: "space-between"}}>
            <Typography sx={{fontWeight: 600, fontSize: '14px'}}>Inventory Details</Typography>
            <Button variant="contained" sx={{bgcolor: 'black', fontSize: '12px', height: "33px",}}>Edit Inventory</Button>
        </Box>
        {
            inventory?.map(item => {
                return (
                <Inventory
                    name={item.displayName} 
                    order={item.order}
                    category={item.category}
                />
            )})
        }
    </Box>
  )
}

export default ViewDetails