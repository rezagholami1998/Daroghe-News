import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Button, Container, List, Stack } from "@mui/material";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
import ListComponent from "../components/ReUseableComponent/ListComponent";
import DatePickerAndSelect from "../components/ReUseableComponent/DatePickerAndSelect";
/////////////////////////////////////////////////////////////////////
const archiveItems = [
  {
    id: "1",
    description: "اطلاعات آگهی باید واقعی، دقیق و درست باشد.",
  },
  {
    id: "2",
    description: "آگهی‌هایی که قوانین داخلی را نقض می‌کنند، منتشر نمی‌شوند.",
  },
  {
    id: "3",
    description: "اطلاعات تماس و جزئیات ضروری برای ارتباط با فروشنده درج شود.",
  },
  {
    id: "4",
    description:
      "محتوای آگهی نباید حاوی تهمت، افترا، توهین یا مطالب غیراخلاقی باشد. phd آغاز شد",
  },
  {
    id: "5",
    description:
      "کیفیت گرافیکی بنرهای طراحی شده باید تایید بخش تبلیغات سایت را جلب کند.",
  },
  {
    id: "6",
    description:
      "هرگونه آگهی مرتبط با فعالیت‌های غیرقانونی یا مورد تحریم قرار گرفته ممنوع است.",
  },
  {
    id: "7",
    description:
      "پرداخت هزینه های مربوط به انتشار آگهی باید به صورت معتبر و رسمی انجام شود..",
  },
  {
    id: "8",
    description:
      "تبلیغات در زمینه پزشکی و محصولات بهداشتی نیاز به مجوز تبلیغ از سازمان پزشکی دارند.",
  },
  {
    id: "9",
    description:
      "تخفیف‌ها فقط در شرایط خاص نظیر سفارش آگهی برای بیش از سه ماه و یا سفارش رپرتاژ با تعداد زیاد، ممکن است ارائه شود.",
  },
  {
    id: "10",
    description:
      "بنرهایی که چشمک زننده یا حجیم هستند، پذیرفته نمی‌شوند. همچنین، تغییرات فریم در گیف‌های متحرک باید حداقل 4 ثانیه باقی بمانند.",
  },
  {
    id: "11",
    description:
      "عکس‌ها و محتوای چندرسانه‌ای آگهی باید مربوط به محصول یا خدمات موردنظر باشد، و همچنین باید حقوق مالکیت معنوی را رعایت کنند.",
  },
];
const archiveFilterOptions = [
  {
    id: 1,
    option: "مشهد",
  },
  {
    id: 2,
    option: "تهران",
  },
  {
    id: 3,
    option: "شمال",
  },
];
/////////////////////////////////////////////////////////////////////
const ArchivePage = () => {
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="آرشیو پایگاه خبری داروغه " />
          <Stack
            direction="column"
            sx={{ padding: "16px 0 32px", gap: "16px" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "4px",
                display: { xs: "none", sm: "block" },
                background: "linear-gradient(270deg, #D1232A 0%, #FFF4F5 100%)",
              }}
            ></Box>
            <Stack direction="column" gap="4px">
              <Stack
                direction="column"
                sx={{
                  gap: "16px",
                  padding: "16px",
                  background: "#81818133",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <Box
                  sx={{
                    gap: "16px",
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(3,1fr)",
                      lg: "repeat(6,1fr)",
                    },
                  }}
                >
                  <DatePickerAndSelect
                    label="سرویس"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    label="موضوع"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    label="قسمت"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    DatePickerComponent
                    label="از تاریخ"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    DatePickerComponent
                    label="تا تاریخ"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    label="تعداد نتایج"
                    data={archiveFilterOptions}
                  />
                </Box>
                <Button
                  sx={{
                    color: "#fff",
                    padding: "12px 0",
                    fontWeight: "500",
                    borderRadius: "8px",
                    textAlign: "center",
                    background: "#D1232A",
                    boxShadow: " 0px 8px 16px 0px #FF48423D",
                    "&:hover": {
                      background: "#8B0000",
                    },
                  }}
                >
                  نمایش
                </Button>
              </Stack>
              <Stack direction="column" gap="4px">
                <Stack
                  direction="column"
                  sx={{
                    gap: "16px",
                    padding: "16px",
                    background: "#81818133",
                    borderRadius: "0 0 16px 16px",
                  }}
                >
                  <List
                    sx={{
                      height: "auto",
                      display: "flex",
                      padding: "16px 0",
                      flexDirection: "column",
                      gap: { xs: "8px", sm: "0" },
                    }}
                  >
                    {archiveItems.map((item) => (
                      <Box key={item.id}>
                        <ListComponent data={item} />
                      </Box>
                    ))}
                  </List>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default ArchivePage;
