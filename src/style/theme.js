import { extendTheme, useMediaQuery } from '@chakra-ui/react';

export const theme = extendTheme({
    


    colors: {
        color: {
            'light': '#f0f6fc',
            'dark': '#0d1117',
            'dark2': '#161b22',
        }
    },
    fonts: {

    },
    styles: {
        global: {
            body: {
                bg: '#161b22',
            }
        },
    }
});