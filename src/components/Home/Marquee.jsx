import { Box } from "@mui/material";

const Marquee = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                color: "white",
                textAlign: "center",
                p: 1,
            }}
        >
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
        </Box>
    );
};

export default Marquee;
