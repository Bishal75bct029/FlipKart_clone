import { Button, Typography, styled, Menu, MenuItem } from "@mui/material";
import { Fragment, createContext, useContext, useState } from "react";
import LoginDialog from "./LoginDialog";
import { UsernameProvide } from "../../../usecontext/UsernameProvider";
import { useDispatch, useSelector } from "react-redux";
import { OPEN } from "../../../redux/constants/handleLoginDialog";

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

  &:hover {
    color: white;
    background-color: #488bf7;
  }
`;
const UserProfile = styled(Typography)`
  cursor: pointer;
`;
export const DataContext = createContext();

const LoginBtn = () => {
  const loginCredentials = useSelector(state=>state.loginCredentials);
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
    <Fragment>
      {!loginCredentials.email ? (
        <Btn variant="text" onClick={()=>dispatch({type:OPEN})}>
          Login
        </Btn>
      ) : (
        <div>
          <UserProfile
            style={{ color: "white" }}
            onClick={(e) => handleOpenMenu(e)}
          >
            {loginCredentials.username}
          </UserProfile>
          <Menu
            anchorEl={anchorEl} // This is the anchor element for positioning the menu
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem
              onClick={() => {
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
    </Fragment>
  );
};

export default LoginBtn;
