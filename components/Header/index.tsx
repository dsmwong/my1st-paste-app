import { Box, Grid, Column, MediaObject, MediaFigure, Text, MediaBody, /*Flex, Tooltip, Anchor*/ } from "@twilio-paste/core";

// import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
// using cjs instead of esm because of this issue:
// https://twilio.slack.com/archives/C01MMP3QD8D/p1613024144073300?thread_ts=1613021880.069800&cid=C01MMP3QD8D
import { LogoTwilioIcon } from "@twilio-paste/icons/cjs/LogoTwilioIcon";


//import {InformationIcon} from "@twilio-paste/icons/esm/InformationIcon";

interface HeaderProps {
  title: string;
  team?: string;
}

// export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
export const Header = (props: HeaderProps) => {

  const titleText = props.title ? props.title : 'Generic Project Name';
  const teamName = props.team ? props.team : 'Generic Team';

  return (
    <Box
    width="100%"
    height={"size10"}
    backgroundColor={"colorBackgroundBrandStrong"}
    color="colorTextInverse"
    padding={"space60"}
>
    <Grid gutter={"space50"}>
        <Column span={3}>
            <MediaObject verticalAlign="center">
                <MediaFigure spacing="space40">
                    <LogoTwilioIcon display="block" size={"sizeIcon90"} decorative={true}/>
                </MediaFigure>
                <MediaBody>
                    <Text as="h2" fontSize="fontSize60" lineHeight="lineHeight60">
                        <Text href="/" as="a" color="colorTextInverse" fontSize="inherit" lineHeight="inherit" textDecoration="none">{titleText}</Text>
                    </Text>
                    <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextWeak">
                        {teamName}
                    </Text>
                </MediaBody>
            </MediaObject>
        </Column>
        {/* <Column offset={5} span={2}>
            <Flex hAlignContent={"center"} vertical grow height="100%" vAlignContent={"center"} >
                <Text as="p" color={"colorTextInverse"}>{devPhoneName ? devPhoneName : "loading"}</Text>
                <Flex width={"100%"} hAlignContent={"center"}>
                    <Text as="p" marginRight={"space20"} color="colorTextInverse" fontWeight={"fontWeightSemibold"} variant="default">Dev Phone ID</Text>
                    <Tooltip text="This is the ID I made to create and use Twilio services for your Dev Phone.">
                        <Anchor href="javascript:void" variant="inverse">
                            <InformationIcon decorative={false} title="Show details about Dev Phone ID" display="block" />
                        </Anchor>
                    </Tooltip>
                </Flex>
            </Flex>
        </Column>
        <Column span={2}>
            <Flex hAlignContent={"center"} vertical grow height="100%" vAlignContent={"center"} >
                <Text as="p" color={"colorTextInverse"}> {numberInUse ? numberInUse : "N/A"}</Text>
                <Flex width={"100%"} hAlignContent={"center"}>
                    <Text as="p" marginRight={"space20"} color="colorTextInverse" fontWeight={"fontWeightSemibold"} variant="default">Twilio Number</Text>
                    <Tooltip text="Text or call this Twilio phone number to connect to your Dev Phone.">
                        <Anchor href="javascript:void" variant="inverse">
                            <InformationIcon decorative={false} title="Show details about Twilio Phone Number" display="block" />
                        </Anchor>
                    </Tooltip>
                </Flex>
            </Flex>
        </Column> */}
    </Grid>
</Box>

    // <Box
    //   backgroundColor={"colorBackgroundBrandStronger"}
    //   alignContent={"center"}
    //   verticalAlign={"middle"}
    //   padding={"space30"}
    //   marginBottom="space30"
    // >
    //   <Flex hAlignContent="center" vertical>
    //     <Flex>
    //       <h1 style={{ color: "white" }}>{props.title}</h1>
    //     </Flex>
    //   </Flex>
    // </Box>
  );
};