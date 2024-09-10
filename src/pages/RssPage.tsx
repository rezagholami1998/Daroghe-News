import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, List, Stack, Typography } from "@mui/material";
import ListReadonly from "../components/ReUseableComponent/ListReadonly";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
/////////////////////////////////////////////////////////////////////
const rssItems = [
  {
    id: "1",
    description: "در وقت و انرژی شما صرفه جویی موثری خواهد داشت.",
  },
  {
    id: "2",
    description:
      "استفاده از rss باعث می‌شود که مقالات شما در شبکه‌های اجتماعی هم بیشتر منتشر شود.",
  },
  {
    id: "3",
    description:
      "محتوای شما را قابل حمل می‌سازد و کاربران می‌توانند برای خواندن آفلاین مقاله هم آن را داشته باشند.",
  },
  {
    id: "4",
    description:
      "میتوانید برای پیدا کردن اخبار یا اطلاعات جدید سایت های بیشتری را در نظر بگیرید و مورد مطالعه قرار دهید.",
  },
  {
    id: "5",
    description:
      "اگر شما ادمین سایت هستید ، محتوای شما را قابل حمل می‌سازد و کاربران می‌توانند برای خواندن آفلاین مقاله هم آن را داشته باشند.",
  },
  {
    id: "6",
    description:
      "به کاربران شما این امکان را می‌دهد که بتوانند مدام از آخرین آپدیت سایت شما خبردار شوند و با کمک rss خوان‌های خود مطالب جدید سایت شما را دنبال کنند.",
  },
  {
    id: "7",
    description:
      "مخفف عبارت Really Simple Syndication یا Rich Site Summary می باشد و پروتکلی برای پیوند ساده فرمت اصلی مورد استفاده برای لینک دادن محتویات وب برای سایت های خبری و بلاگ ها است.",
  },
];
const latestTitlesItems = [
  {
    id: "1",
    title: "تازه ترين عناوين همه بخشها",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "2",
    title: "تازه ترين عناوين سیاسی",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "3",
    title: "تازه ترين عناوين همه بخشها",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "4",
    title: "تازه ترين عناوين بین‌الملل",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "5",
    title: "تازه ترين عناوين گوناگون",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "6",
    title: "تازه ترين عناوين ورزشی",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "7",
    title: "تازه ترين عناوين فرهنگ‌وهنر",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "8",
    title: "تازه ترين عناوين علم‌وفناوری",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "9",
    title: "تازه ترين عناوين جامعه",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "10",
    title: "تازه ترين عناوين عكس",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
  {
    id: "11",
    title: "تازه ترين عناوين فیلم",
    link: "https://www.daroghe.ir/fa/rss/6/mostcommented",
  },
];
const latestTitlesLenght = latestTitlesItems?.length;
/////////////////////////////////////////////////////////////////////
const RssPage = () => {
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="RSS" />
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
            <Stack gap="4px">
              <Stack
                sx={{
                  gap: "16px",
                  padding: "16px",
                  flexDirection: "column",
                  background: "#81818133",
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
                  RSS چیست و چه مزایایی دارد؟
                </Typography>
                <Box sx={{ border: "2px solid #D1232A", opacity: "80%" }}></Box>
                <List
                  sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {rssItems.map((item) => (
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
                  flexDirection: "column",
                  background: "#81818133",
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
                  تازه ترين عناوين
                </Typography>
                <Box sx={{ border: "2px solid #D1232A", opacity: "80%" }}></Box>
                <List
                  sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {latestTitlesItems.map((item, index) => (
                    <>
                      <Box key={item.id}>
                        <ListReadonly data={item} />
                      </Box>
                      {latestTitlesLenght !== index + 1 && (
                        <Box
                          sx={{
                            margin: "4px 0",
                            borderBottom: "2px dashed #BABABA",
                          }}
                        ></Box>
                      )}
                    </>
                  ))}
                </List>
              </Stack>
              <Stack
                direction="column"
                sx={{
                  gap: "16px",
                  padding: "16px",
                  background: "#81818133",
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
                  پربيننده ترين عناوين
                </Typography>
                <Box sx={{ border: "2px solid #D1232A", opacity: "80%" }}></Box>
                <List
                  sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {latestTitlesItems.map((item, index) => (
                    <>
                      <ListReadonly data={item} />
                      {latestTitlesLenght !== index + 1 && (
                        <Box
                          sx={{
                            margin: "4px 0",
                            borderBottom: "2px dashed #BABABA",
                          }}
                        ></Box>
                      )}
                    </>
                  ))}
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default RssPage;
