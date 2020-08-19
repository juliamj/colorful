import React from "react";
import { Paint as GrommetIcon } from "grommet-icons";

import {
  Heading,
  Box,
  Paragraph,
  Anchor,
  Image,
  Text,
} from "grommet";
import {
  Linkedin,
  Github,
} from 'grommet-icons';


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

        <Box pad="small">
          <Box direction="row" gap="xxsmall" justify="center">
            <Box height="xsmall" width="xsmall">
              <Image
                fit="cover"
                src="/images/julia.jpg"
              />
            </Box>
            <Box pad="small">
              <Text size="medium" color="brand">Julia Jannsen</Text>
              <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                  a11yTitle="Check out my Github"
                  href="http://www.github.com/juliamj"
                  icon={<Github color="brand" />}
                  target="_blank"
                  size="xsmall"
                />
                <Anchor
                  a11yTitle="Check out my LinkedIn Profile"
                  href="https://www.linkedin.com/in/juliamj/"
                  icon={<Linkedin color="brand" />}
                  target="_blank"
                  size="large"
                />
              </Box>
            </Box>
          </Box>

          <Box direction="row" gap="xxsmall" justify="center">
            <Box height="xsmall" width="xsmall">
              <Image
                fit="cover"
                src="/images/markus.jpg"
              />
            </Box>
            <Box pad="small">
              <Text size="medium" color="brand">Markus Seeli</Text>
              <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                  a11yTitle="Check out my Github"
                  href="http://www.github.com/jbello88"
                  icon={<Github color="brand" />}
                  target="_blank"
                  size="xsmall"
                />
                <Anchor
                  a11yTitle="Check out my LinkedIn Profile"
                  href=""
                  icon={<Linkedin color="brand" />}
                  target="_blank"
                  size="large"
                />
              </Box>
            </Box>
          </Box>

          <Box direction="row" gap="xxsmall" justify="center">
            <Box height="xsmall" width="xsmall">
              <Image
                fit="cover"
                src="/images/holden.jpg"
              />
            </Box>
            <Box pad="small">
              <Text size="medium" color="brand">Holden Madagame</Text>
              <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                  a11yTitle="Check out my Github"
                  href="http://www.github.com/holdenmad"
                  icon={<Github color="brand" />}
                  target="_blank"
                  size="xsmall"
                />
                <Anchor
                  a11yTitle="Check out my LinkedIn Profile"
                  href="https://www.linkedin.com/in/holdenmad/"
                  icon={<Linkedin color="brand" />}
                  target="_blank"
                  size="large"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Heading level="3">Links</Heading>
        <Box pad="small">
          <Anchor href="http://www.colourlex.com" target="_blank">ColourLex</Anchor>
          <Anchor href="http://www.github.com/holdenmad/colors" target="_blank">
            Colorful Github Repo (Frontend)
          </Anchor>
          <Anchor href="https://github.com/jbello88/scraper" target="_blank">
            Colorful Github Repo (Backend)
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
