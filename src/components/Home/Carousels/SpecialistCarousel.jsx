import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// image imports
import khan from "../../../assets/specialist-khan.svg";
import sachdeva from "../../../assets/specialist-sachdeva.svg";
import sharma from "../../../assets/specialist-sharma.svg";

const SpecialistCarousel = () => {
    const doctors = [khan, sachdeva, sharma, khan, sachdeva, sharma];

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: "primary.darkBlueText",
                        fontWeight: "bold",
                        my: 10,
                    }}
                >
                    Our Medical Specialist
                </Typography>
            </Box>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {doctors.map((doctor, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={doctor}></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default SpecialistCarousel;
