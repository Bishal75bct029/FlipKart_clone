import {
  AppBar,
  Box,
  Button,
  Drawer,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginBtn from "../features/login-signup/LoginBtn";
import UsernameProvider from "../../usecontext/UsernameProvider";
import SearchBoxs from "../features/search/SearchBoxs";
import { useTheme } from "@emotion/react";
import Seller from "../features/login-signup/Seller";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OPEN } from "../../redux/constants/handleLoginDialog";
import { useEffect, useState } from "react";
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../redux/constants/userLogin";

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 56px;
`;

const LogoText = styled(Typography)`
  margin: -2px 0px 0px;
  font-size: 11px;
  font-style: italic;
  line-height: 0;
`;
const PlusLogo = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 1,
});

const CartWrapper = styled(Box)`
  display: flex;
  margin-top: -2px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const MainBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  /* width: 50%; */
  justifyContent: "space-between",
  marginLeft: "10%",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "2%",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "2%",
    // width:'30%',
  },
}));

const CustomDrawer = styled(Box)(({ theme }) => ({
    display: 'flex', // Show the drawer by default
    alignItems:'center',
    position:'relative',
    
    [theme.breakpoints.up('md')]: {
      display: 'none', // Hide the drawer for screens larger than "md"
      
    },
  }));
const NewDrawer = styled(Drawer)(({ theme }) => ({
    display: 'block', // Show the drawer by default
    [theme.breakpoints.up('md')]: {
      display: 'none', // Hide the drawer for screens larger than "md"
    },
  }));

  const LeftLinks = styled(Box)(({ theme }) => ({
     // Show the drawer by default
     display:'flex',
     justifyContent:'space-around',
     flexGrow:1,
    [theme.breakpoints.down('md')]: {
      display: 'none', // Hide the drawer for screens larger than "md"
    },
  }));

const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  /* justify-content: space-between; */
  width: "40%",
//   minWidth: 300,
  marginRight: "10%",
  [theme.breakpoints.down("lg")]: {
    marginRight: 0,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const navload = useSelector(state=>state.navload);
  
  useEffect(()=>{
    const validateLogin =async()=>{

      if(localStorage.getItem('token')===null){
        dispatch({type:LOGIN_FAILURE})
        setIsLogin("nokey")
        
        return
      }
      try{
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization':`${token}`
        }
        const checkLogin = await axios.post('http://localhost:8000/',null,{headers:headers})
        console.log("love you")
        console.log(checkLogin.data);
        setIsLogin("loggedIn")
        dispatch({type:LOGIN_SUCCESS,payload:checkLogin.data.token})
        // dispatch({type:LOGIN_SUCCESS_TOASTIFY});
        
        
      }catch(error){
        setIsLogin("notLoggedin")
        console.log('error',error); 
        return
      }
    }
    validateLogin();
  },[])

  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div theme={theme}>
      {
        isLogin ?
        <StyledHeader>
        <Toolbar style={{ minHeight: "56px" }}>
          <MainBox>
            <LeftBox>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Box style={{ cursor: "pointer" }}>
                  <img
                    src="http://localhost:5173/static/images/flipkartlogo.png"
                    style={{ height: 20 }}
                    alt="logo"
                    />
                  <LogoText>
                    Explore
                    <Box component="span" style={{ color: "#FFE500" }}>
                      {" "}
                      Plus
                    </Box>
                    <PlusLogo
                      src="http://localhost:5173/static/images/plus.png"
                      alt="plus"
                      />
                  </LogoText>
                </Box>
              </Link>
              <SearchBoxs />
            </LeftBox>
            <RightBox
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "45%",
              }}
              >
              <Typography>
                <LoginBtn />
              </Typography>
              <LeftLinks>
              {!loginCredentials.email && (
                
                <Box
                  variant="span"
                  style={{
                      width: "116px",
                      fontWeight: "500",
                      margin: "0 0px 0 0px",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch({ type: OPEN })}
                    >
                  Become a Seller
                </Box>
              )}
              {/* <Seller/> */}

              <Box variant="span" style={{ marginRight: "" }}>
                More
              </Box>

              {loginCredentials.role == "buyer" ? (
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "inherit" }}
                  >
                  <CartWrapper>
                    <ShoppingCartIcon />
                    <Box
                      variant="span"
                      style={{ fontWeight: "500", marginLeft: "2px" }}
                      >
                      Cart
                    </Box>
                  </CartWrapper>
                </Link>
              ) : (
                loginCredentials.role === "" && (
                  <CartWrapper>
                    <ShoppingCartIcon />
                    <Box
                      variant="span"
                      style={{ fontWeight: "500", marginLeft: "2px" }}
                      onClick={() => dispatch({ type: OPEN })}
                      >
                      Cart
                    </Box>
                  </CartWrapper>
                )
                )}
                </LeftLinks>
                <CustomDrawer>

                <MenuIcon style={{fontSize:34,margin:'0 10px 0 0',cursor:'pointer'}} onClick = {toggleDrawer}/>
                </CustomDrawer>
              <NewDrawer anchor="right" open={drawer} onClose={toggleDrawer}>
                <Box style ={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',width:200,backgroundColor:'#2874f0',height:'100vh',color:'white',padding:'10px'}}>
                  {!loginCredentials.email && (
                      <Box
                      variant="span"
                      style={{
                          width: "116px",
                          fontWeight: "500",
                          margin: "0 0px 0 0px",
                          cursor: "pointer",
                          marginBottom:'10px'
                        }}
                        onClick={() => dispatch({ type: OPEN })}
                        >
                      Become a Seller
                    </Box>
                  )}
                  {/* <Seller/> */}

                  <Box variant="span" style={{ marginBottom: "10px" }}>
                    More
                  </Box>

                  {loginCredentials.role == "buyer" ? (
                    <Link
                    to="/cart"
                    style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <CartWrapper>
                        <ShoppingCartIcon />
                        <Box
                          variant="span"
                          style={{ fontWeight: "500", marginLeft: "2px" }}
                          >
                            <Typography style={{fontSize:'16px'}}>

                          Cart
                            </Typography>
                        </Box>
                      </CartWrapper>
                    </Link>
                  ) : (
                      loginCredentials.role === "" && (
                        <CartWrapper>
                        <ShoppingCartIcon />
                        <Box
                          variant="span"
                          style={{ fontWeight: "500", marginLeft: "2px" }}
                          onClick={() => dispatch({ type: OPEN })}
                          >
                          Cart
                        </Box>
                      </CartWrapper>
                    )
                    )}
                </Box>
              </NewDrawer>
                    
            </RightBox>
          </MainBox>
        </Toolbar>
      </StyledHeader>:
      <></>
  }
    </div>
    );
  };
  
  export default Navbar;
  