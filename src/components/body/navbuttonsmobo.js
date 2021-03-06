import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { useScreen } from "../../hooks/useScreen";
import Default from "./default";
import Packages from "./packages/packages";
import Repositories from "./repositories";
import Stars from "./stars";

const Navbuttonsmobo = () => {

    const { setScreen } = useScreen();

    return (
        <Box w='100%' m='20px auto 0 auto' display='flex' justifyContent='space-around'>
                <Box _hover={{ cursor: 'pointer', }} onClick={() => setScreen(<Default />)} variant='link' _focus={{ boxShadow: 'none' }}>
                    <Box display='flex' p='8px 16px' h='48px' borderBottom='2px solid transparent' _hover={{ borderColor: 'gray.700' }}>
                        <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                            <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                        </Icon>
                        <Text fontWeight='500' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Overview</Text>
                    </Box>
                </Box>
                <Box _hover={{ cursor: 'pointer', }} onClick={() => setScreen(<Packages />)} variant='link' _focus={{ boxShadow: 'none' }}>
                    <Box display='flex' p='8px 16px' h='48px' borderBottom='2px solid transparent' _hover={{ borderColor: 'gray.700' }}>
                        <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </Icon>
                        <Text fontWeight='500' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Technologies</Text>
                    </Box>
                </Box>
                <Box _hover={{ cursor: 'pointer', }} onClick={() => setScreen(<Repositories />)} variant='link' _focus={{ boxShadow: 'none' }}>
                    <Box display='flex' p='8px 16px' h='48px' borderBottom='2px solid transparent' _hover={{ borderColor: 'gray.700' }}>
                        <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                            <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                        </Icon>
                        <Text fontWeight='500' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Experience</Text>
                    </Box>
                </Box >
                <Box _hover={{ cursor: 'pointer', }} onClick={() => setScreen(<Stars />)} variant='link' _focus={{ boxShadow: 'none' }}>
                    <Box display='flex' p='8px 16px' h='48px' borderBottom='2px solid transparent' _hover={{ borderColor: 'gray.700' }}>
                        <Icon viewBox="-2 -1 20 18" boxSize={5} fill='color.light' m='0 4px 0 0'>
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </Icon>
                        <Text fontWeight='500' fontSize='0.9rem' color='rgba(255, 255, 255, 0.8)'>Others</Text>
                    </Box>
                </Box >
        </Box>

    )
}

export default Navbuttonsmobo;