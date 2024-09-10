import Carousel from "react-material-ui-carousel";
import { Box, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const FastNewsItems = [
  {
    title: "با ثبت ۷۰ درصد رشد:",
    description: "بازار سهام مصر، بهترین بورس عربی سال ۲۰۲۳ شد",
    src: "./src/assets/images/fastNews-1.png",
  },
  {
    title: "با ثبت ۷۰ درصد رشد:",
    description: "بازار سهام مصر، بهترین بورس عربی سال ۲۰۲۳ شد",
    src: "./src/assets/images/fastNews-1.png",
  },
  {
    title: "با ثبت ۷۰ درصد رشد:",
    description: "بازار سهام مصر، بهترین بورس عربی سال ۲۰۲۳ شد",
    src: "./src/assets/images/fastNews-1.png",
  },
  {
    title: "با ثبت ۷۰ درصد رشد:",
    description: "بازار سهام مصر، بهترین بورس عربی سال ۲۰۲۳ شد",
    src: "./src/assets/images/fastNews-1.png",
  },
];
/////////////////////////////////////////////////////////////////////
const FastNews = () => {
  return (
    <Carousel
      swipe={false}
      navButtonsAlwaysInvisible={true}
      indicatorContainerProps={{
        style: {
          zIndex: "10",
          right: "20px",
          width: "auto",
          bottom: "30px",
          position: "absolute",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          color: "#696c6c",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#fff",
        },
      }}
      sx={{ paddingBottom: "0", cursor: "pointer" }}
    >
      {FastNewsItems?.map((item, i) => (
        <Link
          key={i}
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            borderRadius: "16px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          <Box
            component="img"
            key={i}
            src={item.src}
            sx={{
              mb: "0px",
              width: "100%",
              borderRadius: "16px",
              height: { xs: "270px", sm: "300px", md: "350px" },
            }}
          />
          <Box
            sx={{
              right: "24px",
              bottom: "50px",
              display: "flex",
              position: "absolute",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: { xs: "4px", sm: "8px" },
            }}
          >
            <Box
              sx={{
                zIndex: "5",
                color: "#fff",
                fontWeight: "700",
                padding: "4px 6px",
                textAlign: "right",
                borderRadius: "6px",
                background: "#D1232A",
                display: "inline-flex",
                fontSize: { xs: ".75rem", sm: ".875rem" },
              }}
            >
              خبر فوری
            </Box>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                color: "#fff",
                fontWeight: "500",
                lineHeight: "24px",
                fontSize: { xs: "0.75rem", sm: "1rem" },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "500",
                lineHeight: { sm: "30px" },
                fontSize: { xs: "0.85rem", sm: "1.25rem" },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Link>
      ))}
    </Carousel>
  );
};

export default FastNews;
