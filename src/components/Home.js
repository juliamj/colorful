import React from "react";
import MainSwatches from "./MainSwatches";
import { Box } from "grommet";


function Home({colors}) {
  return (
    <Box className="main">
     
      <MainSwatches colors={colors} />
    </Box>
  );
}

export default Home;
