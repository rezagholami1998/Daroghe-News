import { Box, Typography, Link } from "@mui/material";
import {
  Heading,
  RowCard,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const counterItems = [
  {
    id: "1",
    description:
      "حریق در پایتخت نسبت به سال گذشته ۱۶ درصد کاهش یافته است/ ایمن‌سازی بیمارستان‌ها به کجا رسید؟",
    src: "./src/assets/images/counter-1.png",
  },
  {
    id: "2",
    description: "آغاز عملیات عمرانی بوستان خانواده در منطقه دو شهرداری قم",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "3",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    d: "4",
    description:
      "رقم درخواستی طارمی از اینتر مشخص شد/ بیش از ۱۰۰۰ میلیارد ریال در جیب ستاره ایران",
    src: "./src/assets/images/counter-4.png",
  },
];
/////////////////////////////////////////////////////////////////////
const Counter = () => {
  const counterItemsWithoutOne = counterItems?.slice(1);
  return (
    <>
      <Heading title="پیشخوان" />
      <Box
        sx={{
          gap: "16px",
          display: "grid",
          padding: "16px 0",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)" },
        }}
      >
        <Link sx={{ position: "relative", cursor: "pointer" }}>
          <Box
            component="img"
            src={counterItems[0].src}
            sx={{
              width: "100%",
              borderRadius: "8px",
              height: { xs: "270px", lg: "100%" },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              right: "5px",
              color: "#fff",
              padding: "0 10px",
              fontWeight: "500",
              textAlign: "justify",
              position: "absolute",
              bottom: { xs: "30px", sm: "20px" },
              fontSize: { xs: ".875rem", sm: "1rem" },
            }}
          >
            {counterItems[0].description}
          </Typography>
        </Link>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {counterItemsWithoutOne?.map((item) => (
            <Box key={item.id}>
              <RowCard data={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Counter;
