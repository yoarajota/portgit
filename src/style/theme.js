import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
    colors: {
        color: {
            'light': '#f0f6fc'
        }
    },
    fonts: {
        heading: 'Montserrat, sans-serif',
        body: 'Montserrat, sans-serif',
    },
    styles: {
        global: {
            body: {
                bg: '#161b22',
            }
        },
    }
});