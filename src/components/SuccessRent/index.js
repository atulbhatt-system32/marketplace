import React from "react";
import { Box, Button, Typography } from "@mui/material";
import bid from "../../images/Bid.png";
import { useNavigate } from "react-router-dom";

const SuccessRent = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <img src={bid} alt="" style={{}} />
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 600,
          fontSize: "24px",
          color: "#000",
          mt: "40px",
          textAlign: "center",
        }}
      >
        Your Rental is Successful
      </Typography>
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 400,
          fontSize: "14px",
          color: "#8C8C8C",
          mt: "16px",
          ml: "46px",
          mr: "35px",
          textAlign: "center",
        }}
      >
        You have successfully rented the Item and it will be on the wallet now.
      </Typography>
      <Button
        sx={{
          background: "#4958FF",
          borderRadius: "21px",
          height: "49px",
          width: "327px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "#4958FF",
          },
          mt: "40px",
          textTransform: "none",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <Typography
          sx={{
            fontFamily: "Eloquia Display",
            fontWeight: 400,
            fontSize: "20px",
            color: "#ffffff",
          }}
        >
          Marketplace
        </Typography>
      </Button>
    </Box>
  );
};

export default SuccessRent;
