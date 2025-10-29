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

const SpecialistCarousel = () => {
    const doctors = [
        {
            image: khan,
            name: "Dr. Ahmad Khan",
            speciality: "Neurologist",
        },
        {
            image: sachdeva,
            name: "Dr. Ahmad Khan",
            speciality: "Neurologist",
        },
        {
            image: sharma,
            name: "Dr. Ahmad Khan",
            speciality: "Neurologist",
        },
        {
            image: stevens,
            name: "Dr. Ahmad Khan",
            speciality: "Neurologist",
        },
        {
            image: hull,
            name: "Dr. Ahmad Khan",
            speciality: "Neurologist",
        },
    ];

    return (
        <Box>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <Box>
                    {doctors.map((doctor, idx) => (
                        <Box key={idx}>
                            <Box>
                                <SwiperSlide>
                                    <Box
                                        component="img"
                                        height="600px"
                                        width="400px"
                                    />
                                    <Typography>{doctor.name}</Typography>
                                    <Typography>{doctor.speciality}</Typography>
                                </SwiperSlide>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Swiper>
        </Box>
    );
};

export default SpecialistCarousel;
