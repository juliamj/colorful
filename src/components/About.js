import React from "react";
import { Paint as GrommetIcon } from "grommet-icons";
import { Heading, Box, Paragraph, Anchor, Image } from "grommet";

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
          <Paragraph>
            A project to experiment with web scraping, and to create a color
            picker with cultural information about various colors throughout history. 
          </Paragraph>
        </Box>

        <Heading level="3">Tech and Tools</Heading>
        <Box width="large" pad="small" align="center">
          <Anchor size="medium" href="https://reactjs.org/" target="_blank">
            React
          </Anchor>
          <Anchor size="medium" href="https://v2.grommet.io/" target="_blank">
            Grommet
          </Anchor>
          <Anchor
            size="medium"
            href="https://www.npmjs.com/package/puppeteer"
            target="_blank"
          >
            Puppeteer
          </Anchor>
          <Anchor size="medium" href="https://github.com/jbello88/scraper">
            Scraper (Markus Seeli)
          </Anchor>
        </Box>

        <Heading level="3">Contributors</Heading>
        <Box width="large" pad="small" align="center">
          <Image />
          <Anchor
            size="medium"
            href="http://www.github.com/juliamj"
            target="_blank"
          >
            Julia Jannsen
          </Anchor>
          <Image />
          <Anchor
            size="medium"
            href="http://www.github.com/jbello88"
            target="_blank"
          >
            Markus Seeli
          </Anchor>
          <Image />
          <Anchor
            size="medium"
            href="http://www.github.com/holdenmad"
            target="_blank"
          >
            Holden Madagame
          </Anchor>
        </Box>

        <Heading level="3">Links</Heading>
        <Box width="large" pad="small" align="center">
          <Anchor size="medium" href="http://www.colourlex.com" target="_blank">
            ColourLex
          </Anchor>
          <Anchor
            size="medium"
            href="http://www.github.com/holdenmad/colors"
            target="_blank"
          >
            Colorful Github Repo
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
