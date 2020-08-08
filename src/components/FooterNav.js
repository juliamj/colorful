import React from 'react'
import {Footer, Anchor, Box, Text} from 'grommet'

const FooterNav = () => {
    return (
            <Footer className="footer" as="footer" background="accent-4" pad="medium">
                <Box alignContent="around" align="center" direction="row" gap="xsmall">
                    <Text weight="bold">Colors!</Text>
                </Box>

                    <Anchor>Github </Anchor> |
                    <Anchor>Resources </Anchor> |
                    <Anchor>About </Anchor>
                <Text textAlign="center" size="xsmall">
                    ©Copyright 2020
                </Text>
            </Footer>
    )
}

export default FooterNav


