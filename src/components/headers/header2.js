import { Box, Icon, Input, Image, Text } from '@chakra-ui/react';
import Pfp from '../../images/pfp.png';


const Header2 = () => {

    return (
        <Box h='64px' w='100%' bg='color.dark2' position='relative' alignItems='center' p='16px 24px'>
            <Box display='flex' alignItems='center'>
                <Box m='0 15px 0 0' _hover={{opacity: '0.8'}}>
                    <Icon viewBox="-2 -1 20 18" boxSize={10}>
                        <path fill='#f0f6fc' d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </Icon>
                </Box>
                <Box>
                    <Box display='flex' w='272px' alignItems='center' border='1px solid rgba(255, 255, 255, 0.3)' borderRadius='7px' bg='color.dark' backgroundClip='padding-box'>
                        <Input border='none' h='28px' fontSize='0.9rem' borderColor='none' color='color.light' fontWeight='600' fontSize='14px' placeholder='Search or jump to...' />
                        <Icon viewBox="0 -1.5 24 24" boxSize={7} >
                            <path fill="none" stroke="#979A9C" opacity=".7" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path>
                            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
                        </Icon>
                    </Box>
                </Box>
                <Box>
                    <Box m='0 0 0 15px' display='flex'>
                        <Box marginRight='16px' _hover={{opacity: '0.8'}}>
                            <Text color='color.light' fontSize='14px' fontWeight='600' >
                                Pull requests
                            </Text>
                        </Box>
                        <Box marginRight='16px' _hover={{opacity: '0.8'}}>
                            <Text color='color.light' fontSize='14px' fontWeight='600' >
                                Issues
                            </Text>
                        </Box>
                        <Box marginRight='16px' _hover={{opacity: '0.8'}}>
                            <Text color='color.light' fontSize='14px' fontWeight='600' >
                                Marketplace
                            </Text>
                        </Box>
                        <Box marginRight='16px' _hover={{opacity: '0.8'}}>
                            <Text color='color.light' fontSize='14px' fontWeight='600'>
                                Explore
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' position='absolute' right='40px' alignItems='center'>
                    <Box m='0 10px 0 0' _hover={{opacity: '0.8'}}>
                        <Icon viewBox="-2 -1 20 18" boxSize={5}>
                            <path fill='#f0f6fc' d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
                            <path fill='#f0f6fc' d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
                        </Icon>
                    </Box>
                    <Box m='0 10px 0 0' _hover={{opacity: '0.8'}}>
                    <Icon fill='#f0f6fc' viewBox='-4 -4 24 24' boxSize='6'>
                        <path d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
                    </Icon>
                </Box>
                <Box display='flex' position='relative' _hover={{opacity: '0.8'}}>
                    <Image bg='#2c3139' src={Pfp} borderRadius='full' w='20px' h='20px'>
                    </Image>
                    <Box bg='lightblue' border='2px solid #161b22' w='12px' h='12px' position='initial' top='-5px' left='13px' borderRadius='full' position='absolute'></Box>
                </Box>
            </Box>
        </Box>

        </Box >
    )
}

export default Header2;