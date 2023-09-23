import { Box, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import Users from './Users'
import Space from '../../components/Space'
import { Theme } from '../../theme/customeTheme'
import Dashboard from './Dashboard'
import Order from './Order'
import Products from './Products'
import { Route, Routes, useLocation } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LOGIN_SUCCESS } from '../../../redux/constants/userLogin'

const Admin = () => {
    const [selected,setSelected] = useState('Dashboard');
    const dispatch = useDispatch();
    useEffect(()=>{
      const validateLogin =async()=>{
  
        if(localStorage.getItem('token')===null){
        dispatch({type:LOGIN_FAILURE})

          return
        }
        try{
          const token = localStorage.getItem('token');
          const headers = {
            'Authorization':`${token}`
          }
          const checkLogin = await axios.post('http://localhost:8000/',null,{headers:headers})
          console.log("love you",headers )
          console.log(checkLogin.data)
          dispatch({type:LOGIN_SUCCESS  ,payload:checkLogin.data.token})
          
        }catch(error){
          console.log('error',error);
          return
        }
      }
      validateLogin();
    },[])
  
  return (
    <ThemeProvider theme={Theme}>

    <div className="plus-jakarta-sans" style={{borderRight:'2px solid #ccc',minHeight:'100vh',width:'100%',backgroundColor:'',height:'100%',display:'flex',fontFamily:'Plus Jakarta Sans, sans-serif',}}>
        <SideNav selected = {selected} setSelected ={setSelected}/>
       
          <Routes>
            
              <Route index path ="/" element = {<Dashboard setSelected={setSelected}/>}/>
              <Route index path ="/dashboard" element = {<Dashboard setSelected={setSelected}/>}/>
              <Route  path ="/orders" element = {<Order setSelected={setSelected}/>}/>
              <Route path ="/products" element = {<Products setSelected={setSelected}/>}/>
              <Route path ="/users" element = {<Users setSelected={setSelected}/>}/>
            
          </Routes>
        
    </div>
    </ThemeProvider>
  )
}

export default Admin