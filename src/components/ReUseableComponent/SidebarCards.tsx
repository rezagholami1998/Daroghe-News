import { Box, Typography, Link } from "@mui/material";
import PlayMovieIcon from "../../assets/iconComponent/PlayMovieIcon";
/////////////////////////////////////////////////////////////////////
const SidebarCards = ({ data, playMovieIcon = false }) => {
  return (
    <>
      <Link
        key={data.id}
        sx={{
          gap: "8px",
          padding: "8px",
          display: "flex",
          cursor: "pointer",
          borderRadius: "8px",
          textDecoration: "none",
          flexDirection: "column",
          boxShadow: "0px 5px 12px 0px #919EAB52",
          "&:hover .MuiTypography-root": {
            color: "#D1232A",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={data.src}
              sx={{ width: "100%", borderRadius: "8px",height:"100px" }}
            />
            {playMovieIcon && (
              <Box
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Box component={PlayMovieIcon}></Box>
              </Box>
            )}
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#080F18",
              fontWeight: "500",
              fontSize: ".875rem",
              textAlign: "justify",
            }}
          >
            {data.title}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default SidebarCards;
