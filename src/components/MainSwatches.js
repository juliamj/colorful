import React, { useContext } from "react";
import {Link} from 'react-router-dom'
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

// let {cn} = useParams();
//     cn = colorName.split(' ').join('-')  
//     cn = cn.split('’').join('-') 

//     let colorDeets = colors.filter((colorInd) => {
//         return colorInd.colorName === cn;
//     }).map((colorInd)=> {
//         return colorInd;
//     });

const MainSwatches = ({colors}) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box className="mainSwatches">
      <Main justify="center" pad="xlarge">
        <Grid
          justify="center"
          columns={size !== "small" ? "small" : "small"}
          rows="small"

          border="black"
        >
        {/* localhost:3000/Tyrian-Purple */}
    

          {Object.entries(colors).map((color, index) => (
              
            <Link to={`/${index}`}> 
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
                {/* {console.log(color)} */}
              </Box>
            </Link>
          ))}
        </Grid>
      </Main>
    </Box>
  );
};

export default MainSwatches;
