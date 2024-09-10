import {
  Heading,
  ColumnCard,
  ListComponent
} from "../../ReUseableComponent/AllReuseableComponent";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Tab, Tabs, Link, List } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const companiesNewsItems = [
  {
    id: "1",
    description:
      "بررسی جایگاه آموزشگاه های فنی و حرفه ای در توسعه اقتصاد و ایجاد اشتغال پایدار",
    src: "./src/assets/images/fastNews-1.png",
  },
  {
    id: "2",
    description: "مهاجرت ساکنان روستایی در استان ایلام به استرالیا",
    src: "./src/assets/images/companiesNews-1.png",
  },
  {
    id: "3",
    description: "رایزنی‌های استاندار کردستان برای صادرات سیب‌زمینی استان",
    src: "./src/assets/images/companiesNews-2.png",
  },
  {
    id: "4",
    description: "مازندران گره‌گشایی دولت از اَبر طرح بیمارستانی مازندران",
    src: "./src/assets/images/companiesNews-3.png",
  },
];
const favoritesItems = [
  {
    id: "1",
    title: "بیشتر تصادف‌های شهر تهران در این بزرگراه تهران رخ می دهد",
    createDate: "",
  },
  {
    id: "2",
    title: "هشدار پلیس به مردم درباره لینک‌های اینترنت رایگان دولت + جزئیات",
    createDate: "",
  },
  {
    id: "3",
    title: "نحوه فعالسازی اینترنت رایگان دولت + راهنمای تصویری",
    createDate: "",
  },
  {
    id: "4",
    title: "استقلال بعد از پرسپولیس مضحکه جدید دربی | شکایت از حمل پیراهن؟",
    createDate: "",
  },
];
/////////////////////////////////////////////////////////////////////
const CustomTabs = styled(Tabs)({
  display: "flex",
  gap: "8px",
});
const CustomTab = styled(Tab)({
  padding: "5px 8px",
  minWidth: "50px",
  background: "#D8D9DA",
  borderRadius: "6px",
  minHeight: "auto",
  fontSize: ".875rem",
  lineHeight: "21px",
  color: "#080F18",
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
/////////////////////////////////////////////////////////////////////
const CompaniesNews = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const itemsWithoutOne = companiesNewsItems.slice(1);
  ////////////////////
  return (
    <>
      <Heading title="اخبار سازمان و شرکت ها" />
      {/*First Card */}
      <Box
        sx={{
          gap: "16px",
          display: "grid",
          padding: "16px 0",
          overflow: "hidden",
          gridTemplateColumns: { xs: "1fr", sm: "6fr 4fr" },
        }}
      >
        <Link sx={{ position: "relative", cursor: "pointer" }}>
          <Box
            component="img"
            src={companiesNewsItems[0].src}
            sx={{
              width: "100%",
              borderRadius: "8px",
              filter: "brightness(0.9)",
              height: { xs: "270px", sm: "100%" },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: "1rem",
              padding: "0 15px",
              fontWeight: "500",
              textAlign: "justify",
              position: "absolute",
              bottom: { xs: "30px", sm: "20px" },
            }}
          >
            {companiesNewsItems[0].description}
          </Typography>
        </Link>
        {/* Tab */}
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              color: "#770C11",
              fontWeight: "500",
              lineHeight: "21px",
              fontSize: ".875rem",
            }}
          >
            برگزیده ها
          </Typography>
          <CustomTabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: 1,
              },
              padding: "8px 0 16px",
              "& .css-5dkyly-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                color: "#fff",
                fontWeight: "700",
                background: "#D1232A",
              },
              "& .css-5dkyly-MuiButtonBase-root-MuiTab-root": {
                lineHeight: "21px",
              },
            }}
          >
            <CustomTab label="سال" {...a11yProps(0)} />
            <CustomTab label="ماه" {...a11yProps(1)} />
            <CustomTab label="روز" {...a11yProps(2)} />
          </CustomTabs>
          <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-0`}
            aria-labelledby={`simple-tab-0`}
          >
            {value === 0 && (
              <List
                sx={{
                  padding:"0",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "8px", sm: "0" },
                }}
              >
                {favoritesItems.map((item) => (
                  <Box key={item.id}>
                    <ListComponent data={item} />
                  </Box>
                ))}
              </List>
            )}
          </Box>
          <Box
            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-1`}
            aria-labelledby={`simple-tab-1`}
          >
            {value === 1 && (
              <List
                sx={{
                  padding:"0",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "8px", sm: "0" },
                }}
              >
                {favoritesItems.map((item) => (
                  <Box key={item.id}>
                    <ListComponent data={item} />
                  </Box>
                ))}
              </List>
            )}
          </Box>
          <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-2`}
            aria-labelledby={`simple-tab-2`}
          >
            {value === 2 && (
              <List
                sx={{
                  padding:"0",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "8px", sm: "0" },
                }}
              >
                {favoritesItems.map((item) => (
                  <Box key={item.id}>
                    <ListComponent data={item} />
                  </Box>
                ))}
              </List>
            )}
          </Box>
        </Box>
        {/* other Cards */}
        <Box
          sx={{
            gap: "16px",
            display: "grid",
            gridColumn: { xs: "", sm: "1/3" },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3,1fr)",
            },
          }}
        >
          {itemsWithoutOne?.map((item) => (
            <Box key={item.id}>
              <ColumnCard data={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CompaniesNews;
