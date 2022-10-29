import {
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Stack,
  Disclosure,
  DisclosureHeading,
  DisclosureContent
} from '@twilio-paste/core'

interface SidePanelProps {
  description?: string
}

export const SidePanel = (props: SidePanelProps ) => {
  return (

    <Box as='nav' maxWidth='size30' height='100%' display='flex' backgroundColor="colorBackground" padding="space70" borderRadius="borderRadius20">
    <Stack orientation={'vertical'} spacing={'space10'}>
      <Disclosure>
        <DisclosureHeading as="h3" variant="heading50">
          <Text as="span">Disclosure Heading</Text>
        </DisclosureHeading>
        <DisclosureContent>
          <UnorderedList>
            <ListItem>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </ListItem>
            <ListItem>Item 2</ListItem>
          </UnorderedList>
        </DisclosureContent>
      </Disclosure>
      <Disclosure>
        <DisclosureHeading as="h3" variant="heading50">
          <Text as="span">Disclosure Heading</Text>
        </DisclosureHeading>
        <DisclosureContent>
          <UnorderedList>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
          </UnorderedList>
        </DisclosureContent>
      </Disclosure>

    </Stack>
    </Box>
  )
}