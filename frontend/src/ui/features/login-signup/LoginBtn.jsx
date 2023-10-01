import { Button, Typography, styled, Menu, MenuItem } from "@mui/material";
import { Fragment, createContext, useContext, useState } from "react";
import LoginDialog from "./LoginDialog";
import { UsernameProvide } from "../../../usecontext/UsernameProvider";
import { useDispatch, useSelector } from "react-redux";
import { OPEN } from "../../../redux/constants/handleLoginDialog";
import { LOGIN_FAILURE } from "../../../redux/constants/userLogin";
import { Link } from "react-router-dom";
import { LOGIN_FAILURE_TOASTIFY, LOGOUT_SUCCESS_TOASTIFY } from "../../../redux/constants/authToast";

const Btn = styled(Button)(({theme})=>({

  color: '#2874f0',
  fontWeight: '500',
  textTransform: 'capitalize',
  backgroundColor: 'white',
  width: '121px',
  height: '31px',
  fontSize: '16px',
  borderRadius: '2px',
  marginRight: '0px',
  
  '&:hover': {
    color: 'white',
    backgroundColor: '#488bf7'
  },[theme.breakpoints.down('lg')]:{
    width:'90px'
  }
}));

const UserProfile = styled(Typography)`
  cursor: pointer;
`;
export const DataContext = createContext();

const LoginBtn = () => {
  const loginCredentials = useSelector(state=>state.loginCredentials);
  console.log(loginCredentials,'lala')
  const dispatch = useDispatch()
  const dialogStatus = useSelector(state=>state.handleLoginDialog)
  // const { username, setUsername } = useContext(UsernameProvide);

  const [open, setOpen] = useState(false);

  const openLoginDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // const username = useContext(UsernameProvide)
  // console.log(username,'liera aaye')
  // const username = useContext(UsernameProvider)
  return (
    <>
      {!loginCredentials.email ? (
        <Btn variant="text" onClick={()=>dispatch({type:OPEN})}>
          Login
        </Btn>
      ) : (
        <div>
          <UserProfile
            style={{ color: "white",marginLeft:'40px',marginRight:10 ,lineHeight:1.1}}
            onClick={(e) => handleOpenMenu(e)}
          >
            {loginCredentials.username}
          </UserProfile>
          <Menu
            anchorEl={anchorEl} // This is the anchor element for positioning the menu
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {
               true && <Link to = {`/profile/${loginCredentials.role}/${loginCredentials.role === 'buyer'?'order':''}`} style={{textDecoration:'none',color:'inherit'}}>
              
              <MenuItem>
                Profile
              </MenuItem>
              </Link>

            }
            <MenuItem
              onClick={() => {
                dispatch({type:LOGIN_FAILURE})
                dispatch({type:LOGOUT_SUCCESS_TOASTIFY})
                localStorage.removeItem('token');
                handleCloseMenu();
                
              }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </div>
      )}
      <DataContext.Provider value={{ open, handleClose }}>
        <LoginDialog />
      </DataContext.Provider>
    </>  
  );
};

export default LoginBtn;
