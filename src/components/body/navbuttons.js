import { Box, Button, Icon, Text } from "@chakra-ui/react";


const navbuttons = () => {



    return (
        <Box maxWidth='1280px' m='20px auto 0 auto' display='flex' bg='color.dark'>
            <Box w='30%'>
                a
            </Box>
            <Box p='0 16px' w='70%'>
                <Button h='48px' p='8px 16px' bg='none'>
                    <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                        <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                    </Icon>
                    <Text fontWeight='400' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Overview</Text>
                </Button>
                <Button h='48px' p='8px 16px' bg='none'>
                    <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                        <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </Icon>
                    <Text fontWeight='400' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Repositories</Text>
                </Button>
                <Button h='48px' p='8px 16px' bg='none'>
                    <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                        <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                    </Icon>
                    <Text fontWeight='400' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Projects</Text>
                </Button >
            </Box>
        </Box>
    )
}

export default navbuttons;