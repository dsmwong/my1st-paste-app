import Head from 'next/head';

import {
  Anchor, 
  Heading, 
  Box, 
  Paragraph, 
  ListItem, 
  UnorderedList, 
  Separator, 
  Button,
  Grid,
  Column,
  Flex
} from '@twilio-paste/core';

import { Header, SidePanel } from '../components';
import type {NextPage} from 'next';
import { MainPanel } from '../components/MainPanel';
import {styled} from '@twilio-paste/styling-library';

import * as Tokens from '@twilio-paste/core/design-tokens';
import { useEffect } from 'react';
//import type {GenericTokensShape} from '@twilio-paste/design-tokens/types/GenericTokensShape';
import { getDataFromAPI } from '../api/simpleAPI';

const PAGE_FULL_HEIGHT = '100vh';
const HEADER_HEIGHT = Tokens.size10;

const FullHeightComponent = styled(Box)(() => ({
  height: `calc(${PAGE_FULL_HEIGHT} - ${HEADER_HEIGHT})`,
  width: '100%',
  WebkitOverflowScrolling: 'touch',
}));

const Home: NextPage = () => {

  useEffect(() => {

    // two ways to deal with async calls in useEffect 
    (async function a() {
      const data = await getDataFromAPI()
      console.log(JSON.stringify(data, null, 2)) 
    })();

    // option 2
    getDataFromAPI().then(data => {
      console.log(JSON.stringify(data, null, 2))
    });

  }, []);

  return (
    <Box as="main" 
    // borderColor={'colorBorderDark'} 
    // borderWidth='borderWidth40' 
    // borderStyle={'solid'} 
    height={PAGE_FULL_HEIGHT}>
      <Head>
        <title>Paste NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="My Example Project" team="Twilio SE ANZ"/>

      <Flex>
          <Flex>
            <FullHeightComponent>
              <Box as='nav'
                overflow={'auto'}
                height={'100%'}
                backgroundColor="colorBackgroundPrimaryWeak"
                // paddingBottom={['space70', 'space70', 'space0']}
                // paddingTop={['space50', 'space50', 'space70']}
                // paddingX={'space20'}
                padding={'space20'}
                
                //height={'size80'}
              >
                <SidePanel />
              </Box>
            </FullHeightComponent>
          </Flex>
          <Flex grow>
            <FullHeightComponent>
            <Box
              backgroundColor="colorBackgroundPrimaryWeaker"
              padding="space40"
              height={'100%'}
              //height={'size80'}
            >
              <MainPanel />
            </Box>
            </FullHeightComponent>
          </Flex>
      </Flex>      

      {/* <Box padding="space70">
        <Heading as="h1" variant="heading10">
          Welcome to the the Paste Next.JS App!
        </Heading>

        <Button variant="primary">
          ✊ Action
        </Button>

        <Paragraph>
          Everything you need to get started using Paste in a Production app. Start by editing{' '}
          <code>pages/index.tsx</code>
        </Paragraph>
        <Separator orientation="horizontal" verticalSpacing="space120" />

        <Heading as="h2" variant="heading20">
          Useful links
        </Heading>

        <UnorderedList>
          <ListItem>
            <Heading as="h3" variant="heading30">
              <Anchor href="https://paste.twilio.design" showExternal>
                Paste Documentation
              </Anchor>
            </Heading>
            <Paragraph>
              Start here. Find in-depth information about using the Paste Design System to build your Next app.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Heading as="h3" variant="heading30">
              <Anchor href="https://nextjs.org/docs" showExternal>
                NextJS Documentation
              </Anchor>
            </Heading>
            <Paragraph>Find in-depth information about Next.js features and API.</Paragraph>
          </ListItem>
          <ListItem>
            <Heading as="h3" variant="heading30">
              <Anchor href="https://vercel.com/import?filter=next.js" showExternal>
                Deploy
              </Anchor>
            </Heading>
            <Paragraph>Instantly deploy your Next.js site to a public URL with Vercel.</Paragraph>
          </ListItem>
        </UnorderedList>
      </Box> */}
    </Box>
  );
};

export default Home;
