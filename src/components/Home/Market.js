import { Box } from "@mui/material";
import React from "react";
import Marketplace from "./Marketplace";
import NewDeals from "./NewDeals";

const Market = () => {
  return (
    <Box>
      <NewDeals />
      <Marketplace />
    </Box>
  );
};

export default Market;
