import { Box } from '@mui/material'
import React from 'react'
import Background from './Background'
import Navbar from '../../components/Navbar'
import CartBody from './CartBody'

const Cart = () => {
  return (
      <Background>

        <Navbar/>
        <Box>
          <CartBody/>
        </Box>
      </Background>
       
     
    )
}

export default Cart