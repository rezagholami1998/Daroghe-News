import { Box, List } from "@mui/material";
import {
  Heading,
  ListComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////
const LatestNews = () => {
  return (
    <>
      <Heading title="آخرین اخبار" />
      <List
        sx={{
          height: "auto",
          display: "flex",
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
    </>
  );
};

export default LatestNews;
