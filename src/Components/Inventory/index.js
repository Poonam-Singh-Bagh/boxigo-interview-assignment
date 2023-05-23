import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid,Box, Typography, Button, Accordion,AccordionSummary,AccordionDetails, Badge} from '@mui/material';

function Inventory({name,order, category}) {
  return (
    
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{bgcolor: '#d1cfcf'}}
            >
                <Typography sx={{mr: '15px'}}>{name}</Typography>
                <Box>
                <Badge badgeContent={order} color="primary" />
                </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container spacing={2}>
                {
                    category?.map(item => (
                        <Grid item xs={3}>
                            <Box>
                                <Typography sx={{fontWeight: 600, fontSize: '14px'}}>{item.displayName}</Typography>
                                {
                                    item.items.map(item => {
                                        let type = ''
                                        item.type.forEach(item => {
                                            type += item.option + ', '
                                        })
                                        return(
                                        <Box sx={{mt: '5px', display: "flex", justifyContent: "space-between"}}>
                                            <Box>
                                                <Typography sx={{fontSize: '13.5px',color: "#616161"}}>{item.displayName}</Typography>
                                                <Typography sx={{fontWeight: 600, fontSize: '12px'}}>{type}</Typography>
                                            </Box>
                                            <Typography sx={{fontWeight: 600, fontSize: '13px', display: "flex", justifyContent: "flex-end"}}>{item.order}</Typography>   
                                        </Box>
                                    )})
                                }
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            </AccordionDetails>
        </Accordion>
  )
}

export default Inventory