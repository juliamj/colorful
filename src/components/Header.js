import React from "react";
import { Paint as GrommetIcon } from "grommet-icons";
import { Header, Anchor, Box, Text } from "grommet";

function Nav() {
  return (
    <Header direction="row" justify="between" background="light-4" pad="medium">
      
        <Box alignContent="start" gap="medium" direction="row">
          <Anchor label="Home" href="/" />
          <Anchor label="About" href="/about" />
        </Box>
        <Box align="center" direction="row" gap="xsmall" >
        <GrommetIcon color="brand" size="large" />
            <Text align="center" color="brand" alignSelf="center" weight="bold" size="xxlarge">
            Colorful
            </Text>
        </Box>
    </Header>
  );
}

export default Nav;
