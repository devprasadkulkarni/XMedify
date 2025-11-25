import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2AA7FF",
            darkBlueText: "#1B3C74",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fafbfe",
                },
                contained: {
                    backgroundColor: "#2AA7FF",
                    color: "white",
                },
            },
        },
    },
});

export default theme;
