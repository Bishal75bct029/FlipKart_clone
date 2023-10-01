import { Box, Divider, Grid, Typography ,styled} from "@mui/material";
import React from "react";

const Wrap = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "0 0px 25px 0",
  gap:15,
  [theme.breakpoints.down('lg')]:{
    justifyContent:'space-between'
  }
}));

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#323232", margin: "10px 0 0 0 " }}>
      <Box>
        <Box
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            // flexWrap:'wrap',
            margin: "0px 0 0 0",
            color: "white",
            padding: "40px 60px 0",
          }}
        >
          <Wrap>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  marginBottom: "10px",
                }}
              >
                ABOUT
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Contact Us
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                About Us
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Careers
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Flipkart Stories
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Press
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Flipkart Wholesales
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Cleartrip
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Corporate Information
              </Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  marginBottom: "10px",
                }}
              >
                HELP
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Payment
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Shipping
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Cancellation & Returns
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                FAQ
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Report Infringement
              </Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  marginBottom: "10px",
                }}
              >
                CONSUMER POLICY
              </Typography>
              <Typography style={{ fontSize: "12px", fontWeight: 500 }}>
                Cancellation & Returns
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Terms of Use
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Security
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Privacy
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Sitemap
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Grievance Redressal
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                EPR Compilance
              </Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  marginBottom: "10px",
                }}
              >
                SOCIAL
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Facebook
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Twitter
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Youtube
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid #454d5e",
                height: "171px",
                padding: "0 0 0 32px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  marginBottom: "10px",
                }}
              >
                Mail Us:
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Flipkart Internet Private Limited,
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Building Alyssa, Begonia &
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Clove Embassy Tech Village,
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Outer Ring Road, Devarabeesanahalli Village,
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Bengaluru 560103
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Karnataka, India
              </Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  marginBottom: "10px",
                }}
              >
                Registered Office Address
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Flipkart Internet Private Limited
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Buildings Alyssa, Begonia &
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Clove Embassy Tech Village,
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Outer Ringroad, Devarabeesanahalli Village,
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Bengalaru 560103,
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Karnataka,India
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                CIN:U51109KA2112PTC066107
              </Typography>
              <Typography
                style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.8 }}
              >
                Telephone: 044-45614700
              </Typography>
            </Box>
          </Wrap>
        </Box>
      </Box>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sm={12}
        spacing={8}
        style={{ borderTop: "1px solid #454d5e", height: 69 }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
            padding: "0 20px",
            alignItems: "center",
            flexWrap: "wrap",
            color: "white",
          }}
        >
          <Box>
            <Typography style={{ fontSize: 12 }}>Become a Seller</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: 12 }}>Advertise</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: 12 }}>Gift Cards</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: 12 }}>Help Center</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: 12 }}>
              2007-2023 Flipkart.com
            </Typography>
          </Box>
          <Box style={{ height: "18px", width: "377px" }}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
              alt=""
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
