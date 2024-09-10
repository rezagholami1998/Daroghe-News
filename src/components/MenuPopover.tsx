import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  WifiIcon,
  ListIcon,
  WorldIcon,
  SportIcon,
  PhoneIcon,
  StateIcon,
  PeopleIcon,
  RocketIcon,
  HealthIcon,
  MarketIcon,
  ReportsIcon,
  SocietyIcon,
  ArticleIcon,
  EconomyIcon,
  CultureIcon,
  PictureIcon,
  JournalIcon,
  HousingIcon,
  WeatherIcon,
  ArchiveIcon,
  PoliticalIcon,
  AccidentsIcon,
  InterviewIcon,
  universityIcon,
  TechnologyIcon,
  MultimediaIcon,
  AdvertisingIcon,
  RequirementsIcon,
  OrganizationIcon,
  InternationalIcon,
  ReligiousTimesIcon,
} from "../assets/iconComponent/ExportIcons";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
/////////////////////////////////////////////////////////////////////
export const menuItems = [
  {
    id: 1,
    route: "",
    icon: ListIcon,
    linkName: "صفحه نخست",
  },
  {
    id: 2,
    route: "",
    icon: StateIcon,
    linkName: "استان",
  },
  {
    id: 3,
    route: "",
    icon: TechnologyIcon,
    linkName: "علم و فناوری",
  },
  {
    id: 4,
    route: "",
    icon: AccidentsIcon,
    linkName: "حوادث",
  },
  {
    id: 5,
    route: "",
    icon: MarketIcon,
    linkName: "بازار",
  },
  {
    id: 6,
    route: "",
    icon: SportIcon,
    linkName: "ورزشی",
  },
  {
    id: 7,
    icon: EconomyIcon,
    linkName: "اقتصاد",
    route: "economy",
  },
  {
    id: 8,
    route: "",
    icon: WorldIcon,
    linkName: "جهان",
  },
  {
    id: 9,
    route: "",
    icon: AdvertisingIcon,
    linkName: "آگهی دولتی",
  },
  {
    id: 10,
    route: "",
    icon: ReportsIcon,
    linkName: "گزارشات",
  },
  {
    id: 11,
    route: "",
    icon: ArticleIcon,
    linkName: "مقاله",
  },
  {
    id: 12,
    route: "",
    icon: HealthIcon,
    linkName: "سلامت",
  },
  {
    id: 13,
    route: "",
    icon: SocietyIcon,
    linkName: "جامعه",
  },
  {
    id: 14,
    icon: InternationalIcon,
    linkName: "بین الملل",
    route: "",
  },
  {
    id: 15,
    route: "",
    icon: CultureIcon,
    linkName: "فرهنگ و هنر",
  },
  {
    id: 16,
    route: "",
    icon: InterviewIcon,
    linkName: "مصاحبه",
  },
  {
    id: 17,
    route: "",
    icon: universityIcon,
    linkName: "دانشگاه",
  },
  {
    id: 18,
    route: "",
    icon: PictureIcon,
    linkName: "عکس و فیلم",
  },
  {
    id: 19,
    icon: PoliticalIcon,
    linkName: "سیاسی",
    route: "political",
  },
  {
    id: 20,
    route: "",
    icon: HousingIcon,
    linkName: "مسکن و شهری",
  },
  {
    id: 21,
    route: "",
    icon: OrganizationIcon,
    linkName: "سازمان و شرکت‌ها",
  },
  {
    id: 22,
    route: "",
    icon: RequirementsIcon,
    linkName: "نیازمندی‌ها",
  },
  {
    id: 23,
    route: "",
    icon: JournalIcon,
    linkName: "مجله و نشریه",
  },
  {
    id: 24,
    route: "",
    icon: MultimediaIcon,
    linkName: "چندرسانه‌ای",
  },
  {
    id: 25,
    linkName: "آرشیو",
    route: "archive",
    icon: ArchiveIcon,
  },
  {
    id:26,
    route: "weather",
    icon: WeatherIcon,
    linkName: "آب و هوا",
  },
  {
    id:27,
    linkName: "اوقات شرعی",
    route: "religious-times",
    icon: ReligiousTimesIcon,
  },
  {
    id:28,
    icon: RocketIcon,
    linkName: "تبلیغات",
    route: "advertising",
  },
  {
    id:29,
    linkName: "Rss",
    route: "rss",
    icon: WifiIcon,
  },
  {
    id:30,
    icon: PeopleIcon,
    route: "about-us",
    linkName: "درباره ما",
  },
  {
    id:31,
    icon: PhoneIcon,
    route: "contact-us",
    linkName: "تماس با ما",
  },
];
/////////////////////////////////////////////////////////////////////
const MenuPopover = ({ onMouseOver, onMouseLeave }) => {
  const smallSize = useMediaQuery("(max-width:1200px)");
  const popoverLinks = smallSize ? menuItems : menuItems.slice(0, 24);
  return (
    <List
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      sx={{
        gap: "8px",
        width: "100%",
        zIndex: "1000",
        display: "grid",
        background: "#fff",
        position: "absolute",
        padding: "16px 24px",
        borderBottom: "1px solid #D8D9DA",
        boxShadow: "0px 25px 26px 0px #2121211A",
        gridTemplateColumns: {
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(6,1fr)",
        },
      }}
    >
      {popoverLinks?.map((item) => (
        <ListItem
          key={item.id}
          disablePadding
          sx={{ justifyContent: "center" }}
        >
          <ListItemButton
            component={Link}
            to={`/${item.route}`}
            sx={{ display: "flex", gap: "16px" }}
          >
            <ListItemIcon
              sx={{
                "&.MuiListItemIcon-root": {
                  minWidth: "0px",
                },
              }}
            >
              <item.icon width="24px" height="24px" color="#D1232A"/>
            </ListItemIcon>
            <ListItemText
              sx={{ textAlign: "right", fontSize: ".875rem", color: "#212121" }}
              primary={item.linkName}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
export default MenuPopover;
