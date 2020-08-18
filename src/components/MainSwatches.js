import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import {
  Box,
  Main,
  Grid,
  Anchor,
  ResponsiveContext,
} from "grommet";

const MainSwatches = ({ colors }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box>
      <Main justify="center" pad="xlarge">
        <Grid
          justify="center"
          columns={size !== "small" ? "small" : "small"}
          rows="small"
          border="black"
        >


          {Object.entries(colors).map((color, index) => (

            <Anchor href={`/color-${index}`} a11yTitle={color[1].colorName}>
              <Box
                hoverIndicator
                round="small"
                elevation="medium"
                border={{ size: "small" }}
                background={color[1].hexcode}
                pad="small"
                key={index}
                width="xsmall"
                height="xsmall"
                a11yTitle={color[1].colorName}
              />

            </Anchor>
          ))}
        </Grid>
      </Main>
    </Box>
  );
};

export default MainSwatches;
