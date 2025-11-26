import MedicalCentersAd from "./MedicalCentersAd";
import MedicalCentersCard from "./MedicalCentersCard";
import Navbar from "../Home/Navbar";
import Marquee from "../Home/Marquee";
import { Box } from "@mui/material";
import Search from "../Home/Search";

const SearchResults = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    p: 5,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                }}
            >
                <Box sx={{px:30}}>
                    <Search />
                </Box>
            </Box>
        </div>
    );
};

export default SearchResults;
