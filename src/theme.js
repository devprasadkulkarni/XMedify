import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2AA7FF",
            light: "#f3f6fb",
            darkBlueText: "#1B3C74",
            cardText: "#00A500",
        },
    },

    shadows: ["none", "0 4px 12px rgba(0, 0, 0, 0.1)"],

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
