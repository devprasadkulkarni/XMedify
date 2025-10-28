import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box } from "@mui/material";
import offer1 from "../assets/offers-carousel-image1.svg";
import offer2 from "../assets/offers-carousel-image2.svg";

const OffersCarousel = () => {
    const offerImages = [
        offer2,
        offer1,
        offer2,
        offer1,
        offer2,
        offer1,
        offer2,
        offer1,
    ];

    const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
        Autoplay({ delay: 3000 }),
    ]);
    return (
        <Box
            ref={emblaRef}
            className="embla"
            sx={{ mt: 35, overflow: "hidden", width: "100%", px: 30 }}
        >
            <Box className="embla__container" sx={{ display: "flex", gap: 3 }}>
                {offerImages.map((image, idx) => (
                    <Box
                        key={idx}
                        className="embla__slide"
                        sx={{
                            flex: "0 0 25%", // 3 slides per view
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 300,
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt="offer images"
                            sx={{
                                borderRadius: "12px",
                                objectFit: "cover",
                            }}
                        ></Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default OffersCarousel;
