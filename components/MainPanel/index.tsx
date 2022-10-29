import {
  Flex,
  Box,
  Text
} from '@twilio-paste/core'

interface MainPanelProps {
  description?: string
}

export const MainPanel = (props: MainPanelProps ) => {
  return (
    <Box padding={'space70'}>
      <h1> Hello World </h1>
    </Box>
  )
}