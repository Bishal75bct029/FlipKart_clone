import {styled} from "@mui/material";
import { Box, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { SearchProduct } from "../../../redux/actions/searchResult";
import { Link } from "react-router-dom";
import { SEARCH_SUCCESS } from "../../../redux/constants/searchResults";
import { FILTER_SUCCESS } from "../../../redux/constants/filterValue";

const SearchBox = styled(Box)(({theme})=>({

  backgroundColor: 'white',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0 0px 0 16px',
  width: '444px',
  height: '36px',
  borderRadius: '2px',
  marginRight: '20px',
  marginLeft: '10px',
  [theme.breakpoints.down('lg')]:{
    width:380
  },
  [theme.breakpoints.down('md')]:{
    width:300
  },
  [theme.breakpoints.down('sm')]:{
    width:220,
    padding:7
  },
  
  
}));

const SearchIconWrapper = styled("span")(({theme})=>({

  color: '#2874f0',
  fontWeight: 'bolder',
  paddingTop: 2,
  paddingRight: 6,
  fontSize: 20,
  [theme.breakpoints.down('sm')]:{
    width:220,
    paddingRight:0
  },
}))


const SearchBoxs = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state=>state.filterValue)
  // let newFilterValue = [...filterValue];
  const [searchValue, setSearchValue] = useState();
  const [suggestion, setSuggestion] = useState([]);
  const setSearch = (event) => {
    event.preventDefault();
    setSearchValue((searchValue) => event.target.value);
    const suggest = async () => {
      try {
        let response;
        const apiUrl = `http://localhost:8000/search?suggestion=${
          searchValue ? searchValue : ""
        }`;
        console.log("search value", searchValue);
        console.log(apiUrl, "apiurl");
        setTimeout(async () => {
          response = await axios.get(apiUrl);
          setSuggestion((suggestion) => response.data.suggestionResults);
          console.log(response.data.suggestionResults);
          // console.log(response.data.message[0],"ho ra")
        }, 1000);
        // cons
      } catch (error) {
        console.log(error, "suggestion error");
      }
    };
    suggest();

    
  };
  const handleSearch =(searchValue) =>{
    if(searchValue){
      console.log("hello handle",searchValue)
      dispatch({type:FILTER_SUCCESS,payload:{minValue:0,maxValue:10001}})
       dispatch(SearchProduct(`http://localhost:8000/search?search=${searchValue}`));
       setSearchValue('')
    }
  }
  
  return (
    <SearchBox>
      <InputBase
        placeholder="Search for products, brands and more"
        style={{ width: "100%" }}
        value={searchValue}
        onChange={(e) => setSearch(e)}
      />
      <Link to={`${searchValue ?`/products/search?search=${searchValue}`:'/'}`}>
      <SearchIconWrapper onClick={()=> handleSearch(searchValue)} style={{cursor:'pointer'}}>
        <SearchIcon/>
      </SearchIconWrapper>
      </Link>
      {searchValue  && (
        <Box
          style={{
            position: "absolute",
            top: 36,
            left: "0px",
            color: "#878787",
            background: "white",
            width: "inherit",
            maxHeight: 320,
            padding: "5px 5px 5px 10px",
            overflow: "hidden",
            borderTop:'1px solid #ccc',
            borderRadius: 2,
            boxShadow:'1px 1px 2px rgba(0,0,0.1)'
          }}
        >
          {suggestion.length > 0 ? (<>
            {suggestion?.map((data, index) => {
              return (
                <Link to = {`/getProduct/${data._id}`} style={{textDecoration:'none',color:'inherit'}}>
                <Typography key ={data._id}style={{fontSize:14,margin:'5px 0px',width:'100%',height:'16px'}}>
                {data.title.shortTitle}
                </Typography>
                </Link>
                );
            })}
            </>

          ):(<Typography style={{fontSize:14}}>No suggestion found</Typography>)
          
          }
          {/* Hello */}
          {/* {console.log(suggestion,'gandu')} */}
        </Box>
      ) }
      
    </SearchBox>
  );
};

export default SearchBoxs;
