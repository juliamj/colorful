import React from 'react';
import {
    Carousel,
    Image,
    Heading,
    Box,
    Grid,
} from "grommet";

function ColorInfo() {
    return (

        <Box aligSelf="center"  margin="medium" background="orange">
            <Grid margin="medium"
                aligSelf="center" justifyContent="center"
                rows={['xsmall', 'xsmall', 'xsmall', 'xsmall', 'xsmall']}
                
                columns={['small', 'small', 'medium']}
                gap="small"
                areas={[
                    { name: 'heading', start: [0, 0], end: [2, 0] },
                    { name: 'description', start: [0, 1], end: [2, 1] },
                    { name: 'info', start: [0, 2], end: [0, 2] },
                    { name: 'languages', start: [1, 2], end: [1, 2] },
                    { name: 'images', start: [2, 2], end: [2, 3] },
                    { name: 'history', start: [0, 3], end: [1, 3] },
                    { name: 'quotes', start: [0, 4], end: [2, 4] },
                ]}

            >
                <Box pad="medium" gridArea="heading" size="large" align="center"><Heading pad="medium" > Colorname</Heading></Box>
                <Box pad="small" gridArea="description" background="light-5" align="center">Description</Box>
                <Box pad="small" gridArea="info" background="light-5" >Info: Hex/RGB</Box>
                <Box pad="small" gridArea="languages" background="light-5" >Languages</Box>
                <Box pad="small" gridArea="history" background="light-5" >History</Box>
                <Box pad="small" gridArea="images" background="light-5" ><Box height="small" width="medium" overflow="hidden">
                    <Carousel fill>
                        <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                    </Carousel>
                </Box></Box>
                <Box pad="small" gridArea="quotes" background="light-2" align="center">Quotes</Box>
            </Grid>
        </Box>

    );
}

export default ColorInfo;
