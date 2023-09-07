import { Box, Slider, Typography } from '@mui/material'
import React from 'react'
import Space from '../../../components/Space'
import styled from '@emotion/styled'

const CustomSlider = styled(Slider)`
    width: 236px;
    height: 6px;
    /* color: '#2874f0'; */
    .MuiSlider-thumb{
        width: 13px;
        height: 13px;
        color: white;
        border: 1px solid #bababa;
    }

    .MuiSlider-rail{
        background: grey;
        /* background: transparent; */
        height: 2px;
    }
    
    .MuiSlider-track{
        color: '#2874f0';
        
        
    }
`

const Filters = () => {
  return (
    

    <Box style ={{width:'270px',backgroundColor:'white'}}>
        <Typography>Filters</Typography>
        <Box>
            <Typography>Categories</Typography>
            <Typography>Electronics</Typography>
            <Typography>Groceries</Typography>
            <Typography>Clothes</Typography>
        </Box>
        <Typography>Price</Typography>
        <Box style ={{height:25, backgroundColor:'#E0E0E0',width:236, marginBottom:'-16px'}}></Box>
        <CustomSlider defaultValue={0} value={[20,80]} aria-label="Default"  />
    </Box>
    
  )
}

export default Filters