import { Box, Heading, Text, Image } from "@chakra-ui/react"
import Pfp from '../../images/pfp.png'

const Headermobo = () => {
    return (
        <Box display='flex' p='0 16px' h='auto' alignItems='center'>
            <Box w='20%' maxW='120px' verticalAlign='center' position='relative' >
                <Image src={Pfp} borderRadius='full' w='90%' maxW='119px' border='1px solid rgba(255, 255, 255, 0.3)' />
            </Box>
            <Box p='16px 0'>
                <Heading color='color.light' fontSize='1.65rem' fontWeight='500'>
                João Vítor Sberse
                </Heading>
                <Text color='color.light' opacity='.6' fontSize='1.2rem' letterSpacing='1px' fontWeight='thin'>
                    yoarajota
                </Text>
            </Box>
        </Box>
    )
}

export default Headermobo;