import React, {useContext} from 'react'
import {Box, Heading, Main, Anchor, Text, Card, Grid, ResponsiveContext} from 'grommet'

const colors = [
    'indigo',
    'yellow', 
    'teal',
    'chartreuse',
    'maroon',
    'coral'
  ];

const listColorsBoxes = colors.map(colorName => (
    <Box
        elevation="medium"
        key={colorName}
        background={colorName}
        justify="center"
        align="center"
    >
      <Heading level={2}>{colorName}</Heading>
    </Box>
  ));
  

const MainSwatches = () => {
      const size = useContext(ResponsiveContext);
    return (
        <Box alignContent="center">
          <Main justify="center" pad="small">
            <Grid justify="center" columns={size !== 'small' ? 'small' : 'small'} gap="small">
            {colors.map((color, index) => (
              <Anchor href="/color:id"><Box hoverIndicator round="small" elevation="medium" border={{"size": "small"}} background={color} pad="small" key={index} width="xsmall" height="xsmall">
    
    
              </Box></Anchor>
            ))}
          </Grid>
         </Main>
        </Box>
    )
}

export default MainSwatches
