import { Box } from "@mui/material";
import {
  Heading,
  ColumnCard,
} from "..//ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const NewsDetailsItems = [
  {
    id: "1",
    description: "مهاجرت ساکنان روستایی در استان ایلام به استرالیا",
    src: "./src/assets/images/companiesNews-1.png",
  },
  {
    id: "2",
    description: "رایزنی‌های استاندار کردستان برای صادرات سیب‌زمینی استان",
    src: "./src/assets/images/companiesNews-2.png",
  },
  {
    id: "3",
    description: "مازندران گره‌گشایی دولت از اَبر طرح بیمارستانی مازندران",
    src: "./src/assets/images/companiesNews-3.png",
  },
  {
    id: "4",
    description: "مهاجرت ساکنان روستایی در استان ایلام به استرالیا",
    src: "./src/assets/images/companiesNews-1.png",
  },
  {
    id: "5",
    description: "رایزنی‌های استاندار کردستان برای صادرات سیب‌زمینی استان",
    src: "./src/assets/images/companiesNews-2.png",
  },
  {
    id: "6",
    description: "مازندران گره‌گشایی دولت از اَبر طرح بیمارستانی مازندران",
    src: "./src/assets/images/companiesNews-3.png",
  },
];
/////////////////////////////////////////////////////////////////////
const NewsDetails = () => {
  return (
    <>
      <Box sx={{ paddingTop: "16px" }}>
        <Heading title="مشروح اخبار سیاست" />
        <Box
          sx={{
            gap: "16px",
            display: "grid",
            padding: "16px 0",
            gridColumn: "1/3",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3,1fr)",
            },
          }}
        >
          {NewsDetailsItems?.map((item) => (
            <Box key={item.id}>
              <ColumnCard data={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default NewsDetails;
