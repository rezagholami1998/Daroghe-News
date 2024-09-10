import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
import ListReadonly from "../components/ReUseableComponent/ListReadonly";
import { Box, Button, Container, List, Stack, Typography } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const termAdvertisementItems = [
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
/////////////////////////////////////////////////////////////////////
const AdvertisingPage = () => {
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="تبلیغات" />
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
                sx={{
                  gap: "16px",
                  padding: "16px",
                  background: "#81818133",
                  flexDirection: "column",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <Typography
                  component="h5"
                  sx={{
                    color: "#080F18",
                    fontWeight: "600",
                    lineHeight: "24px",
                    fontSize: { xs: ".875rem", sm: "1rem" },
                  }}
                >
                  شرایط درج آگهی در پایگاه خبری داروغه
                </Typography>
                <Box sx={{ border: "2px solid #D1232A", opacity: "80%" }}></Box>
                <List
                  sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {termAdvertisementItems?.map((item) => (
                    <Box key={item.id}>
                      <ListReadonly data={item} />
                    </Box>
                  ))}
                </List>
              </Stack>
              <Stack
                sx={{
                  gap: "16px",
                  padding: "16px",
                  background: "#81818133",
                  flexDirection:"column",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <Typography
                  component="h5"
                  sx={{
                    color: "#080F18",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  تلفن تماس
                </Typography>
                <Box sx={{ border: "2px solid #D1232A", opacity: "80%" }}></Box>
                <Button
                  href="tel:05138469153"
                  sx={{
                    borderRadius: "8px",
                    background: "#118DF0",
                    padding: { xs: "8px", sm: "17px" },
                    "&:hover": {
                      background: "#004AA3",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      gap: "8px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "row" },
                      fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" },
                    }}
                  >
                    برای سفارش هرگونه تبلیغ با شماره
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: { xs: "1rem", md: "1.5rem", lg: "2rem" },
                      }}
                    >
                      ۰۵۱۳۸۴۶۹۱۵۳
                    </Typography>
                    تماس حاصل فرمایید.
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default AdvertisingPage;
