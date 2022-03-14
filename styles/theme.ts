import { extendTheme } from '@chakra-ui/react'



export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#484848",
        },
        orange: {
            "300": "#EF7D05",
            "900": "#AD5D17",
        },
        blue: {
            "300": "#125f9e",
            "900": "#003366",
        }
    },
    fonts: {
        heading: "Open Sans, sans-serif",
        body: "Raleway, sans-serif"


    },
    styles: {
        
        global: {
            
            '::-webkit-scrollbar': {
                width: '10px',
                position: 'relative',
                backgroundColor: `#1c1d1f`,
            },
            '&::-webkit-scrollbar-thumb': {
                position: 'relative',
                borderRadius: '1px',
                backgroundColor: `white`,
            },
            html: {
                width: '100%',
                padding: '0px',
                overflowx: 'hidden',

            },
            body: {
                bg: 'transparent',
                color: 'gray.900',
                width: '100%',
                padding: '0px',
                overflowx: 'hidden',
                margin: '0px'
            },
            h1: {
                fontSize: '5rem'

            }
        }
    }
})