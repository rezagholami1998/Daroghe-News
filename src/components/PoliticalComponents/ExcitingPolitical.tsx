import { Box, List } from "@mui/material";
import {
  Heading,
  ListComponent,
} from "..//ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const excitingPoliticalItems = [
  {
    id: "1",
    description:
      "چند ایرانی در عربستان زندانی هستند؟جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
  {
    id: "2",
    description:
      "چند ایرانی در عربستان زندانی هستند؟جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
  {
    id: "3",
    description:
      "چند ایرانی در عربستان زندانی هستند؟جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
  {
    id: "4",
    description:
      "چند ایرانی در عربستان زندانی هستند؟جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
  {
    id: "5",
    description:
      "چند ایرانی در عربستان زندانی هستند؟جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
  {
    id: "6",
    description:
      "چند ایرانی در عربستان زندانی هستند؟جزئیات همکاری‌های ایران و عربستان در موضوع فلسطین",
  },
];
/////////////////////////////////////////////////////////////////////
const ExcitingPolitical = () => {
  return (
    <>
      <Heading title="اخبار داغ سیاسی" />
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3,1fr)",
          },
          height: "auto",
          padding: "16px 0",
          flexDirection: "column",
          gap: { xs: "8px", sm: "16px" },
          justifyContent: "space-between",
        }}
      >
        {excitingPoliticalItems.map((item) => (
          <Box key={item.id}>
            <ListComponent data={item} />
          </Box>
        ))}
      </List>
    </>
  );
};

export default ExcitingPolitical;
