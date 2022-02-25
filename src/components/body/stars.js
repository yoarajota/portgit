import { Box, Divider, Heading, Icon, Text, Input, useMediaQuery, Link } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'


const Stars = () => {

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <Box>
            <Box>
                <Text fontSize='1.25rem' color='color.light2' fontWeight='100' m='16px 0'>Links</Text>
                <Box border='1px solid white' borderColor='color.border' borderRadius='5px'>
                    <Link _focus={{ boxShadow: 'none' }} href='https://github.com/yoarajota' target='_blank' _hover={{textDecoration: 'none'}}>
                        <Box _hover={{backgroundColor:'color.dark2'}} p='16px' display='flex' justifyContent='space-between' borderBottom='1px solid white' borderColor='color.border'>
                            <Heading fontSize='1rem' color='color.light2'>GitHub</Heading>
                            <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </Box>
                    </Link>
                    <Link _focus={{ boxShadow: 'none' }} href='https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-sberse-1b5a4021b/' target='_blank' _hover={{textDecoration: 'none'}}>
                        <Box _hover={{backgroundColor:'color.dark2'}} p='16px' display='flex' justifyContent='space-between'>
                            <Heading fontSize='1rem' color='color.light2'>Linkedin</Heading>
                            <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Text fontSize='1.25rem' color='color.light2' fontWeight='100' m='16px 0 0 0'>Stars</Text>
            <Box p='8px 0' display={isLargerThan768 ? 'flex' : 'block'}>
                <Input placeholder='About me' color='color.light2' p='5px 12px' borderColor='color.border' fontSize='0.8rem' h='32px' m='2px 16px 2px 0' _focus={{ boxShadow: 'none' }} />
                <Box display='flex' m='auto 0'>
                    <Box m='0 4px 0 0'>
                        <Box _hover={{ cursor: 'pointer', backgroundColor: 'color.border', borderColor: 'color.gray' }} display='flex' p='5px 16px' bg='color.dark2' borderRadius='5px' border='1px solid white' fontSize='0.85rem' fontWeight='700' borderColor='color.border'>
                            <Text color='color.light2'>Type
                            </Text>
                            <ChevronDownIcon m='4px 0 0 4px' color='color.gray' />
                        </Box>
                    </Box>
                    <Box m='0 4px 0 0'>
                        <Box _hover={{ cursor: 'pointer', backgroundColor: 'color.border', borderColor: 'color.gray' }} display='flex' p='5px 16px' bg='color.dark2' borderRadius='5px' border='1px solid white' fontSize='0.85rem' fontWeight='700' borderColor='color.border'>
                            <Text color='color.light2'>Language
                            </Text>
                            <ChevronDownIcon m='4px 0 0 4px' color='color.gray' />
                        </Box>
                    </Box>
                    <Box m='0 4px 0 0' >
                        <Box _hover={{ cursor: 'pointer', backgroundColor: 'color.border', borderColor: 'color.gray' }} display='flex' p='5px 16px' bg='color.dark2' borderRadius='5px' border='1px solid white' fontSize='0.85rem' fontWeight='700' borderColor='color.border'>
                            <Text color='color.light2'>Sort
                            </Text>
                            <ChevronDownIcon m='4px 0 0 4px' color='color.gray' />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Divider borderColor='color.border' p='8.6px 0 0 0' m='0 0 16px 0' />
                <Box p='12px 0' display='flex' justifyContent='space-between'>
                    <Box>
                        <Heading fontWeight='500' color='#58a6ff' fontSize='1.25rem'> Languages </Heading>
                        <Text color='color.gray' fontSize='0.875rem' >  Portuguese - Native</Text>
                        <Text color='color.gray' fontSize='0.875rem' m='0 0 8px'>  English - Advanced</Text>
                        <Box display='flex' alignItems='center'>
                            <Box bg='green' w='12px' h='12px' borderRadius='full' m='4px'></Box>
                            <Text color='color.gray' fontSize='0.75rem'>-//-</Text>
                        </Box>
                    </Box>
                    <Box _hover={{ cursor: 'pointer', backgroundColor: 'color.border', borderColor: 'color.gray' }} m='auto 0' display='flex' w='110px' bg='color.dark2' h='28px' justifyContent='center' borderRadius='5px' border='1px solid white' borderColor='color.border' >
                        <Icon fill='gray' viewBox="0 -6 24 20" boxSize={5}>
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                            </path>
                        </Icon>
                        <Text m='auto 0' fontWeight='600' fontSize='0.75rem' color='color.gray'>
                            Star
                        </Text>
                    </Box>
                </Box>
                <Divider borderColor='color.border' p='8.6px 0 0 0' m='0 0 16px 0' />
                <Box p='12px 0' display='flex' justifyContent='space-between'>
                    <Box>
                        <Heading fontWeight='500' color='#58a6ff' fontSize='1.25rem'> Others courses </Heading>
                        <Text color='color.gray' fontSize='0.875rem' m='0 0 8px'>  Kit Office 1 and 2, digital technologies, Sagres foundation </Text>
                        <Box display='flex' alignItems='center'>
                            <Box bg='purple' w='12px' h='12px' borderRadius='full' m='4px'></Box>
                            <Text color='color.gray' fontSize='0.75rem'>2020 - 2021</Text>
                        </Box>
                    </Box>
                    <Box _hover={{ cursor: 'pointer', backgroundColor: 'color.border', borderColor: 'color.gray' }} m='auto 0' display='flex' w='110px' bg='color.dark2' h='28px' justifyContent='center' borderRadius='5px' border='1px solid white' borderColor='color.border' >
                        <Icon fill='gray' viewBox="0 -6 24 20" boxSize={5}>
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                            </path>
                        </Icon>
                        <Text m='auto 0' fontWeight='600' fontSize='0.75rem' color='color.gray'>
                            Star
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Stars; 