import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import yoga from "../../images/yoga.png";

const PrettoSlider = styled(Slider)({
  color: "#C2C1C1",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#4958FF",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const ViewNft = () => {
  const navigate = useNavigate();
  const [buttonType, setButtonType] = useState("");

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.15)",
            borderRadius: "60px",
            height: "24px",
            width: "24px",
            position: "absolute",
            top: "15px",
            left: "24px",
          }}
        >
          <NavigateBeforeIcon
            onClick={() => {
              navigate("/");
            }}
            sx={{
              color: "#fff",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </Box>
        <img src={yoga} alt="" style={{ height: "430px", width: "100%" }} />
        <Box
          sx={{
            p: "16px",
            position: "absolute",
            top: "320px",
            left: "4%",
            // mr: "40px",
            // ml: "40px",
            background: "rgba(171, 171, 171, 0.1)",
            width: "85%",
            borderRadius: "6px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Eloquia Display",
              fontWeight: 600,
              fontSize: "20px",
              color: "#fff",
            }}
          >
            Yoga Master Class
          </Typography>
          {!buttonType || buttonType === "rent" ? (
            <>
              <Typography
                sx={{
                  fontFamily: "SF Pro Display",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#fff",
                  display: "inline",
                }}
              >
                $CRL 10
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Eloquia Light",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#fff",
                  display: "inline",
                }}
              >
                /days
              </Typography>
            </>
          ) : null}
          {!buttonType ? (
            <Typography
              sx={{
                fontFamily: "SF Pro Display",
                fontWeight: 600,
                fontSize: "16px",
                color: "#fff",
                display: "inline",
                ml: "5px",
                mr: "5px",
              }}
            >
              |
            </Typography>
          ) : null}
          {!buttonType || buttonType === "buy" ? (
            <Typography
              sx={{
                fontFamily: "SF Pro Display",
                fontWeight: 600,
                fontSize: "16px",
                color: "#fff",
                display: "inline",
              }}
            >
              $CRL 599
            </Typography>
          ) : null}
        </Box>
      </Box>
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 500,
          fontSize: "20px",
          color: "#000",
          mt: "24px",
          ml: "24px",
          mr: "24px",
        }}
      >
        Yoga Master Class
      </Typography>
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 400,
          fontSize: "16px",
          color: "rgba(0, 0, 0, 0.6)",
          mt: "8px",
          ml: "24px",
          mr: "24px",
        }}
      >
        by Caroline Abbott
      </Typography>
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 400,
          fontSize: "14px",
          color: "#8C8C8C",
          mt: "18px",
          ml: "24px",
          mr: "24px",
        }}
      >
        About the Yoga Class......................................The Bored Ape
        Yacht Club is a collection of 10,000,000 unique Bored Ape NFTs— unique
        digital collectibles living on.
      </Typography>
      {buttonType && buttonType === "rent" ? (
        <Box
          sx={{
            height: "157px",
            background: "rgba(0, 0, 0, 0.03)",
            borderRadius: "8px",
            border: "1px solid #D1D1D1",
            mt: "28px",
            ml: "12px",
            mr: "12px",
            p: "12px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Eloquia Display",
              fontWeight: 500,
              fontSize: "16px",
              color: "#232222",
            }}
          >
            Rental Days
          </Typography>
          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            defaultValue={15}
            min={0}
            max={30}
            size="small"
            sx={{ mt: "32px" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "-15px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Eloquia Display",
                fontWeight: 500,
                fontSize: "13px",
                color: "#747474",
              }}
            >
              0 days
            </Typography>
            <Typography
              sx={{
                fontFamily: "Eloquia Display",
                fontWeight: 500,
                fontSize: "13px",
                color: "#747474",
              }}
            >
              30 days
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "space-between",
              mt: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Eloquia Display",
                fontWeight: 500,
                fontSize: "18px",
                color: "#6D6D6D",
              }}
            >
              Total
            </Typography>
            <Typography
              sx={{
                fontFamily: "Eloquia Display",
                fontWeight: 600,
                fontSize: "16px",
                color: "#232222",
              }}
            >
              120 CRL
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ height: "157px" }}></Box>
      )}
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          p: "24px",
          mt: "100px",
        }}
      >
        {buttonType ? (
          buttonType === "buy" ? (
            <Button
              sx={{
                background: "#4958FF",
                height: "49px",
                width: "100%",
                borderRadius: "21px",
                padding: "11px 58px",
                textTransform: "none",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#4958FF",
                },
              }}
              onClick={() => {
                navigate("/rentsuccess");
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Eloquia Light",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                Buy - $CRL 599
              </Typography>
            </Button>
          ) : (
            <Button
              sx={{
                background: "#4958FF",
                height: "49px",
                width: "100%",
                borderRadius: "21px",
                padding: "11px 58px",
                textTransform: "none",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#4958FF",
                },
              }}
              onClick={() => {
                navigate("/rentsuccess");
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Eloquia Light",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                Rent - $CRL 120
              </Typography>
            </Button>
          )
        ) : (
          <>
            <Button
              sx={{
                background: "#4958FF",
                height: "51px",
                width: "327px",
                borderRadius: "21px",
                textTransform: "none",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#4958FF",
                },
                mr: "8px",
              }}
              onClick={() => {
                setButtonType("rent");
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Eloquia Light",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                Rent
              </Typography>
            </Button>
            <Button
              sx={{
                background: "#000",
                height: "51px",
                width: "327px",
                borderRadius: "21px",
                textTransform: "none",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#000",
                },
              }}
              onClick={() => {
                setButtonType("buy");
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Eloquia Light",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                Buy
              </Typography>
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ViewNft;
