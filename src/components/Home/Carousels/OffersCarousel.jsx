import { Box } from "@mui/material";
import offer1 from "../../../assets/offers-carousel-image1.svg";
import offer2 from "../../../assets/offers-carousel-image2.svg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const OffersCarousel = () => {
    const offerImages = [offer2, offer1, offer2, offer1];

    return (
        <Box sx={{ mx: 10, mt: 45 }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={70}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {offerImages.map((image, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={image} alt="image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default OffersCarousel;
