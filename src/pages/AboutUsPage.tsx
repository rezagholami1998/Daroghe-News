import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
/////////////////////////////////////////////////////////////////////
import {
  Box,
  List,
  Stack,
  ListItem,
  Container,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const aboutUsItems = [
  {
    id: "1",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
];
const aboutAuthorities = [
  {
    id: "1",
    title: "صاحب امتیاز",
    description: "حامد سلیمانی پور",
  },
  {
    id: "2",
    title: "مدیر مسئول",
    description: "حامد سلیمانی پور",
  },
];
/////////////////////////////////////////////////////////////////////
const AboutUsPage = () => {
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="درباره پایگاه خبری داروغه" />
          <Stack direction="column" gap={2} sx={{ padding: "16px 0 32px" }}>
            <Box
              sx={{
                width: "100%",
                height: "4px",
                display: { xs: "none", sm: "block" },
                background: "linear-gradient(270deg, #D1232A 0%, #FFF4F5 100%)",
              }}
            ></Box>
            <Stack direction="column" spacing={1}>
              {aboutUsItems.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    color: "#646464",
                    lineHeight: "22px",
                    fontSize: ".875rem",
                    textAlign: "justify",
                  }}
                >
                  {item.description}
                </Typography>
              ))}
            </Stack>
            <List
              sx={{
                gap: "16px",
                display: "inline-flex",
                flexDirection: "column",
              }}
            >
              {aboutAuthorities?.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{
                    gap: "12px",
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <ListItemIcon
                      sx={{
                        width: "8px",
                        height: "8px",
                        background: "#D1232A",
                        "&.MuiListItemIcon-root": {
                          minWidth: "0px",
                        },
                      }}
                    ></ListItemIcon>
                    <ListItemText
                      secondary={item.title}
                      sx={{
                        textAlign: "justify",
                        "& .MuiTypography-root": {
                          color: "#080F18",
                          fontWeight: "600",
                        },
                      }}
                    />
                  </Stack>
                  <ListItemText
                    secondary={item.description}
                    sx={{
                      marginRight: "14px",
                      textAlign: "justify",
                      "& .MuiTypography-root": {
                        color: "#646464",
                        fontSize: ".875rem",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default AboutUsPage;
