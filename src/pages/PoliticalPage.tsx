import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/PoliticalComponents/News";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
/////////////////////////////////////////////////////////////////////
const PoliticalPage = () => {
    return ( 
        <>
        <Header/>
        <HeadingPages title="سیاسی"/>
        <News />
        <Footer />
        </>
     );
}
 
export default PoliticalPage;