import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import ShowInfo from "../components/ShowInfo";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import './custom.css'
import {Theme,LabelTheme} from '../../theme/customeTheme'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { LineChart } from "@mui/x-charts/LineChart";
import Graph from "../components/Graph";
import { Pie } from "react-chartjs-2";
import { red } from "@mui/material/colors";
// ChartJS.register(ArcElement, Tooltip, Legend);

const SellerBody = (value) => {
  const [chart, SetChart] = useState("Items");
  const [selected,setSelected] = useState('item')
  const gradientColors = [
    'linear-gradient(45deg, #FF5733, #FFD133)',
    'linear-gradient(45deg, #33A1FF, #33FF87)',
    'linear-gradient(45deg, #A833FF, #FF33D1)',
    'linear-gradient(45deg, #FFD133, #FFAB33)',
    'linear-gradient(45deg, #33D1FF, #33FFA1)',
    'linear-gradient(45deg, #33FF87, #87FF33)'
  ];
  const handleChartClick = (value) => {
    SetChart((chart) => value);
  };

  
  return (
    <ThemeProvider theme={LabelTheme}>

    <Box
      style={{ margin: "10px", fontFamily: "Plus Jakarta Sans, sans-serif" }}
    >
      <Grid
        container
        spacing={4}
        // alignItems="center"
        // justifyContent="center"
        style={{ padding: "15px 5px 15px 15px" }}
      >
        <Grid item xs={12}>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: 28,
              color: "#1A2142",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            eCommerce Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <ShowInfo />
        </Grid>
        <Grid item>
          <ShowInfo />
        </Grid>
        <Grid item>
          <ShowInfo />
        </Grid>
        <Grid item>
          <ShowInfo />
        </Grid>
        <Grid item>
          <ShowInfo />
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Box
              style={{
                display: "flex",
                width: "37%",
                justifyContent: "",
                borderRadius:4,
                backgroundColor:'#d3d3d3'
              }}
              >
              <Typography
                onClick={() => handleChartClick("Items")}
                style={{ backgroundColor: `${chart ==='Items'?'white':''} `, cursor: "pointer",paddingRight:10,padding:4,borderRadius:'',color:'#797E82',fontWeight:500 }}
                >
                Items
              </Typography>
              <Typography
                onClick={() => handleChartClick("Price")}
                style={{ backgroundColor:`${chart ==='Price'?'white':''} `, cursor: "pointer" ,paddingRight:10,padding:4,borderRadius:'',color:'#797E82',fontWeight:500}}
                >
                Price
              </Typography>
              <Typography
                onClick={() => handleChartClick("Order")}
                style={{ backgroundColor: `${chart ==='Order'?'white':''} `, cursor: "pointer",paddingRight:10,padding:4,borderRadius:'',color:'#797E82',fontWeight:500 }}
                >
                Order
              </Typography>
            </Box>
            {chart === "Items" && (
              <PieChart
              
              series={[
                {
                  arcLabel: (data) => `${data.label} (${data.value})`,
                  arcLabelMinAngle: 45,
                  data: [
                    { id: 0, value: 15, label: "Item A", fill:gradientColors[0] },
                    { id: 1, value: 15, label: "Item B", fill:gradientColors[1] },
                    { id: 2, value: 20, label: "Item C", fill:gradientColors[2] },
                    { id: 3, value: 15, label: "Item D", fill:gradientColors[3] },
                    { id: 4, value: 15, label: "Item E", fill:gradientColors[4] },
                    { id: 5, value: 20, label: "Item F", fill:gradientColors[5] },
                  ],
                  innerRadius:20,
                  cx:140,
                  cy:150
                },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                //   fontWeight: 'bold',
                
                  fontSize:'10px'
                },
              }}
              
                width={450}
                height={300}
                />
              )}
            {chart === "Price" && (
              <PieChart
              
              series={[
                {
                  arcLabel: (data) => `${data.label} (${data.value})`,
                  arcLabelMinAngle: 45,
                  data: [
                    { id: 0, value: 15, label: "Price A", fill:gradientColors[0] },
                    { id: 1, value: 15, label: "Price B", fill:gradientColors[1] },
                    { id: 2, value: 20, label: "Price C", fill:gradientColors[2] },
                    { id: 3, value: 15, label: "Price D", fill:gradientColors[3] },
                    { id: 4, value: 15, label: "Price E", fill:gradientColors[4] },
                    { id: 5, value: 20, label: "Price F", fill:gradientColors[5] },
                  ],
                  innerRadius:20,
                  cx:140,
                  cy:150
                },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                //   fontWeight: 'bold',
                
                  fontSize:'10px'
                },
              }}
              
                width={450}
                height={300}
                />
                )}
            {chart === "Order" && (
              <PieChart
              
              series={[
                {
                  arcLabel: (data) => `${data.label} (${data.value})`,
                  arcLabelMinAngle: 45,
                  data: [
                    { id: 0, value: 15, label: "Order A", fill:gradientColors[0] },
                    { id: 1, value: 15, label: "Order B", fill:gradientColors[1] },
                    { id: 2, value: 20, label: "Order C", fill:gradientColors[2] },
                    { id: 3, value: 15, label: "Order D", fill:gradientColors[3] },
                    { id: 4, value: 15, label: "Order E", fill:gradientColors[4] },
                    { id: 5, value: 20, label: "Order F", fill:gradientColors[5] },
                  ],
                  innerRadius:20,
                  cx:140,
                  cy:150
                },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                //   fontWeight: 'bold',
                
                  fontSize:'10px'
                },
              }}
              
                width={450}
                height={300}
                />
                  )}
          </Box>
        </Grid>
        <Grid item xs={5} style={{ margin: "0 20px" }}>
          <Graph />
        </Grid>
      </Grid>
    </Box>
                  </ThemeProvider>
  );
};

export default SellerBody;
