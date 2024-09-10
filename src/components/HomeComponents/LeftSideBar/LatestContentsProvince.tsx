import {
  Heading,
  ListComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
import { Box, List } from "@mui/material";
/////////////////////////////////////////////////////////////////////
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
const LatestContentsProvince = () => {
  return (
    <>
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

export default LatestContentsProvince;
