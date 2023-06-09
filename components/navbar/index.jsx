import DesctopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
  return (
    <div className="block">
      <DesctopNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
