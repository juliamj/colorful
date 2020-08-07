import React, {useContext} from 'react'
import {Box, Heading, Text, Card, Grid, ResponsiveContext} from 'grommet'

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
        <Box>
        <Box pad="small">
        <Grid columns={size !== 'small' ? 'small' : 'small'} gap="small">
          {colors.map((color, index) => (
            <Box background={color} pad="small" key={index} width="xsmall" height="xsmall">
              {color}
            </Box>
          ))}
        </Grid>
      </Box>
        </Box>
    )
}

export default MainSwatches
