import { Autocomplete, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { useLocationStore } from "../../store/locationStore";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const navigate = useNavigate();

    const { selectedState, selectedCity, setSelectedState, setSelectedCity } =
        useLocationStore();

    const API_BASE = "https://meddata-backend.onrender.com";

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

    // search function

    function handleSearch() {
        if (!selectedState || !selectedCity) {
            return;
        }
        navigate(`/searchResults?state=${selectedState}&city=${selectedCity}`);
    }

    return (
        <Box
            sx={{
                display: "flex",
                px: 30,
                justifyContent: "space-between",
                gap: 20,
                backgroundColor: "white",
                py: 5,
                borderRadius: 3,
            }}
        >
            {/* State Selector */}
            <Autocomplete
                id="state"
                options={states}
                value={selectedState}
                onChange={(e, newValue) => setSelectedState(newValue)}
                renderInput={(params) => (
                    <TextField {...params} label="State" />
                )}
                sx={{ width: 300 }}
            />

            {/* City Selector */}
            <Autocomplete
                id="city"
                options={cities}
                value={selectedCity}
                onChange={(e, newValue) => setSelectedCity(newValue)}
                renderInput={(params) => <TextField {...params} label="City" />}
                disabled={!selectedState}
                sx={{ width: 300 }}
            />

            <Button
                variant="contained"
                disabled={!selectedCity}
                onClick={handleSearch}
            >
                <SearchIcon /> Search
            </Button>
        </Box>
    );
};

export default Search;
