import React from 'react';
import {Paint as GrommetIcon} from 'grommet-icons';
import {Heading, Box, Paragraph, Accordion, AccordionPanel, Anchor, Text, Image} from 'grommet'

function About() {
    return (
        <Box align="center" className="contentWrap">
        <Heading level="1">About <GrommetIcon color="brand" size="large" />Colorful</Heading>

        <Accordion width="medium">
            <AccordionPanel message={''} pad="medium" label="Description">
                    <Box pad="medium" background="light-2">
                        <Paragraph>We wanted to play with colors. Weeeeeeee!</Paragraph>
                    </Box>
            </AccordionPanel>
            <AccordionPanel message={''} pad="medium" label="Technologies">
                <Box pad="medium" background="light-2">
                    <Text>React</Text>
                    <Text>Grommet</Text>
                    <Text>Puppeteer</Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel message={'Contributors: Julia, Markus, Holden'} pad="medium" label="Contributors">
                <Box pad="medium" background="light-2">
                    <Image/><Text>Julia</Text>
                    <Image/><Text>Markus</Text>
                    <Image/><Text>Holden</Text>
                </Box>
            </AccordionPanel>
            </Accordion>
            <Anchor>Github Repo</Anchor>

        </Box>
    );
}

export default About;