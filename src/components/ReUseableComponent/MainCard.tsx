import { Box, Typography, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const MainCard = ({ data }) => {
  return (
    <>
      <Link
        sx={{
          gap: "8px",
          height: "100%",
          display: "flex",
          cursor: "pointer",
          textDecoration: "none",
          flexDirection: "column",
          "&:hover > .MuiTypography-root": {
            color: "#D1232A",
          },
        }}
      >
        <Box
          component="img"
          sx={{ width: "100%", height: "150px", borderRadius: "8px" }}
          src={data.src}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#080F18",
            fontWeight: "700",
            lineHeight: "25px",
            textAlign: "justify",
            fontSize: { xs: ".875rem", sm: "1.05rem" },
          }}
        >
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", flexGrow: "1", justifyContent: "end" }}>
          <Typography
            sx={{
              color: "#646464",
              lineHeight: "22px",
              textAlign: "justify",
              fontSize: { xs: ".75rem", sm: ".875rem" },
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "#D1232A",
                fontWeight: "700",
                lineHeight: "22px",
                textAlign: "justify",
                fontSize: { xs: ".75rem", sm: ".875rem" },
              }}
            >
              {data.pastTense} |{" "}
            </Typography>
            {data.description}
          </Typography>
        </Box>
      </Link>
    </>
  );
};
export default MainCard;
