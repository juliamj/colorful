import React from "react";
import MainSwatches from "./MainSwatches";
import { Heading, Box } from "grommet";

function Home() {
  return (
    <Box className="contentWrap">
      <Box pad="large" align="center">
        <Heading level="1">Color App</Heading>
      </Box>
      <MainSwatches />
    </Box>
  );
}

export default Home;
