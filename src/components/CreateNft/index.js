import React from "react";
import { Box, Button, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import check from "../../images/Rectangle.png";
import frame from "../../images/Frame.png";
import DetailsForm from "./DetailsForm";
import { useNavigate } from "react-router-dom";

const CreateNft = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <NavigateBeforeIcon
          onClick={() => {
            navigate("/");
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "Epilogue",
            fontWeight: "500",
            fontSize: "16px",
            marginLeft: "95px",
          }}
        >
          Create NFT
        </Typography>
      </Box>
      <img
        alt=""
        src={check}
        style={{
          height: "134px",
          width: "153px",
          alignSelf: "center",
          marginTop: "47px",
          borderRadius: "4px",
        }}
      />
      <Button
        sx={{
          height: "35px",
          width: "200px",
          padding: "1px 24px",
          gap: "8px",
          background: "#4C5AFE",
          borderRadius: "50px",
          marginTop: "16px",
          alignSelf: "center",
          textTransform: "none",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "#4C5AFE",
          },
        }}
      >
        <img alt="" src={frame} style={{}} />
        <Typography
          sx={{
            fontFamily: "Eloquia Light",
            fontWeight: 500,
            fontSize: "14px",
            color: "#fff",
          }}
        >
          Upload thumbnail
        </Typography>
      </Button>
      <DetailsForm />
    </Box>
  );
};

export default CreateNft;
