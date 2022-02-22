import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    
    colors: {
        color: {
            'light': '#f0f6fc',
            'light2': '#c9d1d9',
            'dark': '#0d1117',
            'dark2': '#161b22',
            'gray': '#8b949e',
            'border': '#30363d',
        }
    },
    fonts: {
        body: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    styles: {
        global: {
            body: {
                bg: '#0d1117',
            }
        },
    }
});