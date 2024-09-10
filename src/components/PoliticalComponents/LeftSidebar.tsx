import { Box, List, Stack } from "@mui/material";
import {
  Heading,
  PeopleNote,
  ListComponent,
  CarouselComponent
} from "..//ReUseableComponent/AllReuseableComponent";
/////////////////////////////////////////////////////////////////////
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
const editorialItems = [
  {
    id: "1",
    title: "مرحله‌ی جدیدی از طرح احیای چاه‌های کم‌بازده اجرا می‌شود",
    description:
      "رئیس پارک فناوری و نوآوری نفت و گاز از اجرای فاز جدید طرح احیای چاه‌های کم‌بازده در چهار میدان نفتی مناطق نفت‌خیز جنوب با حضور شرکت‌های دانش‌بنیان خبر داد.",
    src: "./src/assets/images/editorial-1.png",
  },
  {
    id: "2",
    title: "مرحله‌ی جدیدی از طرح احیای چاه‌های کم‌بازده اجرا می‌شود",
    description:
      "رئیس پارک فناوری و نوآوری نفت و گاز از اجرای فاز جدید طرح احیای چاه‌های کم‌بازده در چهار میدان نفتی مناطق نفت‌خیز جنوب با حضور شرکت‌های دانش‌بنیان خبر داد.",
    src: "./src/assets/images/editorial-1.png",
  },
  {
    id: "3",
    title: "مرحله‌ی جدیدی از طرح احیای چاه‌های کم‌بازده اجرا می‌شود",
    description:
      "رئیس پارک فناوری و نوآوری نفت و گاز از اجرای فاز جدید طرح احیای چاه‌های کم‌بازده در چهار میدان نفتی مناطق نفت‌خیز جنوب با حضور شرکت‌های دانش‌بنیان خبر داد.",
    src: "./src/assets/images/editorial-1.png",
  },
  {
    id: "4",
    title: "مرحله‌ی جدیدی از طرح احیای چاه‌های کم‌بازده اجرا می‌شود",
    description:
      "رئیس پارک فناوری و نوآوری نفت و گاز از اجرای فاز جدید طرح احیای چاه‌های کم‌بازده در چهار میدان نفتی مناطق نفت‌خیز جنوب با حضور شرکت‌های دانش‌بنیان خبر داد.",
    src: "./src/assets/images/editorial-1.png",
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
    description: "بازار نشر",
  },
  {
    id: "8",
    description: "جنگ بی‌تعارف",
  },
  {
    id: "9",
    description: "دفاع مقدس",
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
    description: "بازار نشر",
  },
  {
    id: "14",
    description: "جنگ بی‌تعارف",
  },
  {
    id: "15",
    description: "دفاع مقدس",
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
    description: "بازار نشر",
  },
  {
    id: "20",
    description: "جنگ بی‌تعارف",
  },
  {
    id: "21",
    description: "دفاع مقدس",
  },
  {
    id: "22",
    description: "ادبیات داستانی",
  },
  {
    id: "23",
    description: "مطالعات رسانه‌ای",
  },
  {
    id: "24",
    description: "دیپلماسی فرهنگی",
  },
];
/////////////////////////////////////////////////////////////////////
const LeftSidebar = () => {
  return (
    <>
      <Heading title="یادداشت" />
      <Stack direction="column" sx={{ gap: "8px", padding: "16px 0" }}>
        {NoteItems.map((item) => (
          <Box key={item.id}>
            <PeopleNote data={item} />
          </Box>
        ))}
      </Stack>
      <Heading title="سرمقاله" />
      <Box sx={{ padding: "16px 0" }}>
        <CarouselComponent data={editorialItems} />
      </Box>
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

export default LeftSidebar;
