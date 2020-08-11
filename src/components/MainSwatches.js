import React, { useContext } from "react";
import {
  Box,
  Main,
  Anchor,
  Grid,
  ResponsiveContext,
} from "grommet";

// const colors = ["indigo", "yellow", "teal", "chartreuse", "maroon", "coral", "indigo", "yellow", "teal", "chartreuse", "maroon", "coral"];

// const colorObject = {
//   key: "value",
// };
// const listColorsBoxes = colors.map((colorName) => (
//   <Box
//     elevation="medium"
//     key={colorName}
//     background={colorName}
//     justify="center"
//     align="center"
//   >
//     <Heading level={2}>{colorName}</Heading>
//   </Box>
// ));
// const changeOpacity = () => {

// }

const MainSwatches = ({colors}) => {
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
            <Anchor href="/color:cn">
              <Box
                // onClick={changeOpacity}
                hoverIndicator
                round="small"
                elevation="medium"
                border={{ size: "small" }}
                background={color.colorName}
                pad="small"
                key={index}
                width="xsmall"
                height="xsmall"
              >
                {/* {color} */}
                {console.log(color)}
              </Box>
            </Anchor>
          ))}
        </Grid>
      </Main>
    </Box>
  );
};

export default MainSwatches;
