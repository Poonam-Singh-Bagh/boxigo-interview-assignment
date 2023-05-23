import React, { useState, useEffect } from 'react'
import axios from "axios";
import {Container, Grid, Box, Typography} from '@mui/material';
import Moves from '../Moves';
import Navigation from '../Navigation';

function Main() {
const [data, setData] = useState()
  useEffect(() => {
    axios.get('http://test.api.boxigo.in/sample-data/').then(res => {
        setData(res.data.Customer_Estimate_Flow)
    }).catch(err => {
        console.log('err', err)
    })
  },[])  

  return (
    <Container maxWidth="lg" sx={{margin:'50px'}}>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Navigation />
            </Grid>
            <Grid item xs={10}>
                <Typography sx={{mb:'15px', fontWeight: 600}}>My Moves</Typography>
                {
                    data?.map((item) => (
                        <Box sx={{marginBottom: '30px'}}>
                        <Moves
                            moving_from={item.moving_from}
                            moving_to={item.moving_to}
                            estimate_id={item.estimate_id}
                            property_size={item.property_size}
                            total_items={item.total_items}
                            distance={item.distance}
                            moving_on={item.moving_on}
                            old_floor_no={item.old_floor_no}
                            old_elevator_availability={item.old_elevator_availability}
                            old_parking_distance={item.old_parking_distance}
                            new_floor_no={item.new_floor_no}
                            new_elevator_availability={item.new_elevator_availability}
                            new_parking_distance={item.new_parking_distance}
                            inventory={item.items.inventory}
                        />
                        </Box>
                    ))
                }
            </Grid>
        </Grid>
    </Container>
  )
}

export default Main