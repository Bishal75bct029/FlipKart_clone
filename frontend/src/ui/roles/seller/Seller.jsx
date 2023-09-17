import React from 'react'
import SideNav from '../components/SideNav'
import SellerBody from './SellerBody'
import { ThemeProvider } from '@emotion/react'
import {Theme} from '../../theme/customeTheme'
import Order from './Order'
import Products from './Products'

const Seller = () => {
  return (
    <ThemeProvider theme={Theme}>

    <div className="plus-jakarta-sans" style={{width:'100%',backgroundColor:'#f1f5f9',height:'100%',display:'flex',fontFamily:'Plus Jakarta Sans, sans-serif'}}>
        <SideNav/>
        {/* <SellerBody/> */}
        {/* <Order/> */}
        <Products/>
    </div>
    </ThemeProvider>
  )
}

export default Seller