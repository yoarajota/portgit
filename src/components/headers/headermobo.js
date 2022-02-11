import { Box, Heading, Text, Image, Icon, useMediaQuery } from "@chakra-ui/react"
import Pfp from '../../images/pfp.png'

const Headermobo = () => {

    const [isLargerThan543] = useMediaQuery('(min-width: 543px)')


    return (
        <Box p='0 16px' m='0 auto'>
            <Box display='flex' h='auto' alignItems='center' m='0px 0px 24px 0px'>
                <Box w='20%' maxW='120px' verticalAlign='center' position='relative' >
                    <Image src={Pfp} borderRadius='full' w='90%' maxW='119px' border='1px solid rgba(255, 255, 255, 0.3)' />
                </Box>
                <Box p='16px 0'>
                    <Heading color='rgba(255, 255, 255, 0.7)' fontSize='1.65rem' fontWeight='500'>
                        João Vítor Sberse
                    </Heading>
                    <Text color='color.light' opacity='.6' fontSize='1.2rem' letterSpacing='1px' fontWeight='thin'>
                        yoarajota
                    </Text>
                </Box>
            </Box>
            <Box display='flex' alignItems='center'  m='8px auto 0 auto' p='4px 8px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='5px'>
                <Box w='30px'>
                    <g-emoji alias="white_circle" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26aa.png">⚪</g-emoji>
                </Box>
                <Box>
                    <Text color='rgba(255, 255, 255, 0.8)' fontWeight='100' fontSize='0.8rem'>4:13</Text>
                </Box>
            </Box>
            <Box m='7px 0 20px 0'>
                <Text m='0 0 15px 0' color='rgba(255, 255, 255, 0.8)'>4:13</Text>
                <Box display='flex' justifyContent='center' alignItems='center' bg='#1f242b' p='5px 16px' border='1px solid rgba(255, 255, 255, 0.2)' borderRadius='5px'>
                    <Text color='rgba(255, 255, 255, 0.8)' S fontWeight='600' fontSize='0.8rem'>Edit Profile</Text>
                </Box>
            </Box>
            <Box display='flex' alignItems='center' >
                <Box display='flex' alignItems='self-end'>
                    <Icon className='beBlue1' viewBox="-4 -5 24 24" fill='rgba(255, 255, 255, 0.6)' boxSize={6}>
                        <path d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                    </Icon>
                    <Text m='0 3px 0 0' fontSize='1rem' fontWeight='500' color='rgba(255, 255, 255, 0.8)'>0</Text>
                    <Text fontWeight='300' fontSize='0.9rem' color='rgba(255, 255, 255, 0.4)'>followers</Text>
                </Box>
                <Text m='0 4px' fontSize='12px' color='white'>•</Text>
                <Box display='flex' alignItems='self-end'>
                    <Text m='0 3px 0 0' fontSize='1rem' fontWeight='500' color='rgba(255, 255, 255, 0.8)'>1</Text>
                    <Text fontWeight='300' fontSize='0.9rem' color='rgba(255, 255, 255, 0.4)'>following</Text>
                </Box>
            </Box>
        </Box >
    )
}

export default Headermobo;