import Note from "./Note";
import Market from "./Market";
import Editorial from "./Editorial";
import Interview from "./Interview";
import MoviesDay from "./MoviesDay";
import SpecialsDay from "./SpecialsDay";
/////////////////////////////////////////////////////////////////////
const RightSideBar = () => {
  return (
    <>
      <Note />
      <Editorial />
      <Interview/>
      <SpecialsDay />
      <Market />
      <MoviesDay />
    </>
  );
};

export default RightSideBar;