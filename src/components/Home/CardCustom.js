import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";

const CardCustom = ({ src, title, author }) => {
  const navigate = useNavigate();
  return (
    <Card
      key={title}
      variant="outlined"
      sx={{
        gap: 2,
        padding: 0,
        // width: "100%",
        width: "165px",
        // minWidth: "155px",
        background: "#FFFFFF",
        border: "1px solid #F4F4F4",
        boxShadow: "0px 10px 50px rgba(242, 242, 242, 0.2)",
        borderRadius: "5px",
        margin: "auto",
      }}
      onClick={() => navigate(`/view`)}
    >
      <img
        src={`${src}?h=120&fit=crop&auto=format`}
        srcSet={`${src}?h=120&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        style={{
          height: "153px",
          width: "100%",
          borderRaduis: "3px 3px 0px 0px",
        }}
      />
      <Box sx={{ p: "12px" }}>
        <Typography
          sx={{
            fontFamily: "Eloquia Display",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#000",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Eloquia Light",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "20px",
            color: "rgba(68, 68, 68, 0.6)",
            mt: "3px",
          }}
        >
          {author}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Eloquia Light",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "14px",
            color: "#595959",
            mt: "5px",
          }}
        >
          Rent
        </Typography>
        <Typography
          sx={{
            fontFamily: "SF Pro Display",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "17px",
            color: "#000",
            display: "inline",
          }}
        >
          $CRL 10
        </Typography>
        <Typography
          sx={{
            fontFamily: "SF Pro Display",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "17px",
            color: "#000",
            display: "inline",
          }}
        >
          /day
        </Typography>
      </Box>
    </Card>
  );
};

export default CardCustom;
