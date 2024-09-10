import {
  Box,
  List,
  Stack,
  Button,
  ListItem,
  Container,
  Typography,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
import DatePickerAndSelect from "../components/ReUseableComponent/DatePickerAndSelect";
/////////////////////////////////////////////////////////////////////
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
const ReligiousTimesItems = [
  "اذان صبح ",
  "طلوع آفتاب",
  "اذان ظهر",
  "غروب آفتاب",
  "اذان مغرب",
];
/////////////////////////////////////////////////////////////////////
const ReligiousTimesPage = () => {
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="اوقات شرعی" />
          <Stack
            direction="column"
            sx={{ padding: "16px 0 32px", gap: "16px", alignItems: "center" }}
          >
            <Box
              sx={{
                height: "4px",
                background: "linear-gradient(270deg, #D1232A 0%, #FFF4F5 100%)",
              }}
            ></Box>
            <Stack
              direction="column"
              gap="4px"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <Stack
                direction="column"
                sx={{
                  gap: "16px",
                  width: "100%",
                  padding: "16px",
                  background: "#81818133",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    alignItems: "flex-end",
                    gap: { xs: "16px", sm: "8px" },
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    width: { xs: "100%", sm: "560px", md: "650px" },
                  }}
                >
                  <DatePickerAndSelect
                    label="استان"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    label="شهر"
                    data={archiveFilterOptions}
                  />
                  <DatePickerAndSelect
                    label="تاریخ"
                    data={archiveFilterOptions}
                  />
                  <Button
                    sx={{
                      color: "#fff",
                      fontWeight: "500",
                      padding: "12px 0",
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
                </Box>
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
                    fontSize: { xs: ".875rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  اوقات شرعی به افق: تهران
                </Typography>
                <Box sx={{ border: "2px solid #D1232A", opacity: "80%" }}></Box>
                <Stack direction="column" gap="8px">
                  <List
                    sx={{
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {ReligiousTimesItems?.map((title, index) => (
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
            </Stack>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default ReligiousTimesPage;
