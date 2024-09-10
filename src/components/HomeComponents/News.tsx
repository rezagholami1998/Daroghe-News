import { Box, Container } from "@mui/material";
import MainNews from "./MainNewsCenter/MainNews";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
/////////////////////////////////////////////////////////////////////
const News = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: "20px", md: "42px" },
        paddingBottom: { xs: "20px", md: "30px" },
      }}
    >
      <Box
        sx={{
          gap: "20px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "3fr 9fr", lg: "3fr 7fr 3fr" },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <RightSideBar />
        </Box>
        <Box>
          <MainNews />
        </Box>
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <LeftSideBar />
        </Box>
      </Box>
    </Container>
  );
};

export default News;
