import { Box, Typography } from "@mui/material";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

// image import
import logo from "../../assets/logo.svg";

const Footer = () => {
    const footerLinks1 = [
        "About Us",
        "Our Pricing",
        "Our Gallery",
        "Appointment",
        "Privacy Policy",
    ];
    const footerLinks2 = [
        "Orthology",
        "Neurology",
        "Dental Care",
        "Opthalmology",
        "Cardiology",
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#1B3C74",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    px: 35,
                    pt: 10,
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    gap: 20,
                }}
            >
                {/* col 1 */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 13 }}>
                    <Box sx={{ fontSize: 15 }}>
                        <img src={logo} alt="logo" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            fontSize: 30,
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        <FaFacebook />
                        <FaTwitter />
                        <FaYoutube />
                        <FaPinterest />
                    </Box>
                </Box>

                {/* col 2 */}
                <Box
                    sx={{
                        color: "white",
                        gap: 2,
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                    }}
                >
                    {footerLinks1.map((link, i) => (
                        <Typography key={i}>{link}</Typography>
                    ))}
                </Box>

                {/* col 3 */}
                <Box
                    sx={{
                        color: "white",
                        gap: 2,
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                    }}
                >
                    {footerLinks2.map((link, i) => (
                        <Typography key={i}>{link}</Typography>
                    ))}
                </Box>

                {/* col 4 */}
                <Box
                    sx={{
                        color: "white",
                        gap: 2,
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                    }}
                >
                    {footerLinks1.map((link, i) => (
                        <Typography key={i}>{link}</Typography>
                    ))}
                </Box>
            </Box>
            <Box sx={{ pl: 35, py: 10 }}>
                <Typography sx={{ color: "white" }}>
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
