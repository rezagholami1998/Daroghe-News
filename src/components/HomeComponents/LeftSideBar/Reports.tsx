import {
  Heading,
  CarouselComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
import { Box } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const reportsItems = [
  {
    id: "1",
    description: "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
  {
    id: "2",
    description: "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
  {
    id: "3",
    description: "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
  {
    id: "4",
    description: "افزایش ۵۳ درصدی اعطای تسهیلات به دانشجویان دانشگاه‌های علوم پزشکی",
    src: "./src/assets/images/reports-1.png",
  },
];
/////////////////////////////////////////////////////////////////////
const Reports = () => {
  return (
    <>
      <Heading title="گزارشات" />
      <Box sx={{padding:"16px 0"}}>
      <CarouselComponent data={reportsItems} />
      </Box>
    </>
  );
};

export default Reports;
