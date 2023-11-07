import React from "react";
import netflix from "../../images/netflix.png";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
  return (
    <div className="w-[100%] mx-auto  fixed top-0">
      <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
        <figure>
          <img src={netflix} alt="logoImage" className="w-[148px]" />
        </figure>
        <div className="flex justify-end gap-[10px] items-center">
          <div className="relative">
            <LanguageIcon className="text-white absolute left-[2px] top-[5px]" />
            <select className="bg-black p-[9px 10px] text-white border-[1px] border-white cursor-pointer sm:p-[5px_25px] p-[5px_20px]">
              <option>English</option>
              <option>Urdu</option>
            </select>
          </div>
          <button className="bg-[red] text-white p-[3px_15px] outline-none rounded-[7px] hover:bg-black">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
