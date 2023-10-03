import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { Box, Button, Grid, Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_PRODUCTS_SUCCESS } from "../../../redux/constants/getProduct";
import SearchBox from "../SearchBox";
import PaginationRounded from "../../components/Pagination";
import { RESET_PRODUCT_TOAST } from "../../../redux/constants/productsToast";

const Products = ({ setSelected }) => {
  useEffect(() => setSelected("Product"), []);
  const productToast = useSelector(state=>state.productToast);
  
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedProducts,setSlicedProducts] = useState(products.slice(0,9));
  const [searchedProducts, setSearchedProducts] = useState([...products]);
  const [action, setAction] = useState("");
  const [success, setSuccess] = useState(0);
  const { productsData } = useSelector((state) => state.getProducts);
  // console.log(productsData, "lalalala");
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://flip-kart-clone-ojm5.vercel.app//getSellerProducts",
          { headers: { Authorization: loginCredentials.token } }
        );
        setProducts(response.data.message);
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response.data.message,
        });
        // setProducts(response.data.message)
        console.log(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [dispatch, success]);

  useEffect(()=>{
    if(productToast.product === 'added'){
      toast.success("Successfully added")
    }else if(productToast.product === 'updated'){
      console.log("Gorulaal")
      toast.success("Sucessfully Updated");
    }

    console.log(productToast,'Toast kaney ho')
    if(productToast.product || productToast.order){

      dispatch({type:RESET_PRODUCT_TOAST})
    }

  },[productToast])
  useEffect(() => { 
    setSearchedProducts(products);
  }, [products]);
  useEffect(()=>{

    setSlicedProducts(searchedProducts.slice(0,10))
  },[searchedProducts])

  // console.log(products, "products");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setAction("");
  };


  const deleteProduct = async (id) => {
    if (confirm("Are you sure want to delete this product?")) {
      try {
        await axios.delete(
          `https://flip-kart-clone-ojm5.vercel.app//deleteProduct/${id}`,
          { headers: { Authorization: loginCredentials.token } }
        );
        const response = await axios.get(
          "https://flip-kart-clone-ojm5.vercel.app//getSellerProducts",
          { headers: { Authorization: loginCredentials.token } }
        );
        setProducts(response.data.message);
      } catch (error) {}
    }
  };

  const handlePageChange = (event, newPage) => {
    // You can perform your custom logic here
    setCurrentPage(newPage);
    setSlicedProducts(products.slice((newPage - 1) * 10 , newPage*10 ))
    console.log(newPage,'newpage')
    // For example, you can fetch data for the new page from an API
    // or update the displayed content based on the new page.
  };

  return (
    <Box
      container
      style={{
        width: "100%",
        margin: "10px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX:'scroll'
      }}
    >
      <Box style={{ fontSize: "30px", marginLeft: 10 }}>
        All Products
      </Box>
<ToastContainer/>
      <Box
        style={{
          width: "100%",
          margin: "10px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
        }}
      >
        <Box>
          <Button
            onClick={() => {
              setOpen(true), setAction("newProduct");
            }}
            variant="contained"
            style={{ margin: "0 0 0px auto" }}
          >
            {" "}
            <AddIcon />
            Add new Products
          </Button>
        </Box>
        <Box style={{ width: "30%" }}>
          <SearchBox
            setSearchedProducts={setSearchedProducts}
            products={products}
          />
        </Box>
      </Box>

      <Box style={{ width: "100%" }}>
        <AddProduct
          setSuccess={setSuccess}
          open={open}
          handleClose={handleClose}
          action={action}
          id={action === "updateProduct" ? id : ""}
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Short Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Discount</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedProducts.map((product, index) => (
                <TableRow key={product._id}>
                  {/* {console.log(product._id, "lau lau")} */}
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{product.title.shortTitle}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price.cost}</TableCell>
                  <TableCell>{product.price.discount}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={`Product ${index + 1}`}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell>
                    {/* {console.log(product._id, "kkkk")} */}
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        setOpen(true);
                        setAction("updateProduct");
                        console.log(products, "hmmm"), setId(product._id);
                      }}
                      style={{ marginBottom: "5px" }}
                    >
                      {/* {setAction('')} */}
                      <EditIcon />
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        margin: "0 0 5px 5px",
                        border: "none",
                      }}
                      onClick={() => deleteProduct(product._id)}
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
      </Box>
      <Box style={{ marginTop: 10 }}>
        <Stack spacing={2}>
          <Pagination
            count={products.length === 0 ? 1 : Math.ceil(products.length / 10)}
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



