import * as React from "react";
import { Link } from "react-router-dom";
import MenuPopover from "./MenuPopover";
import {SearchIcon} from "../assets/iconComponent/ExportIcons";
import { Box, Button, AppBar, Toolbar, TextField } from "@mui/material";
//////////////////////////////////
const pages = [
  {
    id: 1,
    route: "",
    pageName: "صفحه نخست",
  },
  {
    id: 2,
    route: "political",
    pageName: "سیاسی",
  },
  {
    id: 3,
    route: "economy",
    pageName: "اقتصاد",
  },
  {
    id: 4,
    route: "",
    pageName: "بین الملل",
  },
  {
    id: 5,
    route: "",
    pageName: "ورزشی",
  },
  {
    id: 6,
    route: "",
    pageName: "استان ها",
  },
  {
    id: 7,
    route: "",
    pageName: "جامعه",
  },
  {
    id: 8,
    route: "",
    pageName: "فرهنگ و هنر",
  },
  {
    id: 9,
    route: "",
    pageName: "چندرسانه ای",
  },
];
const Navbar = () => {
  //popover
  const [showMenu, setShowMenu] = React.useState(false);
  ///////////////////////////////
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
            padding: "0px 40px",
            background: "#212121",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              "&": {
                minHeight: "46px",
              },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: "8px", height: "100%" }}>
                <Button
                  onMouseOver={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                  sx={{
                    color: "#fff",
                    height: "46px",
                    fontSize: "1rem",
                    borderRadius: "0",
                    minHeight: "100%",
                    textWrap: "nowrap",
                    lineHeight: "13px",
                    paddingLeft: "130px",
                    paddingRight: "20px",
                    background: "#D1232A",
                    "&:hover": {
                      background: "#D1232A",
                    },
                  }}
                >
                  همه دسته بندی ها
                </Button>
                <Box
                  sx={{
                    height: "100%",
                    gap: { lg: "0px", xl: "8px" },
                    display: { xs: "none", lg: "flex" },
                  }}
                >
                  {pages.map((item) => (
                    <Button
                      component={Link}
                      key={item.pageName}
                      to={`/${item.route}`}
                      onMouseLeave={() => setShowMenu(false)}
                      sx={{
                        color: "#fff",
                        height: "46px",
                        minHeight: "100%",
                        borderRadius: "0",
                        lineHeight: "14px",
                        textWrap: "nowrap",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item.pageName}
                    </Button>
                  ))}
                </Box>
              </Box>
              <TextField
                size="small"
                variant="standard"
                placeholder="جستجو"
                InputProps={{
                  disableUnderline: true,
                }}
                inputProps={{
                  style: {
                    padding: "0",
                    color: "#fff",
                    fontSize: "1rem",
                  },
                }}
                sx={{
                  width: "100%",
                  padding: "7px",
                  borderRadius: "5px",
                  fontFamily: "inherit",
                  background: "#565656",
                  border: "1px solid #FFF",
                  display: { xs: "none", md: "block" },
                  maxWidth: { md: "200px", lg: "267px" },
                }}
              />
              <Button
                to={"/search"}
                component={Link}
                sx={{
                  padding: "0",
                  justifyContent: "flex-end",
                  display: { xs: "inline-flex", md: "none" },
                  "&.MuiButton-root": {
                    minWidth: "24px",
                  },
                }}
              >
                <Box component={SearchIcon}></Box>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {showMenu && (
          <MenuPopover
            onMouseOver={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          />
        )}
      </Box>
    </>
  );
};

export default Navbar;
