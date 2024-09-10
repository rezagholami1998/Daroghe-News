import { Stack, Link, Chip } from "@mui/material";
import Heading from "../../ReUseableComponent/Heading";
/////////////////////////////////////////////////////////////////////
const requirementsItems = [
  {
    id: "1",
    name: "اخبار تازه",
  },
  {
    id: "2",
    name: "خرید بیت کوین",
  },
  {
    id: "3",
    name: "نصب اپلیکیشن",
  },
  {
    id: "4",
    name: "پرسپولیس",
  },
  {
    id: "5",
    name: "استقلال",
  },
  {
    id: "6",
    name: "رزرو هتل فلای تودی",
  },
  {
    id: "7",
    name: "خلافی خودرو",
  },
  {
    id: "8",
    name: "نهال گردو",
  },
  {
    id: "9",
    name: "احیای چاه",
  },
  {
    id: "10",
    name: "احیای چاه‌ کم‌بازده",
  },
  {
    id: "11",
    name: "تور استانبول",
  },
  {
    id: "12",
    name: "علوم پزشکی",
  },
  {
    id: "13",
    name: "وام دانشجویی",
  },
  {
    id: "14",
    name: "پارتیشن اداری",
  },
  {
    id: "15",
    name: "رزرو هتل قشم",
  },
  {
    id: "16",
    name: "تحصیل در کانادا",
  },
  {
    id: "17",
    name: "بوکینگ",
  },
  {
    id: "18",
    name: "دستگاه جوش لیزری",
  },
];
/////////////////////////////////////////////////////////////////////
const Requirements = () => {
  return (
    <>
      <Heading title="نیازمندی ها" />
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", gap: "8px", padding: "16px 0" }}
      >
        {requirementsItems.map((item) => (
          <Link
            key={item.id}
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              "&:hover .MuiChip-root": {
                color: "#770C11",
                background: "#f3e5e5",
                border: "1px solid #D1232A",
              },
            }}
          >
            <Chip
              label={item.name}
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: "1px solid transparent",
              }}
            />
          </Link>
        ))}
      </Stack>
    </>
  );
};
export default Requirements;
