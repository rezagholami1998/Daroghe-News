import { Box, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const RowCard = ({ data }) => {
  return (
    <>
      <Link
        sx={{
          gap: "16px",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          textDecoration: "none",
          "&:hover .MuiTypography-root": {
            color: "#D1232A",
          },
        }}
      >
        <Box
          component="img"
          src={data.src}
          sx={{ width: "84px", height: "84px", borderRadius: "8px" }}
        />
        <Typography
          sx={{
            color: "#080F18",
            fontWeight: "500",
            lineHeight: "21px",
            textAlign: "justify",
            fontSize: { xs: ".75rem", sm: ".875rem" },
          }}
        >
          {data.description}
        </Typography>
      </Link>
    </>
  );
};

export default RowCard;
