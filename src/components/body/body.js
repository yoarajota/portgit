import { Box, Heading, Text, Image, Icon, useMediaQuery, Grid, GridItem, useMediaQuerry, Divider, Link } from "@chakra-ui/react"
import HeaderPc from "./headerpc"
import yi2 from "../../images/yi2.png"
import yi1 from "../../images/yi1.png"

const Body = () => {

    const [isLargerThan1012] = useMediaQuery('(min-width: 1012px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [isLargerThan544] = useMediaQuery('(min-width: 544px)')


    return (
        <Grid m='0 auto' maxW='1280px' p='0 32px' justifyContent='center' templateColumns='repeat(4, 1fr)'>
            <GridItem maxW='296px'>
                {isLargerThan768 ? <HeaderPc /> : ''}
            </GridItem>
            <GridItem maxWidth='896px' p='24px' colSpan={isLargerThan768 ? '3' : '4'}>
                <Box border='1px solid rgba(255, 255, 255, 0.4)' p='24px'>
                    <Box display='flex' justifyContent='space-between'>
                        <Box>
                            <Text>yoarajota / REAME.md</Text>
                        </Box>
                        <Box>
                            <Icon fill='color.light' viewBox="-2 -1 20 18" boxSize={5}>
                                <path d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path>
                            </Icon>
                        </Box>
                    </Box>
                    <Box>
                        <Heading align="center" fontSize='23.8px' color='rgba(255, 255, 255, 0.8)'>yoarajota</Heading>
                        <Divider p='8.6px 0 0 0' m='0 0 16px 0' />
                        <Box align="center">
                            <Image src={yi2} width="200px" />
                        </Box>
                        <Divider p='0 0 6.3px 0' m='0 0 16px 0'/>
                        <Box align="center">
                            <Link href="https://last.fm/user/yoarajota" target="_blank"><Image src="https://image.flaticon.com/icons/png/512/143/143664.png" width="40px" /></Link>
                        </Box>

                        <Divider  p='0 0 6.3px 0' m='24px 0 16px 0'/>
                        <Divider  p='0 0 6.3px 0' m='24px 0 16px 0' />
                        <Box align="right">
                            <Image src={yi1} width="130px" />
                            <Box display='flex' justifyContent='right'>
                                <Text color='rgba(255, 255, 255, 0.8)'>currently learning 👉</Text>
                                <Text color='rgba(255, 255, 255, 0.8)'>html, css, javascript, flutter, dart, react - js </Text>
                            </Box>
                        </Box>
                        <Text align="right" color='rgba(255, 255, 255, 0.8)'>university; -//-, 0% </Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Body;