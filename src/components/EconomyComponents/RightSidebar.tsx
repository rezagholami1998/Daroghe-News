import {
  Heading,
  ListComponent,
  CarouselComponent,
} from "../ReUseableComponent/AllReuseableComponent";
import { Box, List } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const journalItems = [
  {
    id: "1",
    description: "روزنامه‌های اقتصادی یکشنبه ۱۷ دی ماه ۱۴۰۲",
    src: "./src/assets/images/journal-1.png",
  },
  {
    id: "2",
    description: "روزنامه‌های اقتصادی یکشنبه ۱۷ دی ماه ۱۴۰۲",
    src: "./src/assets/images/journal-1.png",
  },
  {
    id: "3",
    description: "روزنامه‌های اقتصادی یکشنبه ۱۷ دی ماه ۱۴۰۲",
    src: "./src/assets/images/journal-1.png",
  },
  {
    id: "4",
    description: "روزنامه‌های اقتصادی یکشنبه ۱۷ دی ماه ۱۴۰۲",
    src: "./src/assets/images/journal-1.png",
  },
];
const latestNewsItems = [
  {
    id: "1",
    description: "بیشتر تصادف‌های شهر تهران در این بزرگراه تهران رخ می دهد",
  },
  {
    id: "2",
    description:
      "هشدار پلیس به مردم درباره لینک‌های اینترنت رایگان دولت + جزئیات",
  },
  {
    id: "3",
    description: "نحوه فعالسازی اینترنت رایگان دولت + راهنمای تصویری",
  },
  {
    id: "4",
    description:
      "استقلال بعد از پرسپولیس مضحکه جدید دربی | شکایت از حمل پیراهن؟",
  },
  {
    id: "5",
    description: "ادامه بارندگی در ۱۲ استان | این استان ها سیراب می شوند",
  },
  {
    id: "6",
    description:
      "اصرار مهاجم ایرانی گران تمام شد! | قلم قرمز قلعه‌نویی روی مهم‌ترین استعداد فوتبال ایران",
  },
];
const reportsItems = [
  {
    id: "1",
    description:
      "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
  {
    id: "2",
    description:
      "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
  {
    id: "3",
    description:
      "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
  {
    id: "4",
    description:
      "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
];
const LatestContentsProvinceItems = [
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
  {
    id: "5",
    description: "فرم های مورد نیاز دانشجویان",
  },
  {
    id: "6",
    description:
      "افزایش سه برابری حق الزحمه کار دانشجویی برای دانشجویان دانشگاه‌های علوم پزشکی",
  },
];
/////////////////////////////////////////////////////////////////////
const RightSidebar = () => {
  return (
    <>
      <Heading title="نشریه" />
      <Box sx={{ padding: "16px 0" }}>
        <CarouselComponent data={journalItems} />
      </Box>
      <Heading title="آخرین اخبار" />
      <List
        sx={{
          display: "flex",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
          },
          height: "auto",
          padding: "16px 0",
          flexDirection: "column",
          gap: { xs: "8px", sm: "0" },
        }}
      >
        {latestNewsItems.map((item) => (
          <Box key={item.id}>
            <ListComponent data={item} />
          </Box>
        ))}
      </List>
      <Heading title="گزارشات" />
      <Box sx={{ padding: "16px 0" }}>
        <CarouselComponent data={reportsItems} />
      </Box>
      <Heading title="آخرین مطالب استان" />
      <List
        sx={{
          height: "auto",
          display: "flex",
          padding: "16px 0",
          flexDirection: "column",
          gap: { xs: "8px", sm: "0" },
        }}
      >
        {LatestContentsProvinceItems.map((item) => (
          <Box key={item.id}>
            <ListComponent data={item} />
          </Box>
        ))}
      </List>
    </>
  );
};

export default RightSidebar;
