import { Box, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const ColumnCard = ({ data }) => {
  return (
    <>
      <Link
        sx={{
          gap: "8px",
          width: "100%",
          display: "flex",
          cursor: "pointer",
          textDecoration: "none",
          flexDirection: "column",
          "&:hover .css-csugrx-MuiTypography-root": {
            color: "#D1232A",
          },
        }}
      >
        <Box
          component="img"
          src={data.src}
          sx={{ width: "100%", height: "150px", borderRadius: "8px" }}
        />
        <Typography
          sx={{
            color: "#080F18",
            fontWeight: "500",
            lineHeight: "25px",
            fontSize: ".875rem",
            textAlign: "justify",
          }}
        >
          {data.description}
        </Typography>
      </Link>
    </>
  );
};

export default ColumnCard;
