import React from "react";

import { Box, Grid } from "@mui/material"

import Header from "./header/Header";
import Footer from "./footer/Footer";

// const { Content } = Box;
const WithLayout = (props: React.ReactNode) => {
  return (
    <Box style={{ minHeight: "100vh" }}>
      <Header />
      <Grid>{props}</Grid>
      <Footer />
    </Box>
  );
};

export default WithLayout;
