import { Box, Typography } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const Heading = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Typography
        sx={{
          color: "#fff",
          textWrap: "nowrap",
          padding: "4px 8px",
          lineHeight: "18px",
          fontSize: ".875rem",
          borderRadius: "6px",
          background: "#D1232A",
          fontWeight: { xs: "500", sm: "700" },
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "4px",
          background: "linear-gradient(270deg, #D1232A 0%, #FFF4F5 100%)",
        }}
      ></Box>
    </Box>
  );
};

export default Heading;
