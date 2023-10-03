import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBox from "../SearchBox";
import axios from 'axios'
import {useSelector,  useDispatch } from 'react-redux'
import getProducts from "../../../redux/actions/getProducts";
// import axios from 'axios';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";


const  Products = ({setSelected}) => {
  const loginCredentials = useSelector(state=>state.loginCredentials)
  
  useEffect(()=>setSelected("Product"),[])
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedProducts, setSlicedProducts] = useState([])
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [ ]);  
  const {productsData} = useSelector(state=>state.getProducts);
  // console.log("products data",productsData);
  const [searchedProducts, setSearchedProducts] = useState([...productsData]);
  useEffect(()=>
  {
    setSearchedProducts(productsData);
    
    
  },[productsData])

  useEffect(()=> {
  setSlicedProducts(searchedProducts.slice(0,10))

  },[searchedProducts])
  // console.log(searchedProducts)
  // console.log("hello")
  
  const deleteProduct = async (id)=>{
    try{
      if(confirm("Are you sure want to delete this product?")){
        const headers = {
          headers:{
            Authorization:loginCredentials.token
          }
        }
        const deleted = await axios.delete(`https://flip-kart-clone-9xew.vercel.app//deleteProduct/${id}`,headers);
        dispatch(getProducts());
        // console.log(headers,'headers')
        
        // console.log("Successfully deleted",response.data.message);
      }
    }catch(error){
      // console.log("Error",error.response.data.message)
    }
  }
  const handlePageChange = (event, newPage) => {
    // You can perform your custom logic here
    setCurrentPage(newPage);
    setSlicedProducts(productsData.slice((newPage - 1) * 10 , newPage*10 ))
    // console.log(newPage,'newpage')
    // For example, you can fetch data for the new page from an API
    // or update the displayed content based on the new page.
  };


  return (
    <Box
      container
      style={{
        width: "100%",
        margin: "30px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "",
      }}
    >
      <Box style={{ fontSize: "30px", marginLeft: "", height: "40px" }}>
        All Products
      </Box>
      <Box style={{ alignSelf: "flex-start", margin: "20px 0" }}>
        <SearchBox
          products={productsData}
          setSearchedProducts={setSearchedProducts}
        />
      </Box>

      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>Short Title</TableCell>
              <TableCell>MRP</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedProducts.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.title.shortTitle}</TableCell>
                <TableCell>{product.price.mrp}</TableCell>
                <TableCell>{product.price.cost}</TableCell>
                <TableCell>{product.price.discount}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <img
                    src={product.image}
                    alt={`Product `}
                    style={{ width: "50px", height: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      marginLeft: "5px",
                      border: "none",
                      fontSize: 13,
                    }}
                    onClick={()=>deleteProduct(product._id)}
                  >
                    <DeleteIcon />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box style={{ marginTop: 10 }}>
        <Stack spacing={2}>
          <Pagination
            count={productsData.length === 0 ? 1 : Math.ceil(productsData.length / 10)}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Products;
