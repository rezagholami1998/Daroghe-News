import { Box, List } from "@mui/material";
import {
  Heading,
  SidebarCards,
  ListComponent,
} from "..//ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const newsItems = [
  {
    id: "1",
    description: "بیشتر تصادف‌های شهر تهران در این بزرگراه تهران رخ می دهد",
  },
  {
    id: "2",
    description: "بیشتر تصادف‌های شهر تهران در این بزرگراه تهران رخ می دهد",
  },
  {
    id: "3",
    description:
      "هشدار پلیس به مردم درباره لینک‌های اینترنت رایگان دولت + جزئیات",
  },
  {
    id: "4",
    description: "نحوه فعالسازی اینترنت رایگان دولت + راهنمای تصویری",
  },
  {
    id: "5",
    description:
      "استقلال بعد از پرسپولیس مضحکه جدید دربی | شکایت از حمل پیراهن؟",
  },
  {
    id: "6",
    description: "ادامه بارندگی در ۱۲ استان | این استان ها سیراب می شوند»",
  },
  {
    id: "7",
    description:
      "اصرار مهاجم ایرانی گران تمام شد! | قلم قرمز قلعه‌نویی روی مهم‌ترین استعداد فوتبال ایران",
  },
  {
    id: "8",
    description:
      "هشدار پلیس به مردم درباره لینک‌های اینترنت رایگان دولت + جزئیات",
  },
  {
    id: "9",
    description: "نحوه فعالسازی اینترنت رایگان دولت + راهنمای تصویری",
  },
  {
    id: "10",
    description:
      "استقلال بعد از پرسپولیس مضحکه جدید دربی | شکایت از حمل پیراهن؟",
  },
  {
    id: "11",
    description: "ادامه بارندگی در ۱۲ استان | این استان ها سیراب می شوند",
  },
];
const SuggestedContentItems = [
  {
    id: "1",
    title: "سایت ساختن رو رایگان امتحان کن و درآمدتو افزایش بده",
    src: "./src/assets/images/suggestedContent-1.png",
  },
  {
    id: "2",
    title: "با چند دکمه برای کسب و کارت، سایت بساز و فروش اینترنتی داشته",
    src: "./src/assets/images/suggestedContent-2.png",
  },
  {
    id: "3",
    title: "درباره سامانه اطلاعات مناقصات کشور ، راز کسب و کارهای موفق",
    src: "./src/assets/images/suggestedContent-3.png",
  },
  {
    id: "4",
    title: "جمع ‌آوری و تحلیل داده‌های منتشر شده حول سازمان شما",
    src: "./src/assets/images/suggestedContent-4.png",
  },
];
/////////////////////////////////////////////////////////////////////
const RightSidebar = () => {
  return (
    <>
      <Heading title="10 خبر اول " />
      <List
        sx={{
          height: "auto",
          display: "flex",
          padding: "16px 0",
          flexDirection: "column",
          gap: { xs: "8px", sm: "0" },
        }}
      >
        {newsItems.map((item) => (
          <Box key={item.id}>
            <ListComponent data={item} />
          </Box>
        ))}
      </List>
      <Heading title="مطالب پیشنهادی" />
      <Box
        sx={{
          gap: "8px",
          display: "grid",
          padding: "16px 0",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {SuggestedContentItems.map((item) => (
          <SidebarCards data={item} />
        ))}
      </Box>
    </>
  );
};

export default RightSidebar;
