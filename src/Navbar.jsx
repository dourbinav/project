import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar w-full h-10  bg-black   flex items-center overflow:hidden sm:gap-4 sm:justify-center">
      
      <div className="flex  gap-2 w-4/5   max-w-screen-lg justify-around items-center">
        <div className="Search-bar  px-4  ">
          <input type="text" className="outline-none rounded-sm" />
        </div>

        <ul className="flex text-[14px] space-x-4 justify-between overflow:hidden  invisible sm:visible text-white">
          <li >Categories</li>
          <li >websites Builder</li>
          <li >Todays deals</li>
        </ul>
      </div>
    </div>
  );
}
