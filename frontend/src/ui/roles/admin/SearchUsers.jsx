import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchUsers = ({users,setUsers}) => {
    const [search,setSearch] = useState('');
    const handleSearch =(event)=>{
        if(event.target.value === ''){
            // console.log(search,"love")
            setUsers(users)
            return
        }
        let filteredUsers = users.filter((user,index)=>{
            // console.log("hello",product)
            return ( user.username && 
            typeof user.username === 'string' && 
            user.username.toLowerCase().includes(event.target.value.toLowerCase())
                ||
            user.email && 
            typeof user.email === 'string' &&
            user.email.toLowerCase().includes(event.target.value.toLowerCase())
            )
        })
        setUsers(()=>filteredUsers);
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

export default SearchUsers