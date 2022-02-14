import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    
    colors: {
        color: {
            'light': '#f0f6fc',
            'dark': '#0d1117',
            'dark2': '#161b22',
        }
    },
    fonts: {
        body: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    styles: {
        global: {
            body: {
                bg: '#161b22',
            }
        },
    }
});