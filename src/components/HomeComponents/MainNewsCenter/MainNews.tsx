import Counter from "./Counter";
import FastNews from "./FastNews";
import Companies from "./Companies";
import Multimedia from "./Multimedia";
import CompaniesNews from "./CompaniesNews";
import CulturalAndPolitical from "./CulturalAndPolitical";
/////////////////////////////////////////////////////////////////////
const MainNews = () => {
    return ( 
        <>
        <FastNews />
        <Counter />
        <Multimedia />
        <CompaniesNews />
        <CulturalAndPolitical/>
        <Companies />
        </>
     );
}
 
export default MainNews;