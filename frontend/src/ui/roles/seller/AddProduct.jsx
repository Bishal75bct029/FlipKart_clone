import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_PRODUCTS_SUCCESS } from "../../../redux/constants/getProduct";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  FAILED_PRODUCT,
  PRODUCT_ADDED,
  PRODUCT_UPDATED,
} from "../../../redux/constants/productsToast";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddProduct = ({ open, handleClose, action, id, setSuccess }) => {
  console.log(id, "yeta ko ho");
  const dispatch = useDispatch();
  const productToast = useSelector((state) => state.productToast);
  // const {productsData} = useSelector(state=>state.getProducts);
  console.log(action);
  const [product, setProduct] = useState({
    id: "",
    shortTitle: "",
    category: "",
    longTitle: "",
    mrp: 0,
    cost: 0,
    discount: "",
    quantity: 0,
    description: "",
    extradiscount: "",
    tagline: "",
  });
  const emptyProduct = {
    id: "",

    shortTitle: "",
    category: "",
    longTitle: "",
    mrp: 0,
    cost: 0,

    quantity: 0,
    description: "",
    extradiscount: "",
    tagline: "",
  };
  useEffect(() => {
    const getSingleProduct = async () => {
      console.log("hi");

      if (action === "updateProduct") {
        const apiUrl = `https://flip-kart-clone-9xew.vercel.app//getProduct/${id ? id : ""}`;
        console.log(apiUrl, "timro mann");

        try {
          const response = await axios.get(apiUrl);
          console.log("haha");
          const jsonData = await response.data;
          console.log(jsonData);
          setProduct({
            id: jsonData.id,
            image: jsonData.image,
            category: jsonData.category,

            shortTitle: jsonData.title.shortTitle,
            longTitle: jsonData.title.longTitle,
            mrp: jsonData.price.mrp,
            cost: jsonData.price.cost,
            discount: jsonData.price.discount,
            quantity: jsonData.quantity,
            description: jsonData.description,
            extradiscount: jsonData.discount,
            tagline: jsonData.tagline,
          });
          console.log(product);
          // return jsonData
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("kya kare kya nakarey");
      }
    };
    getSingleProduct();
  }, [action]);
  const [imageUrl, setImageUrl] = useState("");
  const formData = new FormData();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      setProduct((prevProduct) => ({ ...prevProduct, file: file }));
      // formData.append('file',file)
      console.log(product, "love me thoda");
      const reader = new FileReader();
      console.log(file, "file");
      reader.onload = (e) => {
        const uploadedFileDataUrl = e.target.result;
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For other inputs, append their values

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    if (name === "product.mrp") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        discount: value - product.cost,
      }));
    }
    if (name === "product.cost") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        discount: product.mrp - value,
      }));
    }
  };
  useEffect(() => {
    if (productToast.product === "failed") {
      toast.error("Failed !!!", { autoClose: 1500 });
    }
    if (productToast.product || productToast.order) {
      dispatch({ type: FAILED_PRODUCT });
    }
  }, [productToast]);
  const userDetails = useSelector((state) => state.loginCredentials);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct((prevProduct) => ({
      ...prevProduct,
      discount: prevProduct.mrp - prevProduct.cost,
    }));
    console.log(product, "discount bigriy");
    Object.entries(product).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      formData.append(key, value);
      // console.log(formData,'harekchoti ma heram')
    });
    console.log(product, "aako xa ra");
    if (action === "newProduct") {
      fetch("https://flip-kart-clone-9xew.vercel.app//post_product", {
        method: "POST",
        headers: {
          authorization: userDetails.token,
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            response.json();
          } else {
            console.log("hi");
            throw new Error("Failed yr");
          }
        })
        .then((data) => {
          // Handle the response from the server, e.g., display success message
          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
          setSuccess((count) => count + 1);
          setProduct(emptyProduct);
          dispatch({ type: PRODUCT_ADDED });

          setImageUrl("");
          console.log("Product added:", data);

          handleClose();
        })
        .catch((error) => {
          dispatch({ type: FAILED_PRODUCT });
          console.error("Error adding product:", error);
        });
    } else {
      fetch(`https://flip-kart-clone-9xew.vercel.app//updateProduct/${id}`, {
        method: "PUT",
        headers: {
          authorization: userDetails.token,
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            response.json();
          } else {
            throw new Error("Update bhayena");
          }
        })
        .then((data) => {
    
          console.log("maya garxu");
          setSuccess((count) => count + 1);
          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
          setSuccess((count) => count + 1);
          setProduct(emptyProduct);
          setImageUrl("");
          // console.log("Product updated:", data);

          handleClose();
          handleClose();
          dispatch({ type: PRODUCT_UPDATED });
        })
        .catch((error) => {
          dispatch({ type: FAILED_PRODUCT });
          console.error("Error updating Product product:", error);
        });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        handleClose();
        setProduct(emptyProduct);
        setImageUrl("");
      }}
      style={{ width: "100%" }}
    >
      <DialogTitle>Add a Product</DialogTitle>
      <DialogContent>
        <ToastContainer />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ width: "100%" }}
        >
          <Grid xs={12} item style={{ width: "100%" }}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <TextField
                label="Product ID"
                type="text"
                name="id"
                value={product.id}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Select Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={product.category}
                  label="Category"
                  onChange={handleChange}
                  name="category"

                  // style = {{width:500}}
                >
                  <MenuItem value={"home"}>Home</MenuItem>
                  <MenuItem value={"grocery"}>Grocery</MenuItem>
                  <MenuItem value={"beauty"}>Beauty</MenuItem>
                  <MenuItem value={"gifts"}>Gifts</MenuItem>
                  <MenuItem value={"clothing"}>Clothing</MenuItem>
                  <MenuItem value={"appliances"}>Appliances</MenuItem>
                  <MenuItem value={"mobile"}>Mobile</MenuItem>
                  <MenuItem value={"electronics"}>Electronics</MenuItem>
                  <MenuItem value={"fashion"}>Fashion</MenuItem>
                  <MenuItem value={"travel"}>Travel</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Short Title"
                type="text"
                name="shortTitle"
                value={product.shortTitle}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Long Title"
                type="text"
                name="longTitle"
                value={product.longTitle}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="MRP"
                type="number"
                name="mrp"
                value={product.mrp}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Cost"
                type="number"
                name="cost"
                value={product.cost}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Discount"
                type="number"
                name = 'discount'
                value={product.mrp - product.cost}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Quantity"
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextareaAutosize
                rowsMin={3}
                placeholder="Product Description"
                value={product.description}
                name="description"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                  resize: "vertical",
                  minHeight: "100px",
                  "&:focus": {
                    borderColor: "blue",
                  },
                }}
              />
              <TextField
                label="Discount"
                type="text"
                name="extradiscount"
                value={product.extradiscount}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Tagline"
                type="text"
                name="tagline"
                value={product.tagline}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <Box style={{ margin: "10px 0" }}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Product Image
                  <VisuallyHiddenInput
                    type="file"
                    name="file"
                    onChange={(e) => handleFileChange(e)}
                  />
                </Button>
                {console.log(action, "hahahuhuhehe")}
                {imageUrl && (
                  <Box>
                    <img
                      src={`${imageUrl}`}
                      alt="Image"
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px 0",
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Button variant="contained" color="primary" type="submit">
                {action === "updateProduct" ? "Update Product" : "Add Product"}
              </Button>
            </form>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
