import { Box } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductsView from '../pages/ProductListing/components/ProductsView'

const ViewList = () => {

  return (
    <Box>
         <Box
      style={{
        margin: "56px 0 0 0",
        width: "100%",
        height: "100%",
        // backgroundColor: "green",
        flexGrow: 1,
      }}
    >
      <Navbar />
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        
        <Box style={{ flexGrow: 1, height: "100%" }}>
          
            <ProductsView type = {'category'}/>
          
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default ViewList