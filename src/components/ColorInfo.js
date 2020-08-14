import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Image, Heading, Box, Grid } from "grommet";

function ColorInfo({ colors }) {
  let { id } = useParams();
  let colorId = Number(id);
  let color = colors[colorId];
  // console.log(color.sections.map(c => c.title))

  // let colorDeets = colors.filter((colorInd) => {
  //     return colorInd[0] === colorId;
  // }).map((colorInd)=> {
  //     return colorInd;
  // });

  // const bahhh = {color.sections.forEach(function(obj) {
  //   return obj[0]
  // })}

  // bahhh

  return (
    <Box alignSelf="center" margin="medium" background="orange">
      {/* {color.map((colorInd) => ( */}
        <Grid
          margin="medium"
          alignSelf="center"
          justifyContent="center"
          rows={["xsmall", "xsmall", "xsmall", "xsmall", "xsmall"]}
          columns={["small", "small", "medium"]}
          gap="small"
          areas={[
            { name: "heading", start: [0, 0], end: [2, 0] },
            { name: "description", start: [0, 1], end: [2, 1] },
            { name: "info", start: [0, 2], end: [0, 2] },
            { name: "languages", start: [1, 2], end: [1, 2] },
            { name: "images", start: [2, 2], end: [2, 3] },
            { name: "history", start: [0, 3], end: [1, 3] },
            { name: "quotes", start: [0, 4], end: [2, 4] },
          ]}
        >
          <Box pad="medium" gridArea="heading" size="large" align="center">
            <Heading pad="medium">{color.colorName}</Heading>
          </Box>
          
          {/* map sections with title and texts */}

          {/* //How to map the sections if we want */}
          {/* {color.sections.map(section => <div>{section.title}</div>)} */}
          {/* <Box align="center">{color.sections[0].texts}</Box> */}
          
          <Box pad="small" gridArea="description" background="light-5" align="center">
                        <h2>{color.sections[0].title}</h2><br></br>{color.sections[0].texts}</Box>
                    {/* <Box pad="small" gridArea="info" background="light-5" >Info: Hex/RGB{color.hex}{colors.rgb}</Box> */}
                    {/* <Box pad="small" gridArea="languages" background="light-5" >
                        <ul>Languages
                            <li>German: {color.languages.german}</li>
                            <li>Spanish: {color.languages.spanish}</li>
                            </ul></Box> */}
                            
                    <Box pad="small" gridArea="history" background="light-5" >History{color.history}</Box>

                    <Box pad="small" gridArea="images" background="light-5" ><Box height="small" width="medium" overflow="hidden">
                        <Carousel fill>
                            <Image fit="cover" src={color.sections[3].picUrls[0]} />
                            <Image fit="cover" src={color.sections[3].picUrls[1]}/>
                            <Image fit="cover" src={color.sections[3].picUrls[2]}/>
                        </Carousel>
                    </Box></Box>
                    <Box pad="small" gridArea="quotes" background="light-2" align="center" ><h2>Quote</h2>"<p className="italic">{color.quotes[0].quotes.map(quote=>quote)}"</p></Box>
        </Grid>
      {/* ))} */}
    </Box>
  );
}

export default ColorInfo;
