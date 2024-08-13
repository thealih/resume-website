import { FC } from "react";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { BiSearch } from "react-icons/bi";

const Navbar: FC = () => {
  return (
    <div className="p-5 ">
      <div className="flex justify-between">
        <div>سلام به همه!</div>
        <BiSearch className="font-bold text-4xl rounded-full border-black" />
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
