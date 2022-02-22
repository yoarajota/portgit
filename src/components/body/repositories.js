import { Box, Divider, Heading, Icon, Text } from "@chakra-ui/react"


const Repositories = () => {
    return (
        <Box>
            <Divider borderColor='light2' p='8.6px 0 0 0' m='0 0 16px 0' />
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    <Heading fontWeight='500' color='#58a6ff' fontSize='1.25rem'> Embrapa </Heading>
                    <Text color='color.gray' fontSize='0.875rem' m='0 0 8px'>  Setor de Compras - SPS</Text>
                    <Box display='flex' alignItems='center'>
                        <Box bg='yellow' w='12px' h='12px' borderRadius='full' m='4px'></Box>
                        <Text color='color.gray' fontSize='0.75rem'>Jan 2020 - Dec 2021</Text>
                    </Box>
                </Box>
                <Box m='auto 0' display='flex' w='110px' bg='color.dark2' h='28px' justifyContent='center' borderRadius='5px' border='1px solid white' borderColor='color.gray' >
                    <Icon fill='gray' viewBox="0 -3 24 20" boxSize={6}>
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                        </path>
                    </Icon>
                    <Text color='color.gray'>
                        Star
                    </Text>
                </Box>
            </Box>
            <Divider borderColor='light2' p='8.6px 0 0 0' m='0 0 16px 0' />
        </Box>
    )
}

export default Repositories; 