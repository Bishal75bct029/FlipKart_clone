import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_DATA_SUCCESS } from "../../../redux/constants/order";
import {
  FAILED_ORDER_ACTION,
  ORDER_PROCESSED,
  RESET_PRODUCT_TOAST,
} from "../../../redux/constants/productsToast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = ({ setSelected }) => {
  useEffect(() => setSelected("Order"), []);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedOrders, setSlicedOrders] = useState([]);

  const loginCredentials = useSelector((state) => state.loginCredentials);
  const productToast = useSelector((state) => state.productToast);
  const [orderType, setOrderType] = useState("all");
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  const [id, setId] = useState();
  const [success, setSuccess] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const changeStatus = async () => {
      try {
        if (!id) {
          return;
        }
        const change = await axios.put(
          `https://flip-kart-clone-9xew.vercel.app//change_order_status/${id}`,
          { status: status },
          { headers: { Authorization: loginCredentials.token } }
        );
        setSuccess(success + 1);
        console.log("dilwale toh bahut dekha");
        dispatch({ type: ORDER_PROCESSED });
      } catch (error) {
        console.log("kathmandu");
        dispatch({ type: FAILED_ORDER_ACTION });
        console.log(change);
      }
      // setId('')
    };
    changeStatus();
  }, [id]);

  useEffect(() => {
    console.log(productToast, "gadhey fuchhey");
    if (productToast.order === "processed") {
      console.log("are you here kalu");
      toast.success("Successfully Processed");
    } else if (productToast.order === "failed") {
      console.log("goru ko lgoin ");
      toast.error("Failed action");
    }
    if (productToast.order) {
      dispatch({ type: RESET_PRODUCT_TOAST });
    }
  }, [productToast]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        console.log("haha");
        const orders = await axios.get(
          `https://flip-kart-clone-9xew.vercel.app//get_orders?orderType=${orderType}`,
          { headers: { Authorization: loginCredentials.token } }
        );
        console.log(orders.data);
        dispatch({ type: ORDER_DATA_SUCCESS, payload: orders.data.orderItems });
        console.log("kanxa");
        setLoading("success");
      } catch (error) {
        setLoading("failed");
        console.log(error, "its an error");
      }
    };
    getOrders();
  }, [loginCredentials, orderType, success]);

  const handleDelete = async (id) => {
    try {
      if (!confirm("Are you sure want to delete this order?")) {
        return;
      }
      await axios.delete(`https://flip-kart-clone-9xew.vercel.app//delete_order/${id}`, {
        headers: { Authorization: loginCredentials.token },
      });
      setSuccess(success + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setSlicedOrders(orders.slice(0, 10));
  }, [orders]);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    setSlicedOrders(orders.slice((newPage - 1) * 10, newPage * 10));
  };

  return (
    <Box
      style={{
        width: "100%",
        margin: "20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontWeight: 500, fontSize: 28, color: "#373737" }}>
        Received Orders
      </Typography>
      <ToastContainer />
      <Box
        style={{
          display: "flex",
          alignSelf: "start",
          backgroundColor: "",
          padding: "",
        }}
      >
        <Typography
          style={{
            marginRight: 10,
            cursor: "pointer",
            fontSize: 16,
            borderRadius: 2,
            padding: "5px",
            backgroundColor: orderType === "all" ? "white" : "",
            color: orderType === "all" ? "blue" : "",
          }}
          onClick={() => {
            setOrderType("all");
          }}
        >
          All
        </Typography>
        <Typography
          style={{
            marginRight: 10,
            cursor: "pointer",
            fontSize: 16,
            borderRadius: 2,
            padding: "5px",
            backgroundColor: orderType === "pending" ? "white" : "",
            color: orderType === "pending" ? "blue" : "",
          }}
          onClick={() => {
            setOrderType("pending");
          }}
        >
          Pending
        </Typography>
        <Typography
          style={{
            marginRight: 10,
            cursor: "pointer",
            fontSize: 16,
            borderRadius: 2,
            padding: "5px",
            backgroundColor: orderType === "processing" ? "white" : "",
            color: orderType === "processing" ? "blue" : "",
          }}
          onClick={() => {
            setOrderType("processing");
          }}
        >
          Processing
        </Typography>
        <Typography
          style={{
            marginRight: 10,
            cursor: "pointer",
            fontSize: 16,
            borderRadius: 2,
            padding: "5px",
            backgroundColor: orderType === "complete" ? "white" : "",
            color: orderType === "complete" ? "blue" : "",
          }}
          onClick={() => {
            setOrderType("complete");
          }}
        >
          Completed
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 30,
        }}
      >
        <div style={{ width: "100%", overflowX: "auto" }}>
          {orderType === "pending"  ? (
            <TableContainer
              style={{ padding: "10px 20px", backgroundColor: "white" }}
            >
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: 16, fontWeight: 500 }}>
                      ID
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Product
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Tracking
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Customer
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Order Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slicedOrders.map((order, index) => (
                    <TableRow
                      key={order._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="order"
                        style={{ fontSize: 15 }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].title.shortTitle}
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          style={{
                            width: "76px",
                            textAlign: "center",

                            fontSize: 15,
                            fontWeight: 600,
                            color:
                              order.status === "complete"
                                ? "#6ef157"
                                : order.status === "processing"
                                ? "#2b7bf1"
                                : "#ee3a3a",
                            borderRadius: "2px",
                            backgroundColor:
                              order.status === "complete"
                                ? "#eafce7"
                                : order.status === "processing"
                                ? "#dce4f0"
                                : "#f7eeee",
                            textTransform: "capitalize",
                          }}
                        >
                          {order.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.user[0].username}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {`${new Date(order.createdAt).getFullYear()}-${
                          new Date(order.createdAt).getMonth() + 1
                        }-${new Date(order.createdAt).getDate()}`}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product?.[0].price.cost}
                      </TableCell>
                      <TableCell align="left">
                        <Box style={{ display: "flex" }}>
                          <FormControl>
                            <InputLabel id="demo-simple-select-label">
                              Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={order.status}
                              label="Status"
                              onChange={() => {
                                setId(order._id);
                              }}
                              style={{
                                height: 40,
                                margin: "0 5px 0px 0",
                                fontSize: 15,
                              }}
                            >
                              <MenuItem
                                value={"pending"}
                                onClick={() => setStatus("pending")}
                                style={{ fontSize: 15 }}
                              >
                                Pending
                              </MenuItem>
                              <MenuItem
                                value={"processing"}
                                onClick={() => setStatus("processing")}
                                style={{ fontSize: 15 }}
                              >
                                Processing
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "red", fontSize: 15 }}
                            onClick={() => handleDelete(order._id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : !loading && (
            <Box style={{ textAlign: "center", width: "100%" }}>Loading</Box>
          )}

          {orderType === "all" &&loading  ? (
            <TableContainer
              style={{ padding: "10px 20px", backgroundColor: "white" }}
            >
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: 16, fontWeight: 500 }}>
                      ID
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Product
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Tracking
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Customer
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Order Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slicedOrders.map((order, index) => (
                    <TableRow
                      key={order._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="order"
                        style={{ fontSize: 15 }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].title.shortTitle}
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          style={{
                            width: "76px",
                            textAlign: "center",

                            fontSize: 15,
                            fontWeight: 600,
                            color:
                              order.status === "complete"
                                ? "#6ef157"
                                : order.status === "processing"
                                ? "#2b7bf1"
                                : "#ee3a3a",
                            borderRadius: "2px",
                            backgroundColor:
                              order.status === "complete"
                                ? "#eafce7"
                                : order.status === "Pending"
                                ? "#dce4f0"
                                : "#f7eeee",
                            textTransform: "capitalize",
                          }}
                        >
                          {order.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.user[0].username}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {`${new Date(order.createdAt).getFullYear()}-${
                          new Date(order.createdAt).getMonth() + 1
                        }-${new Date(order.createdAt).getDate()}`}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].price.cost}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ):''
          }
          {orderType === "complete" && loading && (
            <TableContainer
              style={{ padding: "10px 20px", backgroundColor: "white" }}
            >
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: 16, fontWeight: 500 }}>
                      ID
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Product
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Tracking
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Customer
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Order Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slicedOrders.map((order, index) => (
                    <TableRow
                      key={order._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="order"
                        style={{ fontSize: 15 }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].title.shortTitle}
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          style={{
                            width: "76px",
                            textAlign: "center",

                            fontSize: 15,
                            fontWeight: 600,
                            color:
                              order.status === "complete"
                                ? "#6ef157"
                                : order.status === "processing"
                                ? "#2b7bf1"
                                : "#ee3a3a",
                            borderRadius: "2px",
                            backgroundColor:
                              order.status === "complete"
                                ? "#eafce7"
                                : order.status === "Pending"
                                ? "#dce4f0"
                                : "#f7eeee",
                            textTransform: "capitalize",
                          }}
                        >
                          {order.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.user[0].username}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {`${new Date(order.createdAt).getFullYear()}-${
                          new Date(order.createdAt).getMonth() + 1
                        }-${new Date(order.createdAt).getDate()}`}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].price.cost}
                      </TableCell>
                      <TableCell align="left">
                        <Box style={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "red", fontSize: 15 }}
                            onClick={() => handleDelete(order._id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {orderType === "processing" && loading && (
            <TableContainer
              style={{ padding: "10px 20px", backgroundColor: "white" }}
            >
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: 16, fontWeight: 500 }}>
                      ID
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Product
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Tracking
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                        Customer
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Order Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontSize: 16, fontWeight: 500 }}
                    >
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slicedOrders.map((order, index) => (
                    <TableRow
                      key={order._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="order"
                        style={{ fontSize: 15 }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].title.shortTitle}
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          style={{
                            width: "76px",
                            textAlign: "center",

                            fontSize: 15,
                            fontWeight: 600,
                            color:
                              order.status === "complete"
                                ? "#6ef157"
                                : order.status === "processing"
                                ? "#2b7bf1"
                                : "#ee3a3a",
                            borderRadius: "2px",
                            backgroundColor:
                              order.status === "complete"
                                ? "#eafce7"
                                : order.status === "Pending"
                                ? "#dce4f0"
                                : "#f7eeee",
                            textTransform: "capitalize",
                          }}
                        >
                          {order.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.user[0].username}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {`${new Date(order.createdAt).getFullYear()}-${
                          new Date(order.createdAt).getMonth() + 1
                        }-${new Date(order.createdAt).getDate()}`}
                      </TableCell>
                      <TableCell align="left" style={{ fontSize: 15 }}>
                        {order.product[0].price.cost}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Box>
      <Pagination
        count={orders.length === 0 ? 1 : Math.ceil(orders.length / 10)}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
        style={{ margin: "15px 0px" }}
      />
    </Box>
  );
};

export default Order;
