import React from 'react';
// import { storiesOf } from '@storybook/react';

import {
    Paint as GrommetIcon,
    FacebookOption,
    Instagram,
    Github,
} from 'grommet-icons';

import { Anchor, Box, Footer, Main, Text } from 'grommet';

function Media() {
    return (
    <div>
        <Box direction="row" gap="xxsmall" justify="center">
            <Anchor
                a11yTitle="Share feedback on Github"
                href="https://www.instagram.com/"
                icon={<Instagram color="orange" />}
                target="_blank"
            />
            <Anchor
                a11yTitle="Chat with us on Slack"
                href="https://www.facebook.com/"
                icon={<FacebookOption color="blue" />}
                target="_blank"
            />
            <Anchor
                a11yTitle="Check out our Respository on Github"
                href="https://github.com/holdenmad/colors"
                icon={<Github color="green" />}
                target="_blank"
            />
        </Box>
    </div>
    );
}


function Footer1() {
    return (
        <Footer className="footer" background="light-4" pad="medium" justify="between">
            <Box align="center" direction="row" gap="xsmall">
                <GrommetIcon color="brand" size="medium" />
                <Text alignSelf="center" color="brand" size="small">
                    Colorful
        </Text>
            </Box>
            <Media />
            <Text textAlign="center" size="xsmall">
                ©Copyright
      </Text>
        </Footer>
    );
}


export default Footer1;