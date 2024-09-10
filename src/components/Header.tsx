import Navbar from "./Navbar";
import TopMenu from "./TopMenu";
import MainHeader from "./MainHeader";
import TickerWrapper from "./TickerWrapper";
/////////////////////////////////////////////////////////////////////
const Header = () => {
  return (
    <>
      <TopMenu />
      <MainHeader />
      <Navbar />
      <TickerWrapper />
    </>
  );
};
export default Header;