import { Box } from "@mui/material";

// image imports
import download_app from "../../assets/download-app.svg";

const DownloadApp = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.light",
                display: "flex",
                justifyContent: "center",
                pt: 10,
            }}
        >
            <img src={download_app} alt="download app" />
        </Box>
    );
};

export default DownloadApp;
