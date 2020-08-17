import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import {
  Box,
  Main,
  Grid,
  ResponsiveContext,
} from "grommet";


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
    <Box>
      <Main justify="center" pad="xlarge">
        <Grid
          justify="center"
          columns={size !== "small" ? "small" : "small"}
          rows="small"

          border="black"
        >    
        

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
