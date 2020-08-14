import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Image, Heading, Box, Grid } from "grommet";

function ColorInfo({ colors }) {
  let { id } = useParams();
  let colorId = Number(id);
  let color = colors[colorId];

  // let colorDeets = colors.filter((colorInd) => {
  //     return colorInd[0] === colorId;
  // }).map((colorInd)=> {
  //     return colorInd;
  // });

  return (
    <Box alignSelf="center" margin="medium" background="orange">
      {/* {color.map((colorInd) => ( */}
      <Grid
        margin="medium"
        alignSelf="center"
        justifyContent="center"
        rows={["fill", "fill", "fill", "fill", "fill", "fill", "fill"]}
        columns={["fill"]}
        gap="small"
        areas={[
          { name: "heading", start: [0, 0], end: [0, 0] },
          { name: "description", start: [0, 1], end: [0, 1] },
          { name: "names", start: [0, 2], end: [0, 2] },
          { name: "preparation", start: [0, 3], end: [0, 3] },
          { name: "history", start: [0, 4], end: [0, 4] },
          { name: "quotes", start: [0, 5], end: [0, 5] },
          { name: "images", start: [0, 6], end: [0, 6] },
        ]}
      >

        {/* map sections with title and texts */}
        <Box pad="small" gridArea="heading" size="large" align="center">
          <Heading pad="medium">{color.colorName}</Heading>
        </Box>

        <Box pad="small" gridArea="description" background="light-5" align="center">
          <h2>{color.sections[0].title}</h2>
          <p>{color.sections[0].texts}</p>
          <p>{color.sections[0].links}</p>
        </Box>

        <Box pad="small" gridArea="names" background="light-5" align="center">
          <h2>{color.sections[1].title}</h2>
          <p>{color.sections[1].texts}</p>
          <p>{color.sections[1].links}</p>
        </Box>

        <Box pad="small" gridArea="preparation" background="light-5" align="center">
          <h2>{color.sections[2].title}</h2>
          <p>{color.sections[2].texts}</p>
          <p>{color.sections[2].links}</p>
        </Box>

        <Box pad="small" gridArea="history" background="light-5" align="center">
          <h2>{color.sections[3].title}</h2>
          <p>{color.sections[3].texts}</p>
          <p>{color.sections[3].links}</p>
        </Box>

        <Box pad="small" gridArea="quotes" background="light-2" align="center" >
          <h2>Quote</h2>
          <p className="italic">"{color.quotes[0].quotes}"</p>
          <p >Source: {color.quotes[0].source}</p>
        </Box>

        <Box pad="small" gridArea="images" background="light-5" ><Box height="small" width="medium" overflow="hidden">
          <Carousel fill>
            <Image fit="cover" src={color.sections[1].picUrls[0]} />
            <Image fit="cover" src={color.sections[1].picUrls[1]} />
            <Image fit="cover" src={color.sections[1].picUrls[2]} />
          </Carousel>
        </Box></Box>
      </Grid >

    </Box >
  );
}


export default ColorInfo;
