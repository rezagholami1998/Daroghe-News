import { Box } from "@mui/material";
import {
  Heading,
  CarouselComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const InterviewItems = [
  {
    id:"1",
    title:"نمایندگانی که در نطق های پیش از دستور دغدغه های ملت را مطالبه می کردند رد صلاحیت شدند!؟",
    src: "./src/assets/images/interview-1.png",
  },
  {
    id:"2",
    title:"نمایندگانی که در نطق های پیش از دستور دغدغه های ملت را مطالبه می کردند رد صلاحیت شدند!؟",
    src: "./src/assets/images/interview-1.png",
  },
  {
    id:"3",
    title:"نمایندگانی که در نطق های پیش از دستور دغدغه های ملت را مطالبه می کردند رد صلاحیت شدند!؟",
    src: "./src/assets/images/interview-1.png",
  },
  {
    id:"4",
    title:"نمایندگانی که در نطق های پیش از دستور دغدغه های ملت را مطالبه می کردند رد صلاحیت شدند!؟",
    src: "./src/assets/images/interview-1.png",
  },
];
/////////////////////////////////////////////////////////////////////
const Interview = () => {
  return (
    <>
      <Heading title="مصاحبه" />
      <Box sx={{padding:"16px 0"}}>
      <CarouselComponent  data={InterviewItems}/>
      </Box>
    </>
  );
};

export default Interview;
