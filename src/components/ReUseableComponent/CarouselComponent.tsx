import Carousel from "react-material-ui-carousel";
import { Box, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const CarouselComponent = ({ data }) => {
  return (
    <>
      <Carousel
        swipe={false}
        navButtonsAlwaysInvisible={true}
        indicatorIconButtonProps={{
          style: {
            color: "#f0b8ba",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#D1232A",
          },
        }}
      >
        {data?.map((item) => (
          <Link
            key={item.id}
            sx={{
              textDecoration: "none",
              minHeight: "max-content",
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Box
              component="img"
              src={item.src}
              sx={{ borderRadius: "8px", width: "100%", mb: "8px" }}
            />
            <Typography
              variant="h5"
              component="h5"
              sx={{
                mb: "8px",
                color: "#D1232A",
                fontWeight: "500",
                lineHeight: "21px",
                fontSize: ".875rem",
                textAlign: "justify",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: "#080F18",
                fontWeight: "500",
                lineHeight: "21px",
                fontSize: ".875rem",
                textAlign: "justify",
              }}
            >
              {item.description}
            </Typography>
          </Link>
        ))}
      </Carousel>
    </>
  );
};
export default CarouselComponent;
