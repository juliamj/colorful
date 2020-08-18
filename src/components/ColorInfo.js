import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Image, Heading, Box, Grid } from "grommet";

function ColorInfo({ colors }) {
  let { id } = useParams();
  let colorId = Number(id);
  let color = colors[colorId];
  // console.log(color.sections.map(c => c.title))

  return (
    <Box
      a11yTitle="Color Info Page"
      alignSelf="center"
      margin="medium"
      background={color.hexcode}
    >
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
          <Heading className="heading" pad="medium">
            {color.colorName}
          </Heading>
        </Box>

        <Box
          pad="small"
          margin="small"
          elevation="small"
          gridArea="description"
          background="light-2"
          align="center"
          a11yTitle={color.sections[0].title}
        >
          <h2>{color.sections[0].title}</h2>
          <p>{color.sections[0].texts}</p>
          <p>{color.sections[0].links}</p>
        </Box>

        <Box
          pad="small"
          margin="small"
          elevation="small"
          gridArea="names"
          background="light-2"
          align="center"
          a11yTitle={color.sections[1].title}
        >
          <h2>{color.sections[1].title}</h2>
          <p>{color.sections[1].texts}</p>
          <p>{color.sections[1].links}</p>
        </Box>

        <Box
          pad="small"
          margin="small"
          elevation="small"
          gridArea="preparation"
          background="light-2"
          align="center"
          a11yTitle={color.sections[2].title}
        >
          <h2>{color.sections[2].title}</h2>
          <p>{color.sections[2].texts}</p>
          <p>{color.sections[2].links}</p>
        </Box>

        <Box
          pad="small"
          margin="small"
          elevation="small"
          gridArea="history"
          background="light-2"
          align="center"
          a11yTitle={color.sections[3].title}>
          <h2>{color.sections[3].title}</h2>
          <p>{color.sections[3].texts}</p>
          <p>{color.sections[3].links}</p>
        </Box>

        {/* // && if this AND this is true */}
        {!!color.quotes.length && (
          <Box
            pad="small"
            margin="small"
            elevation="small"
            gridArea="quotes"
            background="light-2"
            align="center"
            a11yTitle="Quote Section"
          >
            <h2>Quote</h2>
            {color.quotes.map((quote) => {
              return (
                <>
                  <p>{quote.quotes[0]}</p>
                  <p>Source: {quote.source}</p>
                </>
              );
            })}
          </Box>
        )}

        {/* {!!color.sections.filter(section => section.picUrls.length).length &&  */}

        <Box
          a11yTitle="Pictures of Color"
          pad="small"
          margin="small"
          gridArea="images"
          align="center"
        >
          <Box
            a11yTitle="Pictures of Color"
            height="fit"
            width="fit"
            overflow="hidden"
          >
            <Carousel a11yTitle="Picture Carousel" fill play="3000">

              {color.sections.map((section) => {
                return section.picUrls.map((image) => {
                  return (
                    <Image
                      a11yTitle="Various pictures of color pigment, preparation, chemical composition, use in classical and modern paintings, timeline of color use, and basic swatches of color."
                      fit="cover"
                      src={image}
                    />
                  );
                });
              })}
            </Carousel>
          </Box>
        </Box>
        {/* } */}
      </Grid>
    </Box>
  );
}

export default ColorInfo;
