import { Box } from "@mui/material";
import MostViewed from "./MostViewed";
import NewsDetails from "./NewsDetail";
import OtherPolitical from "./OtherPolitical";
import ExcitingPolitical from "./ExcitingPolitical";
/////////////////////////////////////////////////////////////////////
const MainNews = () => {
    return ( 
        <>
        <Box>
        <MostViewed />
        <NewsDetails/>
        <ExcitingPolitical />
        <OtherPolitical/>
        </Box>
        </>
     );
}
 
export default MainNews;