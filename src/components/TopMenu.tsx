import {
  WifiIcon,
  PhoneIcon,
  CloseIcon,
  SearchIcon,
  RocketIcon,
  PeopleIcon,
  WeatherIcon,
  ArchiveIcon,
  ReligiousTimesIcon,
  ListResponsiveIcon,
} from "../assets/iconComponent/ExportIcons";
import {
  Box,
  List,
  Stack,
  Button,
  AppBar,
  Drawer,
  Toolbar,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuPopover";
/////////////////////////////////////////////////////////////////////
const TopMenu = () => {
  const pages = [
    {
      id:1,
      linkName: "آرشیو",
      route: "archive",
      icon: ArchiveIcon,
    },
    {
      id:2,
      linkName: "آب و هوا",
      route: "weather",
      icon: WeatherIcon,
    },
    {
      id:3,
      linkName: "اوقات شرعی",
      route: "religious-times",
      icon: ReligiousTimesIcon,
    },
    {
      id:4,
      linkName: "تبلیغات",
      route: "advertising",
      icon: RocketIcon,
    },
    {
      id:5,
      linkName: "Rss",
      route: "rss",
      icon: WifiIcon,
    },
    {
      id:6,
      linkName: "درباره ما",
      route: "about-us",
      icon: PeopleIcon,
    },
    {
      id:7,
      linkName: "تماس با ما",
      route: "contact-us",
      icon: PhoneIcon,
    },
  ];
  /////////////////////////////////////////////////////////////////////
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  //////// Date
  const date = new Date();
  const irDate = date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const enDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const partsFa = irDate.replace(",", "").split(" ");
  const formattedDateFa = `${partsFa[3]} ${partsFa[2]} ${partsFa[1]} ${partsFa[0]}`;
  const partsEn = enDate.replace(",", "").split(" ");
  const formattedDateEn = ` ${partsEn[2]} ${partsEn[1]} ${partsEn[0]}`;
  /////////////////////////////////////////////////////////////////////
  const DrawerList = (
    <>
      <Stack
        sx={{
          padding: "12px 24px",
          flexDirection: "row",
          background: "#D1232A",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h6" sx={{ fontWeight: "500", color: "#FFF" }}>
          منو
        </Typography>
        <Box
          onClick={() => setOpen(false)}
          sx={{ display: "flex", cursor: "pointer" }}
        >
          <Box component={CloseIcon}></Box>
        </Box>
      </Stack>
      <List
        sx={{
          width: "100%",
          zIndex: "1000",
          rowGap: "12px",
          display: "grid",
          background: "#fff",
          gridTemplateColumns: "repeat(2,1fr)",
          padding: { xs: "16px 5px", sm: "16px 24px" },
        }}
      >
        {menuItems?.map((item) => (
          <ListItem
            key={item.id}
            to={`${item.route}`}
            component={Link}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            <ListItemButton
              sx={{ display: "flex", gap: { xs: "8px", sm: "16px" } }}
            >
              <ListItemIcon
                sx={{
                  "&.MuiListItemIcon-root": {
                    minWidth: "0px",
                  },
                }}
              >
                <item.icon color="#D1232A" width="24px" height="24px" />
              </ListItemIcon>
              <ListItemText
                primary={item.linkName}
                primaryTypographyProps={{
                  style: {
                    color: "#212121",
                    textAlign: "right",
                    fontSize: ".875rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
  return (
    <>
      <AppBar
        position="static"
        sx={{
          display: { xs: "block", sm: "none", lg: "block" },
          background: { xs: "#D1232A", sm: "#212121" },
          padding: { xs: "2px 20px", sm: "2px 40px" },
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            "&": {
              minHeight: "30px",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                gap: "16px",
                padding: "13px 0",
              }}
            >
              <Button
                onClick={toggleDrawer(true)}
                sx={{
                  "&.MuiButton-root": {
                    minWidth: "24px",
                    padding: "0",
                  },
                }}
              >
                <ListResponsiveIcon />
              </Button>
              <Button
                component={Link}
                to={"/search"}
                sx={{
                  "&.MuiButton-root": {
                    minWidth: "24px",
                    padding: "0",
                  },
                }}
              >
                <SearchIcon color="#fff" />
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "8px",
                alignItems: "center",
              }}
            >
              {pages.map((item) => (
                <Button
                  component={Link}
                  to={`/${item.route}`}
                  key={item.id}
                  sx={{
                    gap: "8px",
                    color: "#fff",
                    fontSize: "0.75rem",
                    lineHeight: "14px",
                    display: "flex",
                    minWidth: "auto",
                    alignItems: "center",
                  }}
                >
                  <item.icon color="#fff" width="16px" height="16px" />
                  {item.linkName}
                </Button>
              ))}
            </Box>
            <Typography
              sx={{ fontSize: "0.75rem", lineHeight: "14px", color: "#fff" }}
            >
              {formattedDateFa} - {formattedDateEn}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            right: "0",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};
export default TopMenu;
