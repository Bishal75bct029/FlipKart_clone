import { AppBar, Box,Button, InputBase, Toolbar, Typography, styled } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginBtn from "../features/login-signup/LoginBtn";
import UsernameProvider from "../../usecontext/UsernameProvider";
import SearchBoxs from "../features/search/SearchBoxs";

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
    margin-left: 13%;

`

const LeftBox = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
`
const RightBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    margin-right: 10%;
    `
const Navbar = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{minHeight:'56px'}}>
            <MainBox >
                <LeftBox>


                <Box style = {{}}>
                    <img src="http://localhost:5173/static/images/flipkartlogo.png" style={{height:20}} alt="logo" />
                    <LogoText>
                        Explore 
                        <Box component="span" style={{color:"#FFE500"}}> Plus</Box>
                        <PlusLogo src="http://localhost:5173/static/images/plus.png" alt="plus" />
                    </LogoText>
                </Box>
                <SearchBoxs/>
                <UsernameProvider>
                    <LoginBtn/>
                </UsernameProvider>
                </LeftBox>
                <RightBox style = {{display:'flex',justifyContent:'space-between',alignItems:'center',width:'45%', marginRight:'10%'}}>


                <Box variant = 'span' style={{width:'116px',fontWeight:'500'}}>Become a Seller</Box>
                <Typography>More</Typography>
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
