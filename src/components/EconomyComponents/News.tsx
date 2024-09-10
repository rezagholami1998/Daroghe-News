import MainNews from "./MainNews";
import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSidebar";
import { Box, Container } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const News = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: "4px", sm: "16px" },
        paddingBottom: { xs: "4px", sm: "32px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: "20px",
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
