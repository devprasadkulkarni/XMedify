import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Box, Rating } from "@mui/material";

// image imports
import card_image from "../../assets/card-image.svg";

const MedicalCentersCard = ({ item }) => {
    return (
        <Card
            sx={{
                display: "grid",
                gridTemplateColumns: "30% 40% 30%",
                borderRadius: "15px",
                boxShadow: "none",
                width: "49vw",
            }}
        >
            {/* Left section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CardMedia
                    component="img"
                    image={card_image}
                    alt="hospital image"
                    sx={{
                        width: "80%",
                        height: "80%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            {/* Middle section & hospital info */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "left",
                }}
            >
                <Typography sx={{ color: "primary.main" }}>
                    {item["Hospital Name"]}
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                    {item.City}, {item.State}
                </Typography>
                <Typography>{item["Hospital Type"]}</Typography>
                <Typography>more</Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                        sx={{ color: "primary.cardText", fontWeight: "bold" }}
                    >
                        FREE
                    </Typography>
                    <Typography>₹500 Consultation fee at clinic</Typography>
                </Box>
                <Box>
                    <Rating
                        name="half-rating-read"
                        defaultValue={item["Hospital overall rating"]}
                        precision={0.5}
                        readOnly
                    />
                </Box>
            </Box>

            {/* Right section */}
            <CardContent sx={{ pt: 10 }}>
                <Typography
                    variant="body2"
                    sx={{ color: "primary.cardText", ml: 1 }}
                >
                    Available Today
                </Typography>
                <CardActions>
                    <Button variant="contained">Book FREE Center Visit</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default MedicalCentersCard;
