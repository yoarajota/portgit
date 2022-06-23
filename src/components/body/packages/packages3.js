
import { Box, Heading, Icon, Text, Grid, GridItem, useMediaQuery, Image } from '@chakra-ui/react'
import Css from '../../../images/icons/css.png'
import Html from '../../../images/icons/html.png'
import React from '../../../images/icons/react.png'
import Js from '../../../images/icons/js.png'
import Laravel from '../../../images/icons/laravel.png'

const Packages3 = () => {

    return (
        <Box w='100%'>
            <Grid w='100%' templateColumns='repeat(1, 1fr)' gap={2.5}>
                <GridItem m='0 0 24px 0' p='16px 24px 24px' border='1px solid' borderColor='color.border' borderRadius='6px'>
                    <Box maxW='226px'>
                        <Box display='flex' >
                            <Image m='auto 5px' w='20px' h='20px' src={Html}    ></Image>
                            <Text color='color.light' fontWeight='600' fontSize='1.25rem'> HTML </Text>
                        </Box>
                        <Text fontSize='0.75rem' color='#8b949e'> Defines the meaning and structure of web content. ... HTML uses "markup" to annotate text, images, and other content for display in a Web browser. </Text>

                    </Box>
                </GridItem>
                <GridItem m='0 0 24px 0' p='16px 24px 24px' border='1px solid' borderColor='color.border' borderRadius='6px'>
                    <Box maxW='226px'>
                        <Box display='flex' >
                            <Image m='auto 5px' w='20px' h='20px' src={Css}    ></Image>
                            <Text color='color.light2' fontWeight='600' fontSize='1.25rem'> CSS </Text>
                        </Box>
                        <Text fontSize='0.75rem' color='#8b949e'>  The language used to style an HTML document. CSS describes how HTML elements should be displayed  </Text>
                    </Box>
                </GridItem>
                <GridItem m='0 0 24px 0' p='16px 24px 24px' border='1px solid' borderColor='color.border' borderRadius='6px'>
                    <Box maxW='226px'>
                        <Box display='flex' >
                            <Image m='auto 5px' w='20px' h='20px' src={Js}    ></Image>
                            <Text color='color.light' fontWeight='600' fontSize='1.25rem'> JS </Text>
                        </Box>
                        <Text fontSize='0.75rem' color='#8b949e'> Language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. </Text>

                    </Box>
                </GridItem>
                <GridItem m='0 0 24px 0' p='16px 24px 24px' border='1px solid' borderColor='color.border' borderRadius='6px'>
                    <Box maxW='226px'>
                        <Box display='flex' >
                            <Image m='auto 5px' w='20px' h='20px' src={React}    ></Image>
                            <Text color='color.light' fontWeight='600' fontSize='1.25rem'> REACT </Text>
                        </Box>
                        <Text fontSize='0.75rem' color='#8b949e'> Is a JavaScript library for building user interfaces based on UI components. </Text>
                    </Box>
                </GridItem>
                <GridItem m='0 0 24px 0' p='16px 24px 24px' border='1px solid' borderColor='color.border' borderRadius='6px'>
                    <Box maxW='226px'>
                        <Box display='flex' >
                            <Image m='auto 5px' w='20px' h='20px' src={Laravel}    ></Image>
                            <Text color='color.light' fontWeight='600' fontSize='1.25rem'> LARAVEL </Text>
                        </Box>
                        <Text fontSize='0.75rem' color='#8b949e'> Laravel is a free, open-source PHP web framework, intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. </Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )

}

export default Packages3;