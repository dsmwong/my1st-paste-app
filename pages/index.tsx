import Head from 'next/head';

import {
  Anchor, 
  Heading, 
  Box, 
  Paragraph, 
  ListItem, 
  UnorderedList, 
  Separator, 
  Button
} from '@twilio-paste/core';

import { Header } from '../components';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Head>
        <title>Paste NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="My Example Project" team="Twilio SE ANZ"/>


      <Box padding="space70">
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
      </Box>
    </Box>
  );
};

export default Home;
