import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import logo from "../../images/coral_app_logo.png";
import avatar1 from "../../images/avatar1.png";
import Avatar from "@mui/material/Avatar";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Menu from "@mui/material/Menu";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { makeStyles } from "@mui/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      borderRadius: "8px",
    },
    "& .MuiList-root": {
      padding: "0px",
      borderRadius: "8px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        padding: "22px",
        paddingBottom: "9px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt="" style={{}} />
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt="Remy Sharp"
          src={avatar1}
          sx={{ height: "30px", width: "30px", marginTop: "2px" }}
        />
        <Typography
          sx={{
            fontFamily: "Eloquia Display",
            fontSize: "14px",
            fontWeight: "400",
            marginLeft: "8px",
            display: "flex",
            marginTop: "7px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleClick}
        >
          My Account
          {menuOpen ? (
            <KeyboardArrowUpOutlinedIcon sx={{ marginTop: "-1px" }} />
          ) : (
            <KeyboardArrowDownOutlinedIcon sx={{ marginTop: "-1px" }} />
          )}
        </Typography>
        <Backdrop
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={menuOpen}
          onClick={handleClose}
        >
          <Menu
            id="demo-positioned-menu"
            anchorEl={anchorEl}
            className={classes.menu}
            open={menuOpen}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "12px 20px 20px",
                gap: "8px",
                // width: "182px",
                border: "1px solid #D8D8D8",
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.05)",
                borderRadius: "8px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontFamily: "Eloquia Display",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#A4A4A4",
                  }}
                >
                  Menu
                </Typography>
                <CancelOutlinedIcon
                  sx={{
                    height: "19px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={handleClose}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Eloquia Display",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#2C2C2C",
                  display: "flex",
                  marginTop: "5px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  navigate("/create");
                }}
              >
                <AddOutlinedIcon
                  sx={{ marginRight: "8px", marginTop: "-2px" }}
                />
                Create NFT
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Eloquia Display",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#2C2C2C",
                  display: "flex",
                  marginTop: "10px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  navigate("/view");
                }}
              >
                <AccountBalanceWalletOutlinedIcon
                  sx={{ marginRight: "8px", marginTop: "-2px" }}
                />
                Wallet
              </Typography>
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
                Connect Wallet
              </Button>
            </Card>
          </Menu>
        </Backdrop>
      </Box>
    </Box>
  );
};

export default Header;
