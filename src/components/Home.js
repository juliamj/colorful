import React from "react";
import MainSwatches from "./MainSwatches";
import { Heading, Box } from "grommet";
import {Paint as GrommetIcon} from 'grommet-icons';


function Home({colors}) {
  return (
    <Box className="main">
      {/* <Box pad="large" align="center">
        <GrommetIcon color="brand" size="large" />
        <Heading level="1">Colorful</Heading>
      </Box> */}
      <MainSwatches colors={colors} />
    </Box>
  );
}

export default Home;
