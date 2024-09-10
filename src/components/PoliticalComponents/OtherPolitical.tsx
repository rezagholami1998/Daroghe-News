import { Box } from "@mui/material";
import { Heading, RowCard } from "..//ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
const OtherPoliticalItems = [
  {
    id: "1",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!.",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "2",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!.",
    src: "./src/assets/images/counter-3.png",
  },
  {
    id: "3",
    description:
      "درگیری‌های استقلال، آتشی که در پرسپولیس روشن شد و ویرانی سپاهان | قهرمان احتمالی از بین سه مدعی اصلی با یک فرمول ساده!.",
    src: "./src/assets/images/counter-3.png",
  },
];
/////////////////////////////////////////////////////////////////////
const OtherPolitical = () => {
  return (
    <>
      <Heading title="سایر عناوین اخبار سیاسی" />
      <Box
        sx={{
          gap: "8px",
          display: "flex",
          padding: "16px 0",
          flexDirection: "column",
        }}
      >
        {OtherPoliticalItems?.map((item) => (
          <Box key={item.id}>
            <RowCard data={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default OtherPolitical;
