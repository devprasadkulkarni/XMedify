import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

// image imports
import acc_expand from "../../assets/accordian-expand.svg";
import faq_heart from "../../assets/faq-heart.svg";
import faq_img from "../../assets/faq-image.svg";
import faq_smily from "../../assets/faq-smily.svg";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&::before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
            transform: "rotate(90deg)",
        },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255, 255, 255, .05)",
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
    const [expanded, setExpanded] = React.useState("");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                py: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
            }}
        >
            <Typography variant="h6" sx={{ color: "primary.main" }}>
                Get Your Answer
            </Typography>
            <Typography
                variant="h3"
                sx={{ color: "#1B3C74", fontWeight: "bold" }}
            >
                Frequently Asked Questions
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <Box sx={{ ml: 40 }}>
                        <img src={faq_img} alt="faq image" />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: 180,
                            right: 35,
                            borderRadius: "50",
                        }}
                    >
                        <img src={faq_heart} alt="faq heart" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            backgroundColor: "gray",
                            width: 200,
                            height: 100,
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                height: 50,
                                alignItems: "center",
                            }}
                        >
                            <img src={faq_smily} alt="faq smily" />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Typography>84k+</Typography>
                            <Typography>Happy Patients</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ ml: 5 }}>
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                        sx={{
                            backgroundColor: "transparent",
                            border: "none",
                            "&::before": { display: "none" },
                            mb: 5,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<img src={acc_expand} />}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                            sx={{
                                backgroundColor: "transparent",
                                border: "none",
                                "&::before": { display: "none" },
                            }}
                        >
                            <Typography component="span" variant="h6">
                                Why choose our medical for your family?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                        sx={{
                            backgroundColor: "transparent",
                            border: "none",
                            "&::before": { display: "none" },
                            mb: 5,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<img src={acc_expand} />}
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                            sx={{
                                backgroundColor: "transparent",
                                border: "none",
                                "&::before": { display: "none" },
                            }}
                        >
                            <Typography variant="h6" component="span">
                                Why we are different from others?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                        sx={{
                            backgroundColor: "transparent",
                            border: "none",
                            "&::before": { display: "none" },
                            mb: 5,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<img src={acc_expand} />}
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                            sx={{
                                backgroundColor: "transparent",
                                border: "none",
                                "&::before": { display: "none" },
                            }}
                        >
                            <Typography variant="h6" component="span">
                                Trusted & experience senior care & love
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                        sx={{
                            backgroundColor: "transparent",
                            border: "none",
                            "&::before": { display: "none" },
                            mb: 5,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<img src={acc_expand} />}
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                            sx={{
                                backgroundColor: "transparent",
                                border: "none",
                                "&::before": { display: "none" },
                            }}
                        >
                            <Typography variant="h6" component="span">
                                How to get appointment for emergency cases?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
};

export default Faq;
