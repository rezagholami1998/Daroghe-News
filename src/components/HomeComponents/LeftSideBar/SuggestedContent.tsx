import {
  Heading,
  SidebarCards,
} from "../../ReUseableComponent/AllReuseableComponent";
import { Box } from "@mui/material";
/////////////////////////////////////////////////////////////////////
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
const SuggestedContent = () => {
  return (
    <>
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

export default SuggestedContent;
