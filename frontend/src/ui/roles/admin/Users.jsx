import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/users";
import SearchUsers from "./SearchUsers";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const Users = ({ setSelected }) => {
  const loginCredentials = useSelector(state=>state.loginCredentials);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.users);
  const [slicedUsers,setSlicedUsers] = useState(user.slice(0,10));

  useEffect(() => setSelected("User"), []);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getUsers());
    } catch (error) {
      console.log("error");
    }
  }, [dispatch]);
  console.log(user)
  useEffect(() => {
    setUsers(user);
    
  }, [user]);
  useEffect(() => {
    
    setSlicedUsers(users.slice(0,10))
  }, [users]);

  const handleDelete =async(id)=>{
    try{
      if(confirm("Are you sure to delete the selected user?")){
        const headers = {
          headers:{
            Authorization:loginCredentials.token
          }
        }

        const deleted = await axios.delete(`https://flip-kart-clone-9xew.vercel.app//deleteUser/${id}`,headers)
        dispatch(getUsers())
      }else{
        return; 
      }
    }catch(error){
      console.log("Failed",error)
    }


  }
  const handlePageChange = (event, newPage) => {
    // You can perform your custom logic here
    setCurrentPage(newPage);
    setSlicedUsers(users.slice((newPage - 1) * 10 , newPage*10 ))
    console.log(newPage,'newpage')
    // For example, you can fetch data for the new page from an API
    // or update the displayed content based on the new page.
  };

  return (
    <Box style = {{width:'80%',display:'flex',flexDirection:'column',alignItems:'center',margin:'0 30px'}}>
      <Typography style ={{fontSize:32,marginTop:20,fontWeight:500,color:'#878787'}} >All Users</Typography>
      <Box style ={{alignSelf:'flex-start',margin:'20px 0'}}>
        
      <SearchUsers users = {user} setUsers={setUsers} />
      </Box>
      <Paper style={{width:'100%'}}> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SN</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(users)}
          {slicedUsers.map((user, index) => (
            <TableRow key={user.username}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                
                
                <Button variant = "contained" style={{color:'white',backgroundColor:'red'}} onClick={()=>handleDelete(user._id)}>
                  <DeleteIcon />
                  Delete
                  </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Box style={{ marginTop: 10 }}>
        <Stack spacing={2}>
          <Pagination
            count={user.length === 0 ? 1 : Math.ceil(user.length / 10)}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </Stack>
      </Box>
              </Box>
  );
};

export default Users;
