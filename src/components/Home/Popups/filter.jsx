import React from "react";
import Menu from "@mui/material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Backdrop from "@mui/material/Backdrop";
import { Box, Input, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

export default function FilterPop({ isOpen, setIsOpen, anchorEl }) {
  const classes = useStyles();
  return (
    <Backdrop
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
      // onClick={() => setIsOpen(false)}
    >
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        className={classes.menu}
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input
              type="text"
              placeholder="enter search"
              variant="contained"
              sx={{
                borderRadius: "50px",
                // height: "35px",
                fontFamily: "Eloquia Display",
                fontWeight: "500",
                fontSize: "14px",
                textTransform: "none",
                margin: "auto",
                marginTop: "10px",
              }}
            />
            <CancelOutlinedIcon
              sx={{
                height: "19px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => setIsOpen(false)}
            />
          </Box>
        </Card>
      </Menu>
    </Backdrop>
  );
}
