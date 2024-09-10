import { Box } from "@mui/material";
import {
  Heading,
  SidebarCards,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const specialDayItems = [
  {
    id: "1",
    title: "یازده میلیون بمب متحرک در تهران + جزئیات",
    src: "./src/assets/images/specialsDay-1.png",
  },
  {
    id: "2",
    title: "ما اجازه نمی‌دهیم که واردات موبایل انحصاری شود",
    src: "./src/assets/images/specialsDay-2.png",
  },
  {
    id: "3",
    title: "از رانت‌های سیاه یا سفید چه می دانید؟",
    src: "./src/assets/images/specialsDay-3.png",
  },
  {
    id: "4",
    title: "ما اجازه نمی‌دهیم که واردات موبایل انحصاری شود",
    src: "./src/assets/images/specialsDay-4.png",
  },
];
/////////////////////////////////////////////////////////////////////
const SpecialsDay = () => {
  return (
    <>
      <Heading title="ویژه های روز" />
      <Box
        sx={{
          gap: "8px",
          display: "grid",
          padding: "16px 0",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {specialDayItems.map((item) => (
            <SidebarCards data={item} />
        ))}
      </Box>
    </>
  );
};
export default SpecialsDay;
