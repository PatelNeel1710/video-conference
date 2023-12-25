import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#800080'
        },
        secondary: {
            main: '#1E90FF'
        }
    },
    typography: {
        fontFamily: 'Roboto'
    },
    shape: {
        borderRadius: 0
    }
});