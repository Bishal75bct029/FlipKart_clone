import { Button, styled } from "@mui/material"
import { Fragment, createContext, useContext, useState } from "react"
import LoginDialog from "./LoginDialog"

const Btn = styled(Button)`
    color: #2874f0;
    font-weight: 500;
    text-transform: capitalize;
    background-color: white;
    width: 121px;
    height: 31px;
    font-size: 16px;
    border-radius: 2px;
    margin-left: 0px;

    &:hover{
        color: white;
        background-color: #488bf7;
    }

`
export const DataContext = createContext()

const LoginBtn = () => {

    const [open,setOpen] = useState(false)

    const openLoginDialog = ()=>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false)
    }
  return (
    <Fragment>
        <Btn variant = 'text' onClick={openLoginDialog}>Login</Btn>
        <DataContext.Provider value={{open,handleClose}}>
            <LoginDialog/>
        </DataContext.Provider>
    </Fragment>

  )
}

export default LoginBtn