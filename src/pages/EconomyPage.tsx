import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/EconomyComponents/News";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
/////////////////////////////////////////////////////////////////////
const EconomyPage = () => {
    return ( 
        <>
        <Header/>
        <HeadingPages title="اقتصاد"/>
        <News />
        <Footer />
        </>
     );
}
 
export default EconomyPage;
