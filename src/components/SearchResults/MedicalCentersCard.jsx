import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";

// image import
import card_image from "../../assets/card-image.svg";
import card_text from "../../assets/card-p-text.svg";

const MedicalCentersCard = () => {
    return (
        <Box>
            <Card
                sx={{
                    width: 1200,
                    display: "flex",
                    height: 400,
                    borderRadius: "15px",
                    boxShadow: "none",
                }}
            >
                <CardMedia
                    component="img"
                    image={card_image}
                    alt="hospital image"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
                <CardMedia
                    component="img"
                    image={card_text}
                    alt="hospital image"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
                <CardContent sx={{ width: "100%" }}>
                    <Typography
                        variant="body2"
                        sx={{ color: "primary.cardText" }}
                    >
                        Available Today
                    </Typography>
                    <CardActions>
                        <Button variant="contained">
                            Book FREE Center Visit
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MedicalCentersCard;
