import { Box, List, Stack } from "@mui/material";
import {
  Heading,
  ListComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const culturalItems = [
  {
    id: "1",
    description:
      "فاق عجیب در شام آخر استقلال؛ خطیر با عصبانیت میز بازیکنان را ترک کرد | «آتش» تغییر مدیرعامل شعله‌ور شد",
  },
  {
    id: "2",
    description:
      "قلب شما را آوردیم | گفت‌وگو با تنها هماهنگ‌کننده انتقال هوایی قلب در کشور | با گریه راهی‌مان می‌کنند، با لبخند استقبال!",
  },
  {
    id: "3",
    description: "استاد قهر در پرسپولیس؛ گفت و گو کن و برو!",
  },
  {
    id: "4",
    description:
      "یک هلدینگ بزرگ در راه بورس | ۱۰ هزار میلیارد تومان عرضه اولیه در راه است",
  },
  {
    id: "5",
    description:
      "سلاح جدید مخوف چینی‌ها زمین، دریا و آسمان را کنترل می‌کند!/ عکس",
  },
  {
    id: "6",
    description:
      "من و بچه‌های تهرانسر جای تیم یحیی بودیم مس را ۴ تایی می‌کردیم! | برانکو مربی نیست؛ داغش هنوز روی تن پرسپولیس است",
  },
];
const politicalItems = [
  {
    id: "1",
    description:
      "چند ایرانی در عربستان زندانی هستند؟ | جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
  {
    id: "2",
    description:
      "آیا شیرین‌کننده‌های مصنوعی می‌توانند میکروبیوم شما را تغییر دهند؟",
  },
  {
    id: "3",
    description:
      "چرا تصاویر سانسورشده سریال‌ها پخش شد؟ | ما مسیر سریال‌ها را اصلاح کردیم",
  },
  {
    id: "4",
    description:
      "قلب شما را آوردیم | گفت‌وگو با تنها هماهنگ‌کننده انتقال هوایی قلب در کشور | با گریه راهی‌مان می‌کنند، با لبخند استقبال!",
  },
  {
    id: "5",
    description:
      "مولتی‌میلیاردرها در اینستاگرام به جای زمین فوتبال! | نیازمند جلوی یک فاجعه را گرفت!",
  },
  {
    id: "6",
    description:
      "قاتل اصلی توسط برادران یک متهم در خارج دستگیر شد | ماجرای عجیب قتل زن ثروتمند در خیابان فرشته",
  },
];
/////////////////////////////////////////////////////////////////////
const CulturalAndPolitical = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: { xs: "0", sm: "16px" },
          gridTemplateColumns: { xs: "1fr", sm: "6fr 6fr" },
        }}
      >
        <Stack direction="column">
          <Heading title="فرهنگی" />
          <List
            sx={{
              height: "100%",
              display: "flex",
              padding: "16px 0",
              flexDirection: "column",
              gap: { xs: "8px", sm: "0" },
            }}
          >
            {culturalItems.map((item) => (
              <Box key={item.id}>
                <ListComponent data={item} />
              </Box>
            ))}
          </List>
        </Stack>
        <Stack direction="column">
          <Heading title="سیاسی" />
          <List
            sx={{
              height: "100%",
              display: "flex",
              padding: "16px 0",
              flexDirection: "column",
              gap: { xs: "8px", sm: "0" },
            }}
          >
            {politicalItems.map((item) => (
              <Box key={item.id}>
                <ListComponent data={item} />
              </Box>
            ))}
          </List>
        </Stack>
      </Box>
    </>
  );
};

export default CulturalAndPolitical;
