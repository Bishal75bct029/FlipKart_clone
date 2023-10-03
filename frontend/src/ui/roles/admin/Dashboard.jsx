import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ShowInfo from "../components/ShowInfo";
// import { Pie } from "react-chartjs-2";
import "../seller/custom.css";
import { Theme, LabelTheme } from "../../theme/customeTheme";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { LineChart } from "@mui/x-charts/LineChart";
import Graph from "../components/Graph";
import { Pie } from "react-chartjs-2";
// import {Chart, ArcElement} from 'chart.js'
import { red } from "@mui/material/colors";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
} from "../../../redux/constants/getDashboard";
// ChartJS.register(ArcElement, Tooltip, Legend);


ChartJS.register(ArcElement,Legend,Tooltip);

const Dashboard = ({ value, setSelected }) => {
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const dashboardData = useSelector((state) => state.getDashboardData);
  const dispatch = useDispatch();

  useEffect(() => setSelected("Dashboard"), []);
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          "https://flip-kart-clone-ojm5.vercel.app//backend_orders?orderType=all",
          { headers: { Authorization: loginCredentials.token } }
        );
        console.log(response.data, "haha");
        dispatch({
          type: DASHBOARD_SUCCESS,
          payload: response.data.orderTotals,
        });
      } catch (error) {
        // console.log(error.response.data)
        dispatch({ type: DASHBOARD_FAILURE });
        console.log("k vayo  timilai");
      }
    };
    fetchDashboardData();
  }, []);

  console.log(dashboardData[0], "iam dashing");
  const data = {
    labels:dashboardData[0]?.topFive.map((data)=> data._id) ,
    datasets: [
      {
        data: dashboardData[0]?.topFive.map((data)=> data.totalPrice),
        backgroundColor: ["#AEDFF7", "#C9ECAE", "#FFF4A3", "#D4C4E4", "#FAD7E1"],
      },
    ],
    hoverOffset:4
  };

  return (
    <ThemeProvider theme={LabelTheme}>
      <Box
        style={{ margin: "10px", fontFamily: "Plus Jakarta Sans, sans-serif" }}
      >
        <Box>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: 28,
              color: "#1A2142",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              width: "330px",
              margin: "10px auto",
            }}
          >
            eCommerce Dashboard
          </Typography>
        </Box>
        <Box
          // alignItems="center"
          // justifyContent="center"
          style={{
            padding: "15px 5px 15px 15px",
            gap: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <ShowInfo
              title={`Pending Order`}
              dashboardData={dashboardData[0]?.totalPendingCost}
            />
          </Box>
          <Box>
            <ShowInfo
              title={`Today's Order`}
              dashboardData={dashboardData[0]?.totalTodayCost}
            />
          </Box>
          <Box>
            <ShowInfo
              title={`Completed Orders`}
              dashboardData={dashboardData[0]?.totalSoldCost}
            />
          </Box>
          <Box>
            <ShowInfo
              title={`In Processing`}
              dashboardData={dashboardData[0]?.totalProcessingCost}
            />
          </Box>
          <Box>
            <ShowInfo title={`Monthly Sales`}  dashboardData={dashboardData[0]?.totalMonthSales}/>
          </Box>
        </Box>
        <br />
        <Box style ={{width:'100%',height:'450px',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
          <Typography style={{fontSize:28,color:'#676767',marginTop:'20px'}}>Top 5 Sold Products</Typography>
          <Pie
            data={data}
            options={{ responsive: true, maintainAspectRatio: true,width:400,height:4000 }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard