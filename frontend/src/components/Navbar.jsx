import { AppBar, Box, InputBase, Toolbar, Typography, styled } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';

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

const Navbar = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar>
            <Box style = {{display:'flex'}}>

                <Box style = {{marginLeft:'13%'}}>
                    <img src="./static/images/flipkartlogo.png" style={{height:20}} alt="logo" />
                    <LogoText>
                        Explore 
                        <Box component="span" style={{color:"#FFE500"}}> Plus</Box>
                        <PlusLogo src="./static/images/plus.png" alt="plus" />
                    </LogoText>
                </Box>
                <Box style = {{backgroundColor:'white',display:'flex',alignItems:'center',padding: '0 16px', width:402,height:36,borderRadius:'2px'}}>
                    <InputBase
                        placeholder="Search for products, brands and more"
                        style={{width:'100%'}}
                    />
                    <SearchIcon/>
                </Box>
            </Box>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Navbar;
