import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterPop from "./Popups/filter";
import CardCustom from "./CardCustom";
import image1 from "../../images/market1.png";
import image2 from "../../images/gym2.png";
import image3 from "../../images/market2.png";
import image4 from "../../images/gym4.png";
import image5 from "../../images/gym5.png";
import image6 from "../../images/market3.png";

const data = [
  {
    src: image1,
    title: "Yoga Class",
    description: "by Caroline Abbott",
  },
  {
    src: image2,
    title: "Workout Classes",
    description: "by Caroline Abbott",
  },
  {
    src: image3,
    title: "Yoga Class",
    description: "by Caroline Abbott",
  },
  {
    src: image4,
    title: "Abs Building",
    description: "by Caroline Abbott",
  },
  {
    src: image5,
    title: "Running Tips",
    description: "by Caroline Abbott",
  },
  {
    src: image6,
    title: "Yoga Class",
    description: "by Caroline Abbott",
  },
];

const Marketplace = () => {
  const [isFilterOpen, SetIsFilterOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <Box sx={{ padding: "9px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "18.5px" }}
      >
        <Typography
          sx={{
            fontStyle: "Epilogue",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "21px",
            color: "#25282B",
            letterSpacing: "0.2",
          }}
        >
          Market Place
        </Typography>
        <Typography
          sx={{
            fontStyle: "SF Pro Display",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#12141A",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FilterListIcon
            sx={{ height: "18px", mt: "-2px" }}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              SetIsFilterOpen(true);
            }}
          />{" "}
          Filter
        </Typography>
        <FilterPop
          isOpen={isFilterOpen}
          setIsOpen={SetIsFilterOpen}
          anchorEl={anchorEl}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <CardCustom
                title={item.title}
                author={item.description}
                src={item.src}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#4C5AFE",
            borderRadius: "50px",
            width: "142px",
            height: "35px",
            fontFamily: "Eloquia Display",
            fontWeight: "500",
            fontSize: "14px",
            textTransform: "none",
            margin: "auto",
            marginTop: "10px",
            "&:hover": {
              background: "#4C5AFE",
            },
          }}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Marketplace;
