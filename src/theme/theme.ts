import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: '#7B61FF' },
        secondary: { main: '#6C63FF' },
        background: { default: '#FAF8FF' },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 700 },
        h4: { fontWeight: 700 },
        h5: { fontWeight: 700 },
        h6: { fontWeight: 700 },
    },
    shape: {
        borderRadius: 16,
    }
})

export default theme;