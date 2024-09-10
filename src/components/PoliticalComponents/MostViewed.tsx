import {
  Heading,
  RowCard,
} from "..//ReUseableComponent/AllReuseableComponent";
import { Box, Stack, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const mostViewedItems = [
  {
    id: "1",
    pastTense: "۵ ساعت قبل",
    title: "ترمز پرسپولیس در کویر کشیده شد/ مس پس از ۵ هفته رنگ امتیاز را دید",
    description:
      "تهران- ایرنا- تیم فوتبال مس رفسنجان و پرسپولیس در پایان هفته پانزدهم لیگ برتر به تساوی رضایت دادند. تهران- ایرنا- تیم فوتبال مس رفسنجان و پرسپولیس در پایان هفته پانزدهم لیگ برتر به تساوی رضایت دادند. تهران- ایرنا- تیم فوتبال مس رفسنجان و پرسپولیس در پایان هفته پانزدهم لیگ برتر به تساوی رضایت دادند. تهران- ایرنا- تیم فوتبال مس رفسنجان و پرسپولیس در پایان هفته پانزدهم لیگ برتر به تساوی رضایت دادند.",
    src: "./src/assets/images/counter-1.png",
  },
  {
    id: "2",
    pastTense: "۳ ساعت قبل",
    description: "آغاز عملیات عمرانی بوستان خانواده در منطقه دو شهرداری قم",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "3",
    pastTense: "۹ ساعت قبل",
    description: "آغاز عملیات عمرانی بوستان خانواده در منطقه دو شهرداری قم",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "4",
    pastTense: "۱۱ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان!.",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "5",
    pastTense: "۹ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "6",
    pastTense: "۱۱ ساعت قبل",
    description:
      "رقم درخواستی طارمی از اینتر مشخص شد/ بیش از ۱۰۰۰ میلیارد ریال در جیب ستاره ایران",
    src: "./src/assets/images/counter-4.png",
  },
  {
    id: "7",
    pastTense: "۱۱ ساعت قبل",
    description:
      "رقم درخواستی طارمی از اینتر مشخص شد/ بیش از ۱۰۰۰ میلیارد ریال در جیب ستاره ایران",
    src: "./src/assets/images/counter-4.png",
  },
];
/////////////////////////////////////////////////////////////////////
const MostViewed = () => {
  const listWithoutFirst = mostViewedItems?.slice(1);
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Heading title="پربيننده‌ترين اخبار سیاسی" />
      </Box>
      <Link
        sx={{
          gap: "16px",
          display: "grid",
          cursor: "pointer",
          padding: "16px 0",
          textDecoration: "none",
          gridTemplateColumns: { xs: "", sm: "6fr 7fr" },
          "&:hover .MuiTypography-root:first-child": {
            color: "#D1232A",
          },
        }}
      >
        <Box
          component="img"
          src={mostViewedItems[0].src}
          sx={{
            width: "100%",
            borderRadius: "8px",
            height: { xs: "200px", sm: "100%" },
          }}
        />
        <Stack key={mostViewedItems[0].id} spacing={2} height="100%">
          <Typography
            variant="h6"
            sx={{
              color: "#080F18",
              fontWeight: "700",
              lineHeight: "25px",
              textAlign: "justify",
              fontSize: { xs: ".875rem", sm: "1rem" },
            }}
          >
            {mostViewedItems[0].title}
          </Typography>
          <Typography
            sx={{
              flexGrow: "1",
              color: "#646464",
              lineHeight: "22px",
              textAlign: "justify",
              fontSize: { xs: ".75rem", sm: ".875rem" },
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "#D1232A",
                fontWeight: "700",
                lineHeight: "22px",
                textAlign: "justify",
                fontSize: { xs: ".75rem", sm: ".875rem" },
              }}
            >
              {mostViewedItems[0].pastTense} |{" "}
            </Typography>
            {mostViewedItems[0].description}
          </Typography>
        </Stack>
      </Link>
      <Box
        sx={{
          rowGap: "8px",
          columnGap: "16px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "6fr 6fr" },
        }}
      >
        {listWithoutFirst?.map((item) => (
          <Box key={item.id}>
            <RowCard data={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MostViewed;
