import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

// image imports
import blogNews_img from "../../assets/blognews-card-image.svg";
import blogNews_photo from "../../assets/blognews-card-photo.svg";

const BlogNews = () => {
    const cards = Array(3).fill(null);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                my: 10,
            }}
        >
            <Box>
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                    Blog & News
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h3"
                    sx={{ color: "#1B3C74", fontWeight: "bold" }}
                >
                    Read Our Latest News
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    width: "60%",
                    gap: 4,
                }}
            >
                {cards.map((_, idx) => (
                    <Card key={idx} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={blogNews_img}
                                alt="blog & news image"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{ color: "gray" }}
                                >
                                    Medical | March 31, 2022
                                </Typography>
                                <Typography variant="body1">
                                    6 Tips To Protect Your Mental Health <br />
                                    When You’re Sick
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                    }}
                                >
                                    <img
                                        src={blogNews_photo}
                                        alt="blog news photo"
                                    />
                                    <Typography variant="body1">
                                        Rebecca Lee
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default BlogNews;
