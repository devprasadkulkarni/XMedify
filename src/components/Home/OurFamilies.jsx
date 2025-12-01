import { Box, Typography } from "@mui/material";

// image imports
import families_img from "../../assets/families-image.svg";

const OurFamilies = () => {
    return (
        <Box sx={{ backgroundColor: "#e8f1ff", py: 1 }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    my: 10,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 4,
                        pl: 45,
                    }}
                >
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                        CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ color: "#1B3C74", fontWeight: "bold" }}
                    >
                        Our Families
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "gray", lineHeight: 3 }}
                    >
                        We will work with you to develop individualised care
                        plans, <br /> including management of chronic diseases.
                        If we cannot assist, <br /> we can provide referrals or
                        advice about the type of practitioner <br /> you
                        require. We treat all enquiries sensitively and in the
                        strictest <br /> confidence.
                    </Typography>
                </Box>
                <Box>
                    <img src={families_img} alt="families image" />
                </Box>
            </Box>
        </Box>
    );
};

export default OurFamilies;
