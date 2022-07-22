import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import vector from "../../images/Vector.png";
import image1 from "../../images/yoga.png";
import image2 from "../../images/market2.png";
import image3 from "../../images/gym4.png";
import image4 from "../../images/market1.png";

const data = [
  {
    src: image1,
    title: "Yoga Class",
    description: "by Caroline Abbott",
  },
  {
    src: image2,
    title: "Yoga Class",
    description: "by Caroline Abbott",
  },
  {
    src: image3,
    title: "Abs Building",
    description: "by Caroline Abbott",
  },
  {
    src: image4,
    title: "Yoga Class",
    description: "by Caroline Abbott",
  },
];

export default function NewDeals() {
  return (
    <Box sx={{ padding: "9px" }}>
      <Typography
        sx={{
          fontFamily: "Epilogue",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "21px",
          letterSpacing: "0.2px",
          color: "#25282B",
          mb: "14px",
          display: "flex",
          alignItems: "center",
        }}
      >
        New Deals
        <img src={vector} alt="" style={{ marginLeft: "8.5px" }} />
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          width: "calc(100% + 25px)",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              gap: "12px",
              padding: "8px",
              // height: "344px",
              minWidth: "231px",
              // width: "231px",
              backgroundColor: "#fff",
              border: "1px solid #F2F2F2",
              boxShadow: "0px 10px 50px rgba(242, 242, 242, 0.6)",
              borderRadius: "6px",
            }}
          >
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              style={{ height: "230px", width: "100%" }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Eloquia Display",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#000",
                  mt: "12px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Eloquia Light",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "rgba(68, 68, 68, 0.6)",
                }}
              >
                {item.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "8px",
                mb: "4px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Eloquia Light",
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "14px",
                    color: "#8C8C8C",
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
                    fontWeight: "500",
                    fontSize: "10px",
                    lineHeight: "14px",
                    color: "#000",
                    display: "inline",
                  }}
                >
                  /day
                </Typography>
              </Box>
              <Button
                sx={{
                  height: "28px",
                  width: "60px",
                  background: "#4958FF",
                  borderRadius: "3px",
                  padding: "4px 16px",
                  textTransform: "none",
                }}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#fff",
                  }}
                >
                  Rent
                </Typography>
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
