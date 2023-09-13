import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Order = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("1", 'Bishal Lamichhane', "Pending", 24, 4.0),
    createData("2", 'Bishal Lamichhane', "Cancelled", 37, 4.3),
    createData("3", 'Bishal Lamichhane', "Complete", 23, 6.0),
    createData("4", 'Bishal Lamichhane', 3.7, 67, 4.3),
    createData("5", 'Bishal Lamichhane', 16.0, 49, 3.9),
  ];
  const [tracking, setTracking] = useState("Complete");
  return (
    <Box style  ={{width:'100%'}}>
      <Typography>Orders</Typography>
      <Box style={{ display: "flex" }}>
        <Typography style={{ marginRight: 10 }}>All</Typography>
        <Typography style={{ marginRight: 10 }}>Pending</Typography>
        <Typography style={{ marginRight: 10 }}>Completed</Typography>
        <Typography style={{ marginRight: 10 }}>Cancelled</Typography>
      </Box>
      <Box style ={{display:'flex',flexGrow:1, alignItems:'center',justifyContent:'center',maxWidth:'auto',padding:'20px 20px'}}>
        <TableContainer component={Paper} style={{padding:'10px 20px'}}>
          <Table sx={{width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">
                  <Typography style={{ width: "50%" }}>Tracking</Typography>
                </TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{
                        width: "33%",
                        textAlign: "center",
                        fontSize:13,
                        fontWeight:600,
                        color:
                        row.fat === "Complete"
                            ? "#6ef157"
                            : row.fat === "Pending"
                            ? "#2b7bf1"
                            : "#ee3a3a",
                        borderRadius: "2px",
                        backgroundColor:
                          row.fat === "Complete"
                            ? "#eafce7"
                            : row.fat === "Pending"
                            ? "#dce4f0"
                            : "#f7eeee",
                      }}
                    >
                      {row.fat}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Order;
