import { AppBar, Box,Button, InputBase, Toolbar, Typography, styled } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginBtn from "../features/login-signup/LoginBtn";
import UsernameProvider from "../../usecontext/UsernameProvider";
import SearchBoxs from "../features/search/SearchBoxs";
import { useTheme } from "@emotion/react";
import Seller from "../features/login-signup/Seller";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 56px;
`

const LogoText = styled(Typography)`
    margin: -2px 0px 0px;
    font-size: 11px;
    font-style: italic;
    line-height: 0;
`
const PlusLogo = styled('img')({
    width: 10,
    height:10,
    marginLeft:1
})







const CartWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`
const MainBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    
    `

const LeftBox = styled(Box)(({theme})=>({

    display: 'flex',
    alignItems: 'center',
    /* width: 50%; */
    justifyContent: 'space-between',
    marginLeft: '10%',
    [theme.breakpoints.down('lg')]:{
        marginLeft:'2%',
    },
    [theme.breakpoints.down('md')]:{
        marginLeft:'2%'
    }
}));

const RightBox = styled(Box)(({theme})=>({


    display: 'flex',
    alignItems: 'center',
    /* justify-content: space-between; */
    width: '40%',
    minWidth:300,
    marginRight: '10%',
    [theme.breakpoints.down('lg')]:{
        marginRight:0
    }

}))
    
const Navbar = () => {
    const theme = useTheme();
  return (
    <div theme = {theme}>
      <StyledHeader>
        <Toolbar style={{minHeight:'56px'}}>
            <MainBox >
                <LeftBox>

                <Link to ="/" style={{textDecoration:'none',color:'inherit'}}> 


                <Box style = {{cursor:'pointer'}}>
                    <img src="http://localhost:5173/static/images/flipkartlogo.png" style={{height:20}} alt="logo" />
                    <LogoText>
                        Explore 
                        <Box component="span" style={{color:"#FFE500"}}> Plus</Box>
                        <PlusLogo src="http://localhost:5173/static/images/plus.png" alt="plus" />
                    </LogoText>
                </Box>
                </Link>
                <SearchBoxs/>
                
                
                </LeftBox>
                <RightBox style = {{display:'flex',justifyContent:'space-between',alignItems:'center',width:'45%'}}>


                    <Typography style={{marginRight:''}}>

                    <LoginBtn/>
                    </Typography>
                <Box variant = 'span' style={{width:'116px',fontWeight:'500',margin:'0 0px 0 0px',}}><Link to ="profile/seller">Become a Seller</Link></Box>
                {/* <Seller/> */}
                <Box variant = 'span' style={{marginRight:''}}>More</Box>
                <CartWrapper>
                    
                    <ShoppingCartIcon/>
                <Box variant = 'span' style={{fontWeight:'500',marginLeft:'2px'}}>Cart</Box>

                </CartWrapper>
                </RightBox>

            </MainBox>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Navbar;
