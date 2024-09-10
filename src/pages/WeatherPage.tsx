import {
  Box,
  List,
  Stack,
  Button,
  ListItem,
  Container,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Weather from "../assets/images/weather.png";
import SunnyIcon from "../assets/images/sunnyIcon.png";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
import DatePickerAndSelect from "../components/ReUseableComponent/DatePickerAndSelect";
/////////////////////////////////////////////////////////////////////
const cities = [
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
const todayWeatherTitle = [
  "وضعيت",
  "كمينه",
  "بیشینه",
  "آخرين بروز رساني",
  "سرعت باد",
  "رطوبت",
  "طلوع آفتاب",
  "غروب آفتاب",
];
const WeatherPage = () => {
  const tomorrowTitle = todayWeatherTitle?.slice(0, 3);
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="آب و هوا" />
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
            <Box
              sx={{
                display: "grid",
                gap: { xs: "20px", sm: "40px" },
                gridTemplateColumns: { xs: "1fr", lg: "6fr 6fr" },
              }}
            >
              <Stack
                sx={{
                  gap: "4px",
                  flexDirection: "column",
                  order: { xs: "2", lg: "1" },
                }}
              >
                <Stack
                  sx={{
                    gap: "16px",
                    padding: "16px",
                    flexDirection: "column",
                    background: "#81818133",
                    borderRadius: "16px 16px 0 0",
                  }}
                >
                  <Stack
                    sx={{
                      gap: "16px",
                      alignItems: "flex-end",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Box sx={{ flexGrow: "1", width: "100%" }}>
                      <DatePickerAndSelect label="شهر" data={cities} />
                    </Box>
                    <Button
                      sx={{
                        color: "#fff",
                        fontWeight: "500",
                        padding: "12px 0",
                        textAlign: "center",
                        borderRadius: "8px",
                        background: "#D1232A",
                        width: { xs: "100%", sm: "130px" },
                        boxShadow: " 0px 8px 16px 0px #FF48423D",
                        "&:hover": {
                          background: "#8B0000",
                        },
                      }}
                    >
                      نمایش
                    </Button>
                  </Stack>
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
                    }}
                  >
                    امروز
                  </Typography>
                  <Box
                    sx={{ border: "2px solid #D1232A", opacity: "80%" }}
                  ></Box>
                  <Stack direction="column" gap="8px">
                    <List
                      sx={{
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {todayWeatherTitle.map((title, index) => (
                        <ListItem
                          key={index}
                          disablePadding
                          sx={{
                            gap: "8px",
                            padding: "0",
                            alignItems: "baseline",
                            justifyContent: "flex-start",
                            "&:hover": {
                              background: "transparent",
                            },
                          }}
                        >
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
                            secondary={`${title} :`}
                            sx={{
                              fontWeight: "500",
                              fontSize: ".875rem",
                              textAlign: "justify",
                              "&.MuiListItemText-root .MuiTypography-root": {
                                color: "#080F18",
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Stack>
                <Stack
                  direction="column"
                  sx={{
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "0 0 16px 16px",
                    background: "#81818133",
                  }}
                >
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "600",
                      lineHeight: "24px",
                      color: "#080F18",
                    }}
                  >
                    امروز
                  </Typography>
                  <Box
                    sx={{ border: "2px solid #D1232A", opacity: "80%" }}
                  ></Box>
                  <Stack direction="column" gap="8px">
                    <List
                      sx={{
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {tomorrowTitle.map((title, index) => (
                        <ListItem
                          key={index}
                          disablePadding
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "baseline",
                            padding: "0",
                            gap: "8px",
                            "&:hover": {
                              background: "transparent",
                            },
                          }}
                        >
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
                            secondary={`${title} :`}
                            sx={{
                              textAlign: "justify",
                              fontSize: ".875rem",
                              fontWeight: "500",
                              "&.MuiListItemText-root .css-w13mul-MuiTypography-root":
                                {
                                  color: "#080F18",
                                },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Stack>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  order: { xs: "1", lg: "2" },
                }}
              >
                <Box
                  component="img"
                  src={Weather}
                  sx={{
                    borderRadius: "16px",
                    width: "100%",
                    height: { xs: "130px", sm: "180px", lg: "100%" },
                  }}
                />
                <Box
                  component="img"
                  src={SunnyIcon}
                  sx={{
                    position: "absolute",
                    width: { xs: "52px", sm: "82px", lg: "250px" },
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};
export default WeatherPage;
