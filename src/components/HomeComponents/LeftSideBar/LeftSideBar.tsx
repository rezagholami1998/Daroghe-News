import Journal from "./Journal";
import Reports from "./Reports";
import LatestNews from "./LatestNews";
import NewsPackage from "./NewsPackage";
import Requirements from "./Requirements";
import SuggestedContent from "./SuggestedContent";
import LatestContentsProvince from "./LatestContentsProvince";
/////////////////////////////////////////////////////////////////////
const LeftSideBar = () => {
    return ( 
        <>
        <Journal />
        <LatestNews />
        <Reports />
        <Requirements />
        <LatestContentsProvince />
        <NewsPackage />
        <SuggestedContent />
        </>
     );
}
 
export default LeftSideBar;