import { createTheme } from '@mui/material/styles';

export  const Theme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif', // Replace 'YourCustomFont' with your desired font family
  },
});

export const LabelTheme =createTheme({
  components: {
    MuiChartsLegend: {
      styleOverrides: {
        label: {
          fontSize: "13px", // Set your desired font size here
        },
      },
    },
  },
})