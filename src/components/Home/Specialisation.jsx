import { Box, Button, Typography } from "@mui/material";

// image imports
import blood_test from "../../assets/specialisation-blood-test.svg";
import cardiology from "../../assets/specialisation-cardiology.svg";
import dentistry from "../../assets/specialisation-dentistry.svg";
import laboratory from "../../assets/specialisation-laboratory.svg";
import mri_resonance from "../../assets/specialisation-mri-resonance.svg";
import piscologist from "../../assets/specialisation-piscologist.svg";
import primary_care from "../../assets/specialisation-primary-care.svg";
import x_ray from "../../assets/specialisation-x-ray.svg";

const Specialisation = () => {
    const specialisations = [
        {
            image: blood_test,
            text: "Blood Test",
        },
        {
            image: cardiology,
            text: "Cardiology",
        },
        {
            image: dentistry,
            text: "Dentistry",
        },
        {
            image: laboratory,
            text: "Laboratory",
        },
        {
            image: mri_resonance,
            text: "MRI Resonance",
        },
        {
            image: piscologist,
            text: "Piscologist",
        },
        {
            image: primary_care,
            text: "Primary Care",
        },
        {
            image: x_ray,
            text: "X-Ray",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 30,
                py: 10,
                backgroundColor: "#e8f1ff",
                gap: 4,
            }}
        >
            <Typography
                variant="h3"
                sx={{ color: "#1B3C74", fontWeight: "bold" }}
            >
                Find by specialisation
            </Typography>
            <Box>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 4,
                        width: "100%",
                        py: 4,
                    }}
                >
                    {specialisations.map((item, idx) => (
                        <Button
                            key={idx}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                height: 190,
                                width: 320,
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Box>
                                <img src={item.image} alt={`${item}`} />
                                <Typography sx={{ pt: 3, color: "gray" }}>
                                    {item.text}
                                </Typography>
                            </Box>
                        </Button>
                    ))}
                </Box>
            </Box>
            <Box>
                <Button variant="contained">View All</Button>
            </Box>
        </Box>
    );
};

export default Specialisation;
