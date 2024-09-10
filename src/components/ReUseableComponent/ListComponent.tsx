import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
/////////////////////////////////////////////////////////////////////
const ListComponent = ({ data }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            gap: "8px",
            padding: "0",
            alignItems: "baseline",
            justifyContent: "flex-start",
            "&.MuiButtonBase-root-MuiButton-root": {
              minWidth: "100px",
            },
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
            secondary={data.title || data.description}
            sx={{
              fontWeight: "500",
              textAlign: "justify",
              "&.MuiListItemText-root .MuiTypography-root": {
                fontSize: { xs: ".75rem", sm: ".875rem" },
                color: "#080F18",
              },
              "&:hover .MuiTypography-root": {
                color: "#D1232A",
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};
export default ListComponent;
