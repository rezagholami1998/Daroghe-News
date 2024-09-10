import { Box, List } from "@mui/material";
import {
  Heading,
  ListComponent,
} from "../../ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const NewsPackageItems = [
  {
    id: "1",
    description: "بازار نشر",
  },
  {
    id: "2",
    description: "جنگ بی‌تعارف",
  },
  {
    id: "3",
    description: "دفاع مقدس",
  },
  {
    id: "4",
    description: "ادبیات داستانی",
  },
  {
    id: "5",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "6",
    description: "دیپلماسی فرهنگی",
  },
];
/////////////////////////////////////////////////////////////////////
const NewsPackage = () => {
  return (
    <>
      <Heading title="بسته های ویژه خبری" />
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
          },
          height: "auto",
          padding: "16px 0",
          flexDirection: "column",
          gap: { xs: "8px", sm: "0" },
          justifyContent: "space-between",
        }}
      >
        {NewsPackageItems.map((item) => (
          <Box key={item.id}>
            <ListComponent data={item} />
          </Box>
        ))}
      </List>
    </>
  );
};

export default NewsPackage;
