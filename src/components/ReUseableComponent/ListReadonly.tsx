import {
  Box,
  Link,
  Stack,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
/////////////////////////////////////////////////////////////////////
const ListReadonly = ({ data, divider = false, lengthItms = 0, index = 0 }) => {
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          gap: "8px",
          padding: "0",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "normal", sm: "baseline" },
          justifyContent: { xs: "", sm: "space-between" },
          "&:hover": {
            background: "transparent",
          },
        }}
      >
        <Stack
          sx={{
            gap: "8px",
            flexDirection: "row",
            alignItems: "baseline",
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
            secondary={data.description || data.title}
            sx={{
              fontWeight: "500",
              textAlign: "justify",
              "&.MuiListItemText-root .css-w13mul-MuiTypography-root": {
                color: "#080F18",
                fontSize: { xs: ".75rem", sm: ".875rem" },
              },
            }}
          />
        </Stack>
        <Link
          href={data.link}
          sx={{
            color: "#118DF0",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: { xs: ".75rem", sm: ".875rem" },
          }}
        >
          {data.link}
        </Link>
      </ListItem>
      {divider && lengthItms !== index + 1 && (
        <Box
          sx={{
            margin: "4px 0",
            borderBottom: "2px dashed #BABABA",
          }}
        ></Box>
      )}
    </>
  );
};

export default ListReadonly;
