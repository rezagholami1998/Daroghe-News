import Home from "./pages/Home";
import RssPage from "./pages/RssPage";
import SearchPage from "./pages/SearchPage";
import EconomyPage from "./pages/EconomyPage";
import AboutUsPage from "./pages/AboutUsPage";
import ArchivePage from "./pages/ArchivePage";
import WeatherPage from "./pages/weatherPage";
import ContactUsPage from "./pages/ContactUsPage";
import PoliticalPage from "./pages/PoliticalPage";
import AdvertisingPage from "./pages/AdvertisingPage";
import ReligiousTimesPage from "./pages/ReligiousTimesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//////////////////////////////////////////////////////////////
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/political" element={<PoliticalPage />} />
        <Route path="/economy" element={<EconomyPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/advertising" element={<AdvertisingPage />} />
        <Route path="/rss" element={<RssPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/religious-times" element={<ReligiousTimesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
