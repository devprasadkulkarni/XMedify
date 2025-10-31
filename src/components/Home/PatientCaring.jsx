import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// image imports
import check_tick from "../../assets/check-tick.svg";
import free_consultation from "../../assets/free-consultation.svg";
import patient_caring_1 from "../../assets/patient-caring-1.svg";
import patient_caring_2 from "../../assets/patient-caring-2.svg";

const patientCaringPoints = [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments",
];

const PatientCaring = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#e8f1ff",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                height: "70vh",
            }}
        >
            <Box>
                <Box sx={{ position: "absolute" }}>
                    <Box
                        sx={{
                            bgcolor: "white",
                            width: 280,
                            borderRadius: 2,
                            p: 1.5,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            position: "relative",
                            top: 170,
                            left: 270,
                            zIndex: 10,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <img
                                src={free_consultation}
                                alt="free consultation"
                            />
                            <Typography
                                variant="h6"
                                sx={{ color: "#1B3C74", fontWeight: "bold" }}
                            >
                                Free Consultation
                            </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ color: "gray" }}>
                            Consultation with the best
                        </Typography>
                    </Box>
                    <Box sx={{ position: "relative", top: -10, right: -500 }}>
                        <img
                            src={patient_caring_1}
                            alt="patient caring photo 1"
                        />
                    </Box>
                    <Box sx={{ position: "relative", top: -80, right: -390 }}>
                        <img
                            src={patient_caring_2}
                            alt="patient caring photo 2"
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                    HELPING PATIENTS FROM AROUND THE GLOBE!!
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography
                        variant="h2"
                        sx={{ color: "#1B3C74", fontWeight: "bold" }}
                    >
                        Patient
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                        Caring
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ color: "gray", my: 4 }}>
                        Our goal is to deliver quality of care in a courteous,
                        respectful, and
                        <br /> compassionate manner. We hope you will allow us
                        to care for you and
                        <br /> strive to be the first and best choice for
                        healthcare.
                    </Typography>
                </Box>
                <Box>
                    {patientCaringPoints.map((point, idx) => (
                        <Box
                            key={idx}
                            sx={{ display: "flex", gap: 3, py: 2.5 }}
                        >
                            <img src={check_tick} alt="check mark" />
                            <Typography variant="h6" sx={{ color: "#1B3C74" }}>
                                {point}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default PatientCaring;
