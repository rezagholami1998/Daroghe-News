import {
  Heading,
  PeopleNote,
  ListComponent,
} from "../ReUseableComponent/AllReuseableComponent";
import { Box, Chip, Link, List, Stack } from "@mui/material";
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
  {
    id: "7",
    description: "ادبیات داستانی",
  },
  {
    id: "8",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "9",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "10",
    description: "ادبیات داستانی",
  },
  {
    id: "11",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "12",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "13",
    description: "ادبیات داستانی",
  },
  {
    id: "14",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "15",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "16",
    description: "ادبیات داستانی",
  },
  {
    id: "17",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "18",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "19",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "20",
    description: "ادبیات داستانی",
  },
  {
    id: "21",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "22",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "23",
    description: "دیپلماسی فرهنگی",
  },
  {
    id: "24",
    description: "ادبیات داستانی",
  },
  {
    id: "25",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "26",
    description: "دیپلماسی فرهنگی",
  },
];
const NoteItems = [
  {
    id: "1",
    name: "حسین علایی",
    note: "حوثی ها و جنگ غزه و مداخله نظامی آمریکا در دریای سرخ",
    src: "./src/assets/images/note-1.png",
  },
  {
    id: "2",
    name: "علی احمدی",
    note: "مخاطرات «دوقطبی‌سازی کاذب» در مسیر انتخابات",
    src: "./src/assets/images/note-2.png",
  },
  {
    id: "3",
    name: "حسین علایی",
    note: "نگاهی به عملیات طوفان الاقصی و جنگ غزه",
    src: "./src/assets/images/note-3.png",
  },
  {
    id: "4",
    name: "طحان‌نظیف",
    note: "اعلام نتیجه صلاحیت‌ها تحت ۳ عنوان صورت می‌گیرد",
    src: "./src/assets/images/note-4.png",
  },
  {
    id: "5",
    name: "علی احمدی",
    note: "مخاطرات «دوقطبی‌سازی کاذب» در مسیر انتخابات",
    src: "./src/assets/images/note-2.png",
  },
  {
    id: "6",
    name: "حسین علایی",
    note: "نگاهی به عملیات طوفان الاقصی و جنگ غزه",
    src: "./src/assets/images/note-3.png",
  },
  {
    id: "7",
    name: "طحان‌نظیف",
    note: "اعلام نتیجه صلاحیت‌ها تحت ۳ عنوان صورت می‌گیرد",
    src: "./src/assets/images/note-4.png",
  },
  {
    id: "8",
    name: "علی احمدی",
    note: "مخاطرات «دوقطبی‌سازی کاذب» در مسیر انتخابات",
    src: "./src/assets/images/note-2.png",
  },
  {
    id: "9",
    name: "حسین علایی",
    note: "نگاهی به عملیات طوفان الاقصی و جنگ غزه",
    src: "./src/assets/images/note-3.png",
  },
  {
    id: "10",
    name: "طحان‌نظیف",
    note: "اعلام نتیجه صلاحیت‌ها تحت ۳ عنوان صورت می‌گیرد",
    src: "./src/assets/images/note-4.png",
  },
];
/////////////////////////////////////////////////////////////////////
const LeftSidebar = () => {
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
          <>
            <ListComponent data={item} />
          </>
        ))}
      </List>
      <Heading title="یادداشت" />
      <Stack direction="column" sx={{ gap: "8px", padding: "16px 0" }}>
        {NoteItems.map((item) => (
          <Box key={item.id}>
            <PeopleNote data={item} />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default LeftSidebar;
