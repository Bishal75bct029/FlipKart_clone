import { LineChart } from '@mui/x-charts/LineChart';

const currentDate = new Date();
const months = [
  
];
let currentYear = null;
let currentMonth = null;
for(let i=5;i>=0;i--){
  if(currentDate.getMonth() -i <0){
     currentYear = currentDate.getFullYear() - 1;
     currentMonth = currentDate.getMonth() + 11 - i;
  }else{
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth() - i
  }
  months.push(new Date(currentYear,currentMonth))
}



const Graph = () => {
    
      
      const salesByPrice = [
        28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 
      ];
      
      const interactedBuyers = [
        26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 
      ];
      
      const numOfOrders = [
        25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 
      ];
      
      
        return (
          <LineChart
            xAxis={[
              {
                id: 'Years',
                data: months,
                scaleType: 'time',
                // valueFormatter: (date) => date.getFullYear(),
                
              },
            ]}
            series={[
              {
                id: 'Price',
                label: 'Increased Sales',
                data: salesByPrice,
                stack: 'total',
                area: true,
                showMark: false,
                fill: {
                  type: 'gradient',
                  gradient: ['#FF5733', '#FFD133'], // Gradient colors
                },
              },
              {
                id: 'Orders',
                label: 'Increased Orders',
                data: numOfOrders,
                stack: 'total',
                area: true,
                showMark: false,
                fill: {
                  type: 'gradient',
                  gradient: ['#33A1FF', '#33FF87'], // Gradient colors
                },
              },
              {
                id: 'Buyers',
                label: 'Increased Buyers',
                data: interactedBuyers,
                stack: 'total',
                area: true,
                showMark: false,
                fill: {
                  type: 'gradient',
                  gradient: ['#A833FF', '#FF33D1'], // Gradient colors
                },
              },
            ]}
            sx={{
              '--ChartsLegend-itemWidth': '190px',
            }}
            width={600}
            height={400}
            margin={{ left: 70 }}
          />
        );
}


export default Graph;