
import { Box, Heading, Icon, Text, useMediaQuery } from '@chakra-ui/react'
import Css from '../../../images/icons/css.png'
import Packages2 from './packages2'
import Packages3 from './packages3'

const Packages = () => {

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <Box w='100%'>
            <Box align='center'>
                <Icon>  </Icon>
                <Heading fontSize='2rem' m='0 0 8px' color='color.light2'>  Get started with GitHub Packages </Heading>
                <Text m='0 0 40px' color='color.gray'> Safely publish packages, store your packages alongside your code, and share your packages privately with your team. </Text>
                <Heading m='0 0 10px' fontWeight='400' p='8px 0' color='color.gray' fontSize='1.255rem'> Technologies </Heading>
            </Box>
            {isLargerThan768 ? <Packages2 /> : <Packages3 />}
        </Box>
    )

}

export default Packages;