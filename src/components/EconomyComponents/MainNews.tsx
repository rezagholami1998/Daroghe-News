import {
  RowCard,
  Heading,
  MainCard,
  ColumnCard,
  ListComponent
} from "../ReUseableComponent/AllReuseableComponent";
import { Box, List } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const counterItems = [
  {
    id: "1",
    pastTense: "۵ ساعت قبل",
    title: "ترمز پرسپولیس در کویر کشیده شد/ مس پس از ۵ هفته رنگ امتیاز را دید",
    description:
      "تهران- ایرنا- تیم فوتبال مس رفسنجان و پرسپولیس در پایان هفته پانزدهم لیگ برتر به تساوی رضایت دادند.",
    src: "./src/assets/images/counter-1.png",
  },
  {
    id: "2",
    pastTense: "۳ ساعت قبل",
    description:
      "چند ایرانی در عربستان زندانی هستند؟ | جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "3",
    pastTense: "۹ ساعت قبل",
    description:
      "چند ایرانی در عربستان زندانی هستند؟ | جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "4",
    pastTense: "۱۱ ساعت قبل",
    description:
      "چند ایرانی در عربستان زندانی هستند؟ | جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "5",
    pastTense: "۹ ساعت قبل",
    description:
      "چند ایرانی در عربستان زندانی هستند؟ | جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "6",
    pastTense: "۹ ساعت قبل",
    description:
      "چند ایرانی در عربستان زندانی هستند؟ | جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
    src: "./src/assets/images/counter-3.png",
  },
];
const newsDetailsItems = [
  {
    id: "1",
    description: "مهاجرت ساکنان روستایی در استان ایلام به استرالیا",
    src: "./src/assets/images/companiesNews-1.png",
  },
  {
    id: "2",
    description: "رایزنی‌های استاندار کردستان برای صادرات سیب‌زمینی استان",
    src: "./src/assets/images/companiesNews-2.png",
  },
  {
    id: "3",
    description: "مازندران گره‌گشایی دولت از اَبر طرح بیمارستانی مازندران",
    src: "./src/assets/images/companiesNews-3.png",
  },
  {
    id: "4",
    description: "مهاجرت ساکنان روستایی در استان ایلام به استرالیا",
    src: "./src/assets/images/companiesNews-1.png",
  },
];
const excitingpoliticalItems = [
  {
    id: "1",
    pastTense: "۳ ساعت قبل",
    description: "آغاز عملیات عمرانی بوستان خانواده در منطقه دو شهرداری قم",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "2",
    pastTense: "۳ ساعت قبل",
    description: "آغاز عملیات عمرانی بوستان خانواده در منطقه دو شهرداری قم",
    src: "./src/assets/images/counter-2.png",
  },
  {
    id: "3",
    pastTense: "۳ ساعت قبل",
    description: "آغاز عملیات عمرانی بوستان خانواده در منطقه دو شهرداری قم",
    src: "./src/assets/images/counter-2.png",
  },
];
const listExcitingItems = [
  {
    id: "1",
    description: "نشریه اخبار و تحلیل‌های چهارشنبه 13 دی‌ماه 1402",
  },
  {
    id: "2",
    description:
      "توسعه روابط نهادهای آموزش عالی، عاملی اثرگذار برای پیشبرد اهداف دانشگاه ها به شمار می رود",
  },
  {
    id: "3",
    description:
      "جلسه شورای مدیران معاونت فرهنگی دانشجویی دانشگاه علوم پزشکی جیرفت برگزار شد",
  },
  {
    id: "4",
    description:
      "ثبت‌نام بیمه تامین‌اجتماعی دانشجویان دوره‌های دستیاری پزشکی و دانشجویان دکترای تخصصی phd آغاز شد",
  },
];
const mostViewedItems = [
  {
    id: "1",
    pastTense: "۳ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "2",
    pastTense: "۳ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "3",
    pastTense: "۳ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "4",
    pastTense: "۳ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "5",
    pastTense: "۳ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "6",
    pastTense: "۳ ساعت قبل",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!",
    src: "./src/assets/images/counter-3.png",
  },
];
/////////////////////////////////////////////////////////////////////
const MainNews = () => {
  const firstCounterItem = [counterItems[0]];
  const dataListComponent = counterItems?.slice(1);
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Heading title="پیشخوان" />
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: { xs: "0", sm: "16px" },
          paddingTop: { xs: "16px", sm: "0px" },
          gridTemplateColumns: { xs: "1fr", sm: "5fr 6fr" },
        }}
      >
        <Box
          sx={{
            gap: "16px",
            display: "grid",
            padding: { xs: "0", sm: "16px 0" },
          }}
        >
          {firstCounterItem.map((item) => (
            <Box key={item.id}>
              <MainCard data={item} />
            </Box>
          ))}
        </Box>
        <Box sx={{ height: "100%" }}>
          <List
            sx={{
              height: "100%",
              display: "flex",
              padding: "16px 0",
              flexDirection: "column",
              gap: { xs: "8px", sm: "0" },
              justifyContent: "space-between",
            }}
          >
            {dataListComponent?.map((item) => (
              <Box key={item.id}>
                <ListComponent data={item} />
              </Box>
            ))}
          </List>
        </Box>
      </Box>
      <Heading title="چندرسانه ای" />
      <Box
        sx={{
          gap: "16px",
          display: "grid",
          padding: "16px 0",
          gridColumn: "1/3",
          gridTemplateColumns: { xs: "1fr", sm: "6fr 6fr" },
        }}
      >
        {newsDetailsItems?.map((item) => (
          <Box key={item.id}>
            <ColumnCard data={item} />
          </Box>
        ))}
      </Box>
      <Heading title="اخبار داغ اقتصاد" />
      <Box
        sx={{
          display: "grid",
          gap: { xs: "0", sm: "16px" },
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)" },
        }}
      >
        <Box
          sx={{
            gap: "8px",
            display: "flex",
            padding: "16px 0",
            flexDirection: "column",
          }}
        >
          {excitingpoliticalItems?.map((item) => (
            <Box key={item.id}>
              <RowCard data={item} />
            </Box>
          ))}
        </Box>
        <List
          sx={{
            gap: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: { xs: "0 0 16px", sm: "16px 0" },
          }}
        >
          {listExcitingItems.map((item) => (
            <Box key={item.id}>
              <ListComponent data={item} />
            </Box>
          ))}
        </List>
      </Box>
      <Heading title="سایر عناوین اخبار اقتصاد" />
      <Box
        sx={{
          gap: "8px",
          display: "flex",
          padding: "16px 0",
          flexDirection: "column",
        }}
      >
        {mostViewedItems?.map((item) => (
          <Box key={item.id}>
            <RowCard data={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MainNews;
