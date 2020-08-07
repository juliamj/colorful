import React from 'react';
import { Header, Anchor, Box, Button, Menu } from 'grommet'


function Nav() {
    return (

        <Header background="light-4" pad="medium">
            <Box direction="row" gap="medium">
                <Anchor label="Home" href="/" />
                <Anchor label="About" href="/about" />
            </Box>
        </Header>
    );
}

export default Nav;