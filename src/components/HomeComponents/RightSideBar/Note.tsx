import { Box, Stack } from "@mui/material";
import {
  Heading,
  NotePeople,
} from "../../ReUseableComponent/AllReuseableComponent";
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
];
/////////////////////////////////////////////////////////////////////
const Note = () => {
  return (
    <>
      <Heading title="یادداشت" />
      <Stack direction="column" sx={{ gap: "8px", padding: "16px 0" }}>
        {NoteItems.map((item) => (
          <Box key={item.id}>
            <NotePeople data={item} />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Note;
