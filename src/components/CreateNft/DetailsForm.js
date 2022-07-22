import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: "48px",
  height: "24px",
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(0px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: "3.8px",
    color: "#4C5AFE",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#4C5AFE",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: "16px",
    height: "16px",
    borderRadius: "32px",
    transition: theme.transitions.create(["width"], {
      duration: 300,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: "32px",
    opacity: 1,
    backgroundColor: "#E6E8EC",
    boxSizing: "border-box",
  },
}));

const DetailsForm = () => {
  const navigate = useNavigate();
  const [rentalSwitch, setRentalSwitch] = useState(false);
  const [buySwitch, setBuySwitch] = useState(false);

  return (
    <Box sx={{ mt: "34px" }}>
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 500,
          fontSize: "16px",
          color: "#23262F",
        }}
      >
        Item Details
      </Typography>
      <Typography
        sx={{
          fontFamily: "Eloquia Light",
          fontWeight: 600,
          fontSize: "12px",
          color: "#737373",
          mt: "24px",
          mb: "8px",
        }}
      >
        Item name
      </Typography>
      <TextField
        id="outlined-basic"
        placeholder='e.g. "Redeemable Bitcoin Card with..."'
        label=""
        variant="outlined"
        sx={{
          width: "100%",
          "&.MuiInputBase-root": {
            padding: "12px 16px",
            height: "48px",
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderRadius: "12px",
              borderColor: "1px solid rgba(0,0,0,0.3)",
            },
          },
        }}
      />
      <Typography
        sx={{
          fontFamily: "Eloquia Light",
          fontWeight: 600,
          fontSize: "12px",
          color: "#737373",
          mt: "20px",
          mb: "8px",
        }}
      >
        Description
      </Typography>
      <TextField
        id="outlined-basic"
        placeholder='e.g. "After purchasing you will able..."'
        label=""
        variant="outlined"
        sx={{
          width: "100%",
          "&.MuiInputBase-root": {
            padding: "12px 16px",
            height: "48px",
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderRadius: "12px",
              borderColor: "1px solid rgba(0,0,0,0.3)",
            },
          },
        }}
      />
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 500,
          fontSize: "16px",
          color: "#23262F",
          mt: "32px",
        }}
      >
        Media/Files
      </Typography>
      <Typography
        sx={{
          fontFamily: "Eloquia Light",
          fontWeight: 600,
          fontSize: "12px",
          color: "#737373",
          mt: "24px",
          mb: "12px",
        }}
      >
        Images
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {Array(5)
          .fill(null)
          .map((i, index) => (
            <Box
              key={index}
              sx={{
                height: "56.8px",
                width: "56.8px",
                background: "#A5A5A5",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddIcon style={{ color: "#fff" }} />
            </Box>
          ))}
      </Box>
      <Typography
        sx={{
          fontFamily: "Eloquia Light",
          fontWeight: 600,
          fontSize: "12px",
          color: "#737373",
          mt: "20px",
          mb: "8px",
        }}
      >
        Links
      </Typography>
      <TextField
        id="outlined-basic"
        placeholder='e.g. "add any tutorial video links here..."'
        label=""
        variant="outlined"
        sx={{
          width: "100%",
          "&.MuiInputBase-root": {
            padding: "12px 16px",
            height: "48px",
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderRadius: "12px",
              borderColor: "1px solid rgba(0,0,0,0.3)",
            },
          },
        }}
      />
      <Typography
        sx={{
          fontFamily: "Eloquia Display",
          fontWeight: 500,
          fontSize: "16px",
          color: "#23262F",
          mt: "32px",
        }}
      >
        Payment Type
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: "24px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Eloquia Display",
              fontWeight: 500,
              fontSize: "16px",
              color: "#23262F",
            }}
          >
            Rental
          </Typography>
          <Typography
            sx={{
              fontFamily: "Eloquia Light",
              fontWeight: 400,
              fontSize: "12px",
              color: "#737373",
              // mt: "20px",
              // mb: "8px",
            }}
          >
            Per day payment for this Item
          </Typography>
        </Box>
        <AntSwitch
          checked={rentalSwitch}
          onChange={(e) => setRentalSwitch(e.target.checked)}
          inputProps={{ "aria-label": "ant design" }}
        />
      </Box>
      {rentalSwitch ? (
        <>
          <Typography
            sx={{
              fontFamily: "Eloquia Light",
              fontWeight: 600,
              fontSize: "12px",
              color: "#737373",
              mt: "16px",
              mb: "8px",
            }}
          >
            Rent per day
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder='e.g. "$10"'
            label=""
            variant="outlined"
            sx={{
              width: "100%",
              "&.MuiInputBase-root": {
                padding: "12px 16px",
                height: "48px",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderRadius: "12px",
                  borderColor: "1px solid rgba(0,0,0,0.3)",
                },
              },
            }}
          />
        </>
      ) : null}
      <Box
        sx={{
          display: "flex",
          mt: "24px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Eloquia Display",
              fontWeight: 500,
              fontSize: "16px",
              color: "#23262F",
            }}
          >
            Buy
          </Typography>
          <Typography
            sx={{
              fontFamily: "Eloquia Light",
              fontWeight: 400,
              fontSize: "12px",
              color: "#737373",
            }}
          >
            One time payment to buy this item
          </Typography>
        </Box>
        <AntSwitch
          checked={buySwitch}
          onChange={(e) => setBuySwitch(e.target.checked)}
          inputProps={{ "aria-label": "ant design" }}
        />
      </Box>
      {buySwitch ? (
        <>
          <Typography
            sx={{
              fontFamily: "Eloquia Light",
              fontWeight: 600,
              fontSize: "12px",
              color: "#737373",
              mt: "16px",
              mb: "8px",
            }}
          >
            Buy Price
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder='e.g. "$599"'
            label=""
            variant="outlined"
            sx={{
              width: "100%",
              "&.MuiInputBase-root": {
                padding: "12px 16px",
                height: "48px",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderRadius: "12px",
                  borderColor: "1px solid rgba(0,0,0,0.3)",
                },
              },
            }}
          />
        </>
      ) : null}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            background: "#4958FF",
            height: "49px",
            width: "327px",
            borderRadius: "21px",
            padding: "11px 58px",
            textTransform: "none",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#4958FF",
            },
            mt: "36px",
          }}
          onClick={() => {
            navigate("/nftsuccess");
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
            Create NFT
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsForm;
