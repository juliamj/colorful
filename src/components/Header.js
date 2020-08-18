import React from "react";
import { Paint as GrommetIcon } from "grommet-icons";
import { Header, Anchor, Box, Text } from "grommet";

function Nav() {
  return (
    <Header
      elevation="medium"
      className="header"
      direction="row"
      justify="between"
      background="light-4"
      pad="medium"
    >
      <Box alignContent="start" gap="medium" direction="row">
        <Anchor
          label="Home"
          size="large"
          color="light-2"
          href="/"
        />
        <Anchor label="About" size="large" color="light-1" href="/about" />
      </Box>
      <Box
        align="center"
        direction="row"
        gap="xsmall"
        margin={{ right: "large" }}
      >
        <GrommetIcon color="light-1" size="large" />
        <Text
          align="center"
          color="light-1"
          alignSelf="center"
          weight="bold"
          size="xxlarge"
        >
          Colorful
        </Text>
      </Box>
    </Header>
  );
}

export default Nav;
