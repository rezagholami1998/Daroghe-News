import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import Header from "../components/Header";
import Footer from "../components/Footer";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import TextField from "@mui/material/TextField";
import SearchIcon from "../assets/iconComponent/SearchIcon";
import MainCard from "../components/ReUseableComponent/MainCard";
import { Box, Container, InputAdornment, Stack } from "@mui/material";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
/////////////////////////////////////////////////////////////////////
const multimediaItems = [
  {
    id: "1",
    title: "ترمز پرسپولیس در کویر کشیده شد/ مس پس از ۵ هفته رنگ امتیاز را دید",
    pastTense: "۵ ساعت قبل",
    description:
      "تهران- ایرنا- تیم فوتبال مس رفسنجان و پرسپولیس در پایان هفته پانزدهم لیگ برتر به تساوی رضایت دادند.",
    src: "./src/assets/images/companies-1.png",
  },
  {
    id: "2",
    title:
      "توسعه‌ای عظیم پیش روی سیستان و بلوچستان با بهره‌برداری از راه‌آهن چابهار - زاهدان",
    pastTense: "۳ ساعت قبل",
    description:
      "زاهدان- ایرنا- بهره‌برداری از راه‌آهن چابهار - زاهدان - سرخس به‌عنوان یکی از ابرپروژه‌های ریلی بزرگ کشور",
    src: "./src/assets/images/companies-2.png",
  },
  {
    id: "3",
    title: "معرفی پرفروش‌ترین‌های کتاب فرانسه در سال ۲۰۲۳",
    pastTense: "۹ ساعت قبل",
    description:
      " با انتشار فهرست پرفروش‌ترین کتاب‌های سال ۲۰۲۳ در فرانسه، چهلمین جلد مجموعه کمیک استریپ «آستریکس» با عنوان «زنبق سفید» در صدر فهرست قرار گرفت.",
    src: "./src/assets/images/companies-3.png",
  },
  {
    id: "4",
    title:
      "«گندم» و «تراکتور» و چند قول متضاد | اعلام رسمی نرخ خرید تضمینی گندم",
    pastTense: "۱۱ ساعت قبل",
    description:
      "اعلام رسمی نرخ خرید تضمینی گندم از هفته‌ای به هفته دیگر موکول می‌شود. بر اساس قانون، نرخ جدید باید حداکثر در مدت یک هفته از سوی رئیس شورای قیمت گذاری کالاهای اساسی اعلام رسمی می‌شد.",
    src: "./src/assets/images/companies-4.png",
  },
  {
    id: "5",
    title:
      "توسعه‌ای عظیم پیش روی سیستان و بلوچستان با بهره‌برداری از راه‌آهن چابهار - زاهدان",
    pastTense: "۳ ساعت قبل",
    description:
      "زاهدان- ایرنا- بهره‌برداری از راه‌آهن چابهار - زاهدان - سرخس به‌عنوان یکی از ابرپروژه‌های ریلی بزرگ کشور",
    src: "./src/assets/images/companies-2.png",
  },
  {
    id: "6",
    title: "معرفی پرفروش‌ترین‌های کتاب فرانسه در سال ۲۰۲۳",
    pastTense: "۹ ساعت قبل",
    description:
      " با انتشار فهرست پرفروش‌ترین کتاب‌های سال ۲۰۲۳ در فرانسه، چهلمین جلد مجموعه کمیک استریپ «آستریکس» با عنوان «زنبق سفید» در صدر فهرست قرار گرفت.",
    src: "./src/assets/images/companies-3.png",
  },
  {
    id: "7",
    title:
      "«گندم» و «تراکتور» و چند قول متضاد | اعلام رسمی نرخ خرید تضمینی گندم",
    pastTense: "۱۱ ساعت قبل",
    description:
      "اعلام رسمی نرخ خرید تضمینی گندم از هفته‌ای به هفته دیگر موکول می‌شود. بر اساس قانون، نرخ جدید باید حداکثر در مدت یک هفته از سوی رئیس شورای قیمت گذاری کالاهای اساسی اعلام رسمی می‌شد.",
    src: "./src/assets/images/companies-4.png",
  },
  {
    id: "8",
    title:
      "«گندم» و «تراکتور» و چند قول متضاد | اعلام رسمی نرخ خرید تضمینی گندم",
    pastTense: "۱۱ ساعت قبل",
    description:
      "اعلام رسمی نرخ خرید تضمینی گندم از هفته‌ای به هفته دیگر موکول می‌شود. بر اساس قانون، نرخ جدید باید حداکثر در مدت یک هفته از سوی رئیس شورای قیمت گذاری کالاهای اساسی اعلام رسمی می‌شد.",
    src: "./src/assets/images/companies-4.png",
  },
];
/////////////////////////////////////////////////////////////////////
const theme = (outerTheme: Theme) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: outerTheme.palette.mode,
    },
  });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
/////////////////////////////////////////////////////////////////////
const SearchPage = () => {
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container
          maxWidth="lg"
          sx={{
            flexGrow: 1,
            paddingTop: { xs: "20px", md: "42px" },
            paddingBottom: { xs: "20px", md: "30px" },
          }}
        >
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <div dir="rtl">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="جستجو"
                  sx={{
                    fontFamily: "IRANSansXFaNum-medium",
                    "& .MuiInputBase-root": { flexDirection: "row-reverse" },
                    "& .MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "12px 14px",
                    },
                  }}
                  InputProps={{
                    style: {
                      padding: "0 10px",
                      borderRadius: "8px",
                      fontFamily: "IRANSansXFaNum-medium",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="#000" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </ThemeProvider>
          </CacheProvider>
          {/* <Typography sx={{color:"#646464",fontWeight:"500",fontSize:".875rem",lineHeight:"21px",marginTop:"8px"}}>۵۳۶٬۹۳۱ نتیجه برای جستجوی شما.</Typography> */}
          {/* for example grid  */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(4,1fr)",
              },
              gap: "16px",
              padding: "32px 0 12px",
            }}
          >
            {multimediaItems.map((item) => (
              <Box key={item.description}>
                <MainCard data={item} />
              </Box>
            ))}
          </Box>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default SearchPage;
