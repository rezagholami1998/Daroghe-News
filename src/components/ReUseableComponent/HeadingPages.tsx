import { Box, Typography } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const HeadingPages = ({ title }: { title: "string" }) => {
  return (
    <>
      <Box
        sx={{
          gap: "8px",
          display: "flex",
          paddingTop: "32px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "35px", sm: "50px" },
            height: "4px",
            background: "linear-gradient(270deg, #FFF4F5 0%, #D1232A 100%)",
          }}
        ></Box>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "#080F18",
            fontWeight: "600",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: { xs: "35px", sm: "50px" },
            height: "4px",
            background: "linear-gradient(270deg, #D1232A 0%, #FFF4F5 100%)",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default HeadingPages;
