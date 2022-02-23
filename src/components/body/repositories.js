import { Box, Divider, Heading, Icon, Text, Input, useMediaQuery } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'


const Repositories = () => {

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <Box>
            <Box p='8px 0' display={isLargerThan768 ? 'flex' : 'block'}>
                <Input placeholder='Profissional Experience' color='color.light2' p='5px 12px' borderColor='color.border' fontSize='0.8rem' h='32px' m='2px 16px 2px 0' _focus={{ boxShadow: 'none' }}/>
                <Box display='flex' m='auto 0'>
                    <Box m='0 4px 0 0'>
                        <Box display='flex' p='5px 16px' bg='color.dark2' borderRadius='5px' border='1px solid white' fontSize='0.85rem' fontWeight='700' borderColor='color.border'>
                            <Text color='color.light2'>Type
                            </Text>
                            <ChevronDownIcon m='4px 0 0 4px' color='color.gray' />
                        </Box>
                    </Box>
                    <Box m='0 4px 0 0'>
                        <Box display='flex' p='5px 16px' bg='color.dark2' borderRadius='5px' border='1px solid white' fontSize='0.85rem' fontWeight='700' borderColor='color.border'>
                            <Text color='color.light2'>Language
                            </Text>
                            <ChevronDownIcon m='4px 0 0 4px' color='color.gray' />
                        </Box>
                    </Box>
                    <Box m='0 4px 0 0'>
                        <Box display='flex' p='5px 16px' bg='color.dark2' borderRadius='5px' border='1px solid white' fontSize='0.85rem' fontWeight='700' borderColor='color.border'>
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
                        <Heading fontWeight='500' color='#58a6ff' fontSize='1.25rem'> Embrapa </Heading>
                        <Text color='color.gray' fontSize='0.875rem' m='0 0 8px'>  Setor de Compras - SPS</Text>
                        <Box display='flex' alignItems='center'>
                            <Box bg='yellow' w='12px' h='12px' borderRadius='full' m='4px'></Box>
                            <Text color='color.gray' fontSize='0.75rem'>Jan 2020 - Dec 2021</Text>
                        </Box>
                    </Box>
                    <Box m='auto 0' display='flex' w='110px' bg='color.dark2' h='28px' justifyContent='center' borderRadius='5px' border='1px solid white' borderColor='color.border' >
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
            </Box>
        </Box>
    )
}

export default Repositories; 