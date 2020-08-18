import React from "react";
import { Paint as GrommetIcon } from "grommet-icons";
import {
  Heading,
  Box,
  Paragraph,
  Accordion,
  AccordionPanel,
  Anchor,
  Text,
  Image,
} from "grommet";

function About() {
  return (
    <Box pad="large" align="center" className="main">
      <Heading textAlign="center" level="1">
        About <br />
        <GrommetIcon color="black" size="large" />
        Colorful
      </Heading>
      <Box pad="medium" align="center" width="large">
        <Heading level="3">Objective</Heading>

        <Box pad="small">
          <Paragraph>We wanted to play with colors. Weeeeeeee!</Paragraph>
        </Box>

        <Heading level="3">Tech and Tools</Heading>
        <Box pad="small">
          <Anchor href="https://reactjs.org/">React</Anchor>
          <Anchor href="https://v2.grommet.io/">Grommet</Anchor>
          <Anchor href="https://www.npmjs.com/package/puppeteer">Puppeteer</Anchor>
        </Box>

        <Heading level="3">Contributors</Heading>
        <Box pad="small">
          <Image />
          <Anchor href="http://www.github.com/juliamj">Julia Jannsen</Anchor>
          <Image />
          <Anchor href="http://www.github.com/jbello88">Markus Seeli</Anchor>
          <Image />
          <Anchor href="http://www.github.com/holdenmad">Holden Madagame</Anchor>
        </Box>

        <Heading level="3">Links</Heading>
        <Box pad="small">
          <Anchor href="http://www.colourlex.com">ColourLex</Anchor>
          <Anchor href="http://www.github.com/holdenmad/colors">
            Colorful Github Repo
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
