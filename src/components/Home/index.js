import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Market from "./Market";
import Header from "./Header";

import { makeStyles } from "@mui/styles";
import Popular from "./Popular";
import Gym from "./Gym";
import search from "../../images/search.png";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTab-root": {
      color: "#8C8C8C",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#000",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "3px 16px 24px 16px" }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mr: "24px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          sx={{ ml: "11px" }}
        >
          <Tab
            sx={{ padding: 0 }}
            label={
              <Typography
                sx={{
                  fontFamily: "Eloquia Display",
                  fontSize: "18px",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                Market
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              padding: 0,
            }}
            label={
              <Typography
                sx={{
                  fontFamily: "Eloquia Display",
                  fontSize: "18px",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                Popular
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              padding: 0,
            }}
            label={
              <Typography
                sx={{
                  fontFamily: "Eloquia Display",
                  fontSize: "18px",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                Gym
              </Typography>
            }
            {...a11yProps(2)}
          />
        </Tabs>
        <img src={search} alt="" style={{}} />
      </Box>
      <TabPanel value={value} index={0}>
        <Market />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Popular />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Gym />
      </TabPanel>
    </Box>
  );
}
