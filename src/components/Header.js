import React from "react";
import { Paint as GrommetIcon } from "grommet-icons";
import { Header, Anchor, Box, Text } from "grommet";

function Nav() {
  return (
    <Header className="header" direction="row" justify="between" background="light-4" pad="medium">
      
        <Box alignContent="start" gap="medium" direction="row">
          <Anchor label="Home" size="large" color="white" href="/" />
          <Anchor label="About" size="large" color="white" href="/about" />
        </Box>
        <Box align="center" direction="row" gap="xsmall" >
        <GrommetIcon color="orange" size="large" />
            <Text align="center" color="orange" alignSelf="center" weight="bold" size="xxlarge">
            Colorful
            </Text>
        </Box>
    </Header>
  );
}

export default Nav;
