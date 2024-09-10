import { Box } from "@mui/material";
import {
  Heading,
  SidebarCards,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const MoviesDayItems = [
  {
    id: "1",
    title: "رهبر اپوزیسیون در کره‌جنوبی از ناحیه گردن مورد ضربه چاقو قرار گرفت",
    src: "./src/assets/images/movie-1.png",
  },
  {
    id: "2",
    title: "قرارداد حفاری ۹ حلقه چاه میدان گازی پارس جنوبی امضا شد",
    src: "./src/assets/images/movie-1.png",
  },
  {
    id: "3",
    title: "قیمت نفت در نخستین معامله روز ۲۰۲۴ افزایش یافت",
    src: "./src/assets/images/movie-1.png",
  },
  {
    id: "4",
    title: "کلیات طرح جامع توسعه در منطقه مکران به تصویب رسید",
    src: "./src/assets/images/movie-1.png",
  },
];
/////////////////////////////////////////////////////////////////////
const MoviesDay = () => {
  return (
    <>
      <Heading title="ویدئو‌های روز" />
      <Box
        sx={{
          gap: "8px",
          display: "grid",
          padding: "16px 0",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {MoviesDayItems.map((item) => (
            <SidebarCards data={item} playMovieIcon />
        ))}
      </Box>
    </>
  );
};

export default MoviesDay;
