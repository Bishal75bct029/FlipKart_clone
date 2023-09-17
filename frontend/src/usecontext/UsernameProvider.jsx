import React, { createContext, useContext, useState } from 'react'
import LoginBtn from '../ui/features/login-signup/LoginBtn'

export const UsernameProvide = createContext()

const UsernameProvider = ({children}) => {
    const [username,setUsername] = useState('empty');
  return (
    <UsernameProvide.Provider value = {{username,setUsername}}> 
        {children}
    </UsernameProvide.Provider>
  )
}

export default UsernameProvider