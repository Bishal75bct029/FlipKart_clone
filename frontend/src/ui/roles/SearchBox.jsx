import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBox = ({products,setSearchedProducts}) => {
    const [search,setSearch] = useState('');
    const handleSearch =(event)=>{
        if(event.target.value === ''){
            // console.log(search,"love")
            setSearchedProducts(products)
            return
        }
        let filteredProducts = products.filter((product,index)=>{
            // console.log("hello",product)
            return product.title?.shortTitle && 
            typeof product.title.shortTitle === 'string' && 
            product.title.shortTitle.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setSearchedProducts(()=>filteredProducts);
        // console.log(filteredProducts,"i am filtered")    
    }

    
  return (
    <Box style ={{position:'relative'}}>
        <TextField
            placeholder='Search Products...'
            onChange={(e)=>{setSearch(e.target.value),handleSearch(e)}}
            value={search}
            style={{
                width:'100%',
                minWidth:'300px',    
            }}
            inputProps={{
                style:{
                    height:'15px'
                }
            }}
            />
            <SearchIcon style={{position:'absolute',right:0,top:'20%',color:'#2874f0',fontSize:28}}/>
            
       
    </Box>
  )
}

export default SearchBox