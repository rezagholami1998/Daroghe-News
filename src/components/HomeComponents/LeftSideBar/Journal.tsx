import { Box } from "@mui/material";
import {
  Heading,
  CarouselComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
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
/////////////////////////////////////////////////////////////////////
const Journal = () => {
  return (
    <>
      <Heading title="نشریه" />
      <Box sx={{ padding: "16px 0" }}>
        <CarouselComponent data={journalItems} />
      </Box>
    </>
  );
};

export default Journal;
