import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const newsDescription = [
  "۳ گام برای جذب سرمایه‌گذار در صنعت نیروگاهی",
  "«گواهی شمش» دروازه ورود امن به بازار طلا با حداقل سرمایه",
  "بازار سهام مصر، بهترین بورس عربی سال ۲۰۲۳ شد",
  "مزایای توسعه صندوق‌های املاک و مستغلات",
  "شکسته شدن رکورد مشارکت مردمی در پویش ملی سلامت",
  "ضرورت ایجاد بانک ایده پردازی",
];
/////////////////////////////////////////////////////////////////////
const TickerWrapper = () => {
  return (
    <>
      <Box
        sx={{
          border: "2px solid #D1232A",
          display: { xs: "block", sm: "none" },
        }}
      ></Box>
      <Box
        sx={{
          direction: "ltr",
          background: "#D1232A",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Marquee speed={100} pauseOnHover>
          <Box
            sx={{
              display: "flex",
              padding: "13px 0",
              background: "#D1232A",
            }}
          >
            {newsDescription.map((text, i) => (
              <Typography
                key={i}
                sx={{
                  color: "#fff",
                  margin: "0 20px",
                  fontWeight: "500",
                  fontSize: ".875rem",
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Marquee>
      </Box>
    </>
  );
};

export default TickerWrapper;
