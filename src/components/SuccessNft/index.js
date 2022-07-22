import React from "react";
import { Box, Button, Typography } from "@mui/material";
import yay from "../../images/Yay.png";
import { useNavigate } from "react-router-dom";

const SuccessNft = () => {
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
      <img src={yay} alt="" style={{}} />
      <Typography
        sx={{
          fontFamily: "Space Grotesk",
          fontWeight: 500,
          fontSize: "16px",
          color: "#23262F",
          mt: "16px",
          ml: "53px",
          mr: "53px",
          textAlign: "center",
        }}
      >
        Congratulations, your NFT has been created.
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
          mt: "36px",
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
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 400,
          fontSize: "16px",
          color: "#444444",
          mt: "4px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => {
          navigate("/create");
        }}
      >
        Create new NFT
      </Typography>
    </Box>
  );
};

export default SuccessNft;
