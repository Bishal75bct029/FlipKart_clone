import { AppBar, Box,Button, InputBase, Toolbar, Typography, styled } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginBtn from "../features/login-signup/LoginBtn";
import UsernameProvider from "../usecontext/UsernameProvider";

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

const SearchBox = styled(Box)`
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 0px 0 16px;
    width: 444px;
    height: 36px;
    border-radius: 2px;
    margin-right: 20px;
    margin-left: 10px;


`



const SearchIconWrapper = styled('span')`
    color: #2874f0;
    font-weight: bolder;
    padding-top: 2px;
    padding-right: 6px;
    font-size: 20px;
    
`

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
                    <img src="./static/images/flipkartlogo.png" style={{height:20}} alt="logo" />
                    <LogoText>
                        Explore 
                        <Box component="span" style={{color:"#FFE500"}}> Plus</Box>
                        <PlusLogo src="./static/images/plus.png" alt="plus" />
                    </LogoText>
                </Box>
                <SearchBox >
                    <InputBase
                        placeholder="Search for products, brands and more"
                        style={{width:'100%'}}
                    />
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                </SearchBox>    
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
