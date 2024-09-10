import { Box } from "@mui/material";
import {
  Heading,
  MainCard,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const companiesItems = [
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
];
/////////////////////////////////////////////////////////////////////
const Companies = () => {
  return (
    <>
      <Heading title="سازمان و شرکت ها" />
      <Box
        sx={{
          gap: "16px",
          display: "grid",
          padding: "16px 0",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)" },
        }}
      >
        {companiesItems.map((item) => (
          <Box key={item.id}>
            <MainCard data={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Companies;
