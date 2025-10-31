import {
    Autocomplete,
    Box,
    Button,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

// image imports
import heroImage from "../../assets/hero_image.svg";
import ambulance from "../../assets/search_ambulance.svg";
import doctors from "../../assets/search_doctors.svg";
import hospitals from "../../assets/search_hospitals.svg";
import labs from "../../assets/search_labs.svg";
import medicalStore from "../../assets/search_medical_store.svg";
import titik from "../../assets/titik_titik.svg";

const API_BASE = "https://meddata-backend.onrender.com";

const HeroSection = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selected, setSelected] = useState("Hospitals");

    const fetchData = async (endPoint, setter) => {
        try {
            const { data } = await axios.get(`${API_BASE}/${endPoint}`);
            setter(data);
        } catch (err) {
            console.error(`Error fetching ${endPoint}: `, err);
        }
    };

    useEffect(() => {
        fetchData("states", setStates);
    }, []);

    useEffect(() => {
        if (selectedState) {
            fetchData(`cities/${selectedState}`, setCities);
        }
    }, [selectedState]);

    const searchItems = [
        { image: doctors, text: "Doctors" },
        { image: labs, text: "Labs" },
        { image: hospitals, text: "Hospitals" },
        { image: medicalStore, text: "Medical Store" },
        { image: ambulance, text: "Ambulance" },
    ];

    return (
        <Box sx={{ position: "relative" }}>
            {/* Hero grid */}
            <Grid
                container
                sx={{
                    backgroundColor: "#e8f1ff",
                    px: 40,
                    pt: 10,
                }}
            >
                {/* Left section */}
                <Grid size={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            pt: 4,
                        }}
                    >
                        <Typography variant="h3">
                            Skip the travel! Find Online
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Typography variant="h1" sx={{ fontWeight: 700 }}>
                                Medical
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{ color: "primary.main", fontWeight: 700 }}
                            >
                                Centers
                            </Typography>
                        </Box>

                        <Typography variant="h5" sx={{ color: "gray" }}>
                            Connect instantly with a 24x7 specialist or choose
                            to
                            <br />
                            video visit a particular doctor.
                        </Typography>
                        <Box>
                            <Button variant="contained">Find Centers</Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Right section */}
                <Grid size={6}>
                    <img src={heroImage} alt="hero image" />
                    <Box
                        sx={{
                            position: "absolute",
                            top: 297,
                            right: 370,
                        }}
                    >
                        <img src={titik} alt="titik" />
                    </Box>
                </Grid>
            </Grid>

            {/* Hospitals search for selected state and city */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    borderRadius: "10px",
                    position: "absolute",
                    top: "115%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    py: 5,
                }}
            >
                {/* State and city selector */}
                <Box
                    sx={{
                        display: "flex",
                        px: 30,
                        justifyContent: "space-between",
                        gap: 20,
                    }}
                >
                    {/* State selector */}
                    <Autocomplete
                        id="state"
                        options={states}
                        value={selectedState}
                        onChange={(e, newValue) => {
                            setSelectedState(newValue);
                            setSelectedCity(null);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="State" />
                        )}
                        sx={{ width: 300 }}
                    ></Autocomplete>
                    {/* City selector */}
                    <Autocomplete
                        id="city"
                        options={cities}
                        value={selectedCity}
                        onChange={(e, newValue) => setSelectedCity(newValue)}
                        renderInput={(params) => (
                            <TextField {...params} label="City" />
                        )}
                        sx={{ width: 300 }}
                    ></Autocomplete>
                    <Button variant="contained" disabled={!selectedCity}>
                        <SearchIcon /> Search
                    </Button>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                        You maybe looking for
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: 2,
                            width: "100%",
                            px: 30,
                            pt: 4,
                        }}
                    >
                        {searchItems.map((item) => {
                            const isSelected = selected === item.text;
                            return (
                                <Button
                                    key={item.text}
                                    variant={isSelected ? "outlined" : "text"}
                                    onClick={() => setSelected(item.text)}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 150,
                                        width: 150,
                                        borderRadius: 2,
                                        textTransform: "none",
                                        gap: 1,
                                        backgroundColor: isSelected
                                            ? "#eef8ff"
                                            : "",
                                    }}
                                >
                                    <Box>
                                        <img
                                            src={item.image}
                                            alt="search items"
                                        />
                                        <Typography sx={{ color: "gray" }}>
                                            {item.text}
                                        </Typography>
                                    </Box>
                                </Button>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
