import { Box, List } from "@mui/material";
import {
  Heading,
  ListComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const MarketItems = [
  {
    id: "1",
    description:
      "تجارت الکترونیک در ایران راهش را برای توسعه برندهای آرایشی و بهداشتی پیدا کرده است",
  },
  {
    id: "2",
    description:
      "خرید اینترنتی کالاهای سوپرمارکتی از اکالا در شیراز با ارسال رایگان",
  },
  {
    id: "3",
    description:
      "پاسخ سخنگوی جبهه پیروان به ادعای فامیل بازی در لیست اصولگرایان /اصلاح طلبان لیست خواهند داد",
  },
  {
    id: "4",
    description:
      "دو کروات در لیست گزینه‌های جانشینی یحیی؛ خبری از مربی ایرانی نیست!",
  },
  {
    id: "5",
    description:
      "سلاح جدید مخوف چینی‌ها زمین، دریا و آسمان را کنترل می‌کند!/ عکس",
  },
  {
    id: "6",
    description:
      "اطلاع‌رسانی سخنگوی قوه قضائیه درباره آخرین وضعیت پرونده و اتهامات «تتلو»",
  },
];
/////////////////////////////////////////////////////////////////////
const Market = () => {
  return (
    <>
      <Heading title="بازار" />
      <List
        sx={{
          height: "auto",
          display: "flex",
          padding: "16px 0",
          flexDirection: "column",
          gap: { xs: "8px", sm: "0" },
        }}
      >
        {MarketItems.map((item) => (
          <Box key={item.id}>
            <ListComponent data={item} />
          </Box>
        ))}
      </List>
    </>
  );
};

export default Market;
