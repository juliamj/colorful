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
        <Heading level="3" margin={{top:"medium"}}>Objective</Heading>

        <Box width="medium" pad="small">
          <Paragraph color="brand" textAlign="center">
            A project to experiment with web scraping, and to create a color
            picker with cultural information about various colors throughout history. 
          </Paragraph>
        </Box>

        <Heading level="3" margin={{top:"medium"}}>Tech and Tools</Heading>
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

        <Heading level="3" margin={{top:"medium"}}>Contributors</Heading>
        <Box pad="small" align="start">

          <Box direction="row" gap="xxsmall" justify="center" margin={{bottom:"small"}}>
            <Box height="xsmall" width="xsmall">
              <Image
                fit="cover"
                src="./profileimages/julia.jpg"
              />
            </Box>
            <Box pad="small">
              <Text size="medium" color="brand" weight="bold">Julia Jannsen</Text>
              <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                  a11yTitle="Check out my Github"
                  href="http://www.github.com/juliamj"
                  icon={<Github color="brand" size="small"/>}
                  target="_blank"          
                />
                <Anchor
                  a11yTitle="Check out my LinkedIn Profile"
                  href="https://www.linkedin.com/in/juliamj/"
                  icon={<Linkedin color="brand" size="small"/>}
                  target="_blank"
                />
              </Box>
            </Box>
          </Box>

          <Box direction="row" gap="xxsmall" justify="center" margin={{bottom:"small"}}>
            <Box height="xsmall" width="xsmall">
              <Image
                fit="cover"
                src="./profileimages/.jpg"
              />
            </Box>
            <Box pad="small">
              <Text size="medium" color="brand" weight="bold">Markus Seeli</Text>
              <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                  a11yTitle="Check out my Github"
                  href="http://www.github.com/jbello88"
                  icon={<Github color="brand" size="small"/>}
                  target="_blank"          
                />
                <Anchor
                  a11yTitle="Check out my LinkedIn Profile"
                  href=""
                  icon={<Linkedin color="brand" size="small"/>}
                  target="_blank"
                />
              </Box>
            </Box>
          </Box>

          <Box direction="row" gap="xxsmall" justify="center" margin={{bottom:"small"}}>
            <Box height="xsmall" width="xsmall">
              <Image
                fit="cover"
                src="./profileimages/holden.jpg"
              />
            </Box>
            <Box pad="small">
              <Text size="medium" color="brand" weight="bold">Holden Madagame</Text>
              <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                  a11yTitle="Check out my Github"
                  href="http://www.github.com/holdenmad"
                  icon={<Github color="brand" size="small"/>}
                  target="_blank"          
                />
                <Anchor
                  a11yTitle="Check out my LinkedIn Profile"
                  href="https://www.linkedin.com/in/holdenmad/"
                  icon={<Linkedin color="brand" size="small"/>}
                  target="_blank"
                />
              </Box>
            </Box>
          </Box>

        </Box>

        <Heading level="3" margin={{top:"medium"}}>Links</Heading>
        <Box pad="small" align="center">
          <Anchor size="medium" href="http://www.colourlex.com" target="_blank">ColourLex</Anchor>
          <Anchor size="medium" href="http://www.github.com/holdenmad/colors" target="_blank">
            Colorful Github Repo (Frontend)
          </Anchor>
          <Anchor size="medium" href="https://github.com/jbello88/scraper" target="_blank">
            Colorful Github Repo (Backend)
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
