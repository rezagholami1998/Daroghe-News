import { Box, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const NotePeople = ({ data }) => {
  return (
    <>
      <Link
        sx={{
          gap: "8px",
          display: "flex",
          cursor: "pointer",
          textAlign: "justify",
          textDecoration: "none",
          "&:hover .MuiTypography-root": {
            color: "#D1232A",
          },
        }}
      >
        <Box
          component="img"
          src={data.src}
          sx={{ borderRadius: "8px", width: "56px", height: "70px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#080F18",
              fontWeight: "600",
              lineHeight: "24px",
              fontSize: "0.75rem",
            }}
          >
            {data.note}
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "#D1232A",
              fontWeight: "500",
              lineHeight: "22px",
              fontSize: "0.75rem",
            }}
          >
            {data.name}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default NotePeople;
