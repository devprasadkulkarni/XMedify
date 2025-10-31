import { Box, Button } from "@mui/material";
import logo from "../../assets/logo.svg";

const Navbar = () => {
    const menuItems = [
        "Find Doctors",
        "Hospitals",
        "Medicines",
        "Surgeries",
        "Software for Provider",
        "Facilities",
    ];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 40,
                py: 3,
                alignItems: "center",
                backgroundColor: "#e8f1ff",
            }}
        >
            <Box>
                <img src={logo} alt="logo" />
            </Box>
            <Box sx={{ display: "flex", gap: 8, alignItems: "center" }}>
                {menuItems.map((item) => (
                    <Box sx={{ cursor: "pointer" }} key={item}>
                        {item}
                    </Box>
                ))}
                <Button variant="contained">My Bookings</Button>
            </Box>
        </Box>
    );
};

export default Navbar;
