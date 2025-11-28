import MedicalCentersAd from "./MedicalCentersAd";
import MedicalCentersCard from "./MedicalCentersCard";
import Navbar from "../Home/Navbar";
import Marquee from "../Home/Marquee";
import { Box, CircularProgress, Typography } from "@mui/material";
import Search from "../Home/Search";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VerifiedIcon from "@mui/icons-material/Verified";

const SearchResults = () => {
    const [params] = useSearchParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const state = params.get("state");
    const city = params.get("city");

    const API_BASE = "https://meddata-backend.onrender.com/data";

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `${API_BASE}?state=${state}&city=${city}`
                );
                setResults(data);
            } catch (err) {
                console.error("Error fetching results:", err);
            } finally {
                setLoading(false);
            }
        };
        if (state && city) {
            fetchResults();
        }
    }, [state, city]);

    return (
        <div>
            <Marquee />
            <Navbar />

            {/* Search */}
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    p: 5,
                }}
            >
                <Box sx={{ px: 30 }}>
                    <Search />
                </Box>
            </Box>

            {/* Hospital cards and ad */}
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                }}
            >
                <Box sx={{ backgroundColor: "primary.light" }}>
                    {loading ? (
                        <Box
                            sx={{
                                width: "100vw",
                                minHeight: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                pt:30
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Box sx={{ width: "100vw", display: "flex", px: 35 }}>
                            <Box sx={{ pr: 5 }}>
                                <Typography
                                    variant="h1"
                                    sx={{ fontSize: 40, pt: 10 }}
                                >{`${results.length} medical centers available in ${city}`}</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <VerifiedIcon />
                                    <Typography
                                        variant="h3"
                                        sx={{ fontSize: 20, py: 5 }}
                                    >
                                        Book appointments with minimum wait-time
                                        & verified doctor details
                                    </Typography>
                                </Box>
                                {results.length === 0 ? (
                                    <h1>No data found.</h1>
                                ) : (
                                    <Box>
                                        {results.map((item, idx) => (
                                            <Box key={idx} sx={{ my: 5 }}>
                                                <MedicalCentersCard
                                                    item={item}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                            <Box
                                sx={{
                                    height: 200,
                                    backgroundColor: "primary.light",
                                    pt: 23,
                                }}
                            >
                                <MedicalCentersAd />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    );
};

export default SearchResults;
