import {
  Box,
  List,
  Link,
  Stack,
  ListItem,
  Container,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import Logo from "../assets/images/logo.png";
import Enamad from "../assets/images/enamad.png";
import ListFooter from "./ReUseableComponent/ListFooter";
import {
  SmsIcon,
  BaleIcon,
  CallIcon,
  EitaaIcon,
  AparatIcon,
  GlobalIcon,
  LocationIcon,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon
} from "../assets/iconComponent/ExportIcons"

/////////////////////////////////////////////////////////////////////
const quickAccessItems = [
  {
    id: "1",
    link: "political",
    ListName: "سیاسی",
  },
  {
    id: "2",
    link: "economy",
    ListName: "اقتصادی",
  },
  {
    id: "3",
    ListName: "جهان",
  },
  {
    id: "4",
    ListName: "فرهنگی",
  },
  {
    id: "5",
    ListName: "اجتماعی",
  },
  {
    id: "6",
    ListName: "ورزشی",
  },
  {
    id: "7",
    ListName: "فناوری",
  },
];
const specialPagesItems = [
  {
    id: "1",
    ListName: "مقاله",
  },
  {
    id: "2",
    ListName: "گزارش",
  },
  {
    id: "3",
    ListName: "جهان",
  },
  {
    id: "4",
    ListName: "یادداشت",
  },
  {
    id: "5",
    ListName: "اینفوگرافیک",
  },
  {
    id: "6",
    ListName: "عکس خبری",
  },
  {
    id: "7",
    ListName: "چندرسانه‌ای",
  },
];
const contactUsItems = [
  {
    id: "1",
    ListName: "خبرنامه",
  },
  {
    id: "2",
    ListName: "درباره ما",
  },
  {
    id: "3",
    ListName: "پیوندها",
  },
  {
    id: "4",
    ListName: "تماس با ما",
  },
  {
    id: "5",
    ListName: "تبلیغات بنری",
  },
  {
    id: "6",
    ListName: "معرفی روزنامه",
  },
];
const infoItems = [
  {
    id: "1",
    icons: GlobalIcon,
    listName: "info@daroghe.ir",
  },
  {
    id: "2",
    icons: CallIcon,
    listName: "تلفن: ۳۵۰۳۴۳۴۳",
  },
  {
    id: "3",
    icons: SmsIcon,
    listName: "کدپستی: ۴۳۲۴۳۲۴۳۲۴",
  },
  {
    id: "4",
    icons: LocationIcon,
    listName: "نشانی: مشهد، خیابان احمدآباد، احمد آباد ۱۳",
  },
];
/////////////////////////////////////////////////////////////////////
const Footer = () => {
  return (
    <>
      <Box sx={{ padding: "32px 0", background: "#D1232A" }}>
        <Container sx={{ maxWidth: "xl" }}>
          <Stack
            sx={{
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Stack direction="column" gap="16px">
              <Box
                component="img"
                src={Logo}
                sx={{ width: "85px", height: "42px" }}
              />
              <Typography
                sx={{
                  color: "#fff",
                  width: "280px",
                  maxHeight: "100%",
                  fontWeight: "500",
                  lineHeight: "26px",
                  fontSize: ".875rem",
                  textAlign: "justify",
                  display: { xs: "none", sm: "block" },
                }}
              >
                کلیه حقوق مادی و معنوی این سایت متعلق به پایگاه خبری داروغه
                می‌باشد. استفاده از مطالب و تصاویر این پایگاه تنها با ذکر منبع و
                لینک دادن به صفحه مربوطه امکان پذیر است. نظرات کاربران در قسمت
                نظرات خبرها منعکس کننده دیدگاه آن‌هاست و این پایگاه هیچ گونه
                مسئولیتی در قبال آن‌ها ندارد.
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ListFooter title="دسترسی سریع" data={quickAccessItems} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ListFooter title="صفحات ویژه" data={specialPagesItems} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ListFooter title="ارتباط با ما" data={contactUsItems} />
            </Box>
            <Box
              sx={{
                gap: "16px",
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "column" },
              }}
            >
              <Box
                component="img"
                src={Enamad}
                sx={{
                  width: "70px",
                  height: "70px",
                  display: { xs: "block", lg: "none" },
                }}
              />
              <List
                sx={{
                  gap: "16px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {infoItems.map((item) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      "&": {
                        padding: "0",
                      },
                    }}
                  >
                    <ListItemButton
                      sx={{
                        gap: "8px",
                        padding: "0",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        "&:hover": {
                          background: "none",
                          transition: "all .3s ease-in-out",
                          transform: "translate(-7px , 0px)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          "&.MuiListItemIcon-root": {
                            minWidth: "0px",
                          },
                        }}
                      >
                        <Box component={item.icons} />
                      </ListItemIcon>
                      <ListItemText
                        secondary={item.listName}
                        sx={{
                          fontWeight: "500",
                          fontSize: ".875rem",
                          textAlign: "justify",
                          "&.MuiListItemText-root .css-w13mul-MuiTypography-root":
                            {
                              color: "#fff",
                            },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box
              component="img"
              src={Enamad}
              sx={{
                width: "110px",
                height: "120px",
                display: { xs: "none", lg: "block" },
              }}
            />
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{ background: "#212121", padding: { xs: "15px 0", sm: "5px 0" } }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "16px", sm: "0" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "space-between", md: "center" },
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: "16px",
              height: "16px",
              display: { xs: "flex", md: "none" },
              width: { sm: "200px", lg: "265px" },
            }}
          >
            <Link href="#">
              <WhatsappIcon color="#fff" width="16px" height="16px" />
            </Link>
            <Link href="#">
              <InstagramIcon color="#fff" width="16px" height="16px" />
            </Link>
            <Link href="#">
              <BaleIcon color="#fff" width="16px" height="16px" />
            </Link>
            <Link href="#">
              <FacebookIcon color="#fff" width="16px" height="16px" />
            </Link>
            <Link href="#">
              <EitaaIcon color="#fff" width="16px" height="16px" />
            </Link>
            <Link href="#">
              <AparatIcon color="#fff" width="16px" height="16px" />
            </Link>
          </Stack>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "0.75rem",
              display: { xs: "none", md: "inline-block" },
            }}
          >
            تمامی حقوق برای وبسایت انتشار خبر داروغه می باشد .{" "}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "0.75rem",
              display: { xs: "inline-block", md: "none" },
            }}
          >
            طراحی و تولید : کلیک{" "}
          </Typography>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
