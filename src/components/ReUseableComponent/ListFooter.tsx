import {
  List,
  Stack,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
/////////////////////////////////////////////////////////////////////
const ListFooter = ({ data, title }) => {
  return (
    <>
      <Stack direction="column">
        <Typography sx={{ fontWeight: "700", color: "#fff" }}>
          {title}
        </Typography>
        <List
          sx={{
            gap: "8px",
            display: "flex",
            padding: "16px 0 0",
            flexDirection: "column",
          }}
        >
          {data?.map((item) => (
            <ListItem
              key={item.id}
              component={Link}
              to={`/${item.link}`}
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
                  display: "flex",
                  alignItems: "baseline",
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
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#fff",
                    "&.MuiListItemIcon-root": {
                      minWidth: "0px",
                    },
                  }}
                ></ListItemIcon>
                <ListItemText
                  secondary={item.ListName}
                  sx={{
                    fontWeight: "500",
                    fontSize: ".875rem",
                    textAlign: "justify",
                    "&.MuiListItemText-root .css-w13mul-MuiTypography-root": {
                      color: "#fff",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </>
  );
};

export default ListFooter;
