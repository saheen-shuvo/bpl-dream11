import React from "react";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center mt-6 mx-20">
  <div className="">
    <img className="w-14" src="../../public/images/logo.png" alt="" />
  </div>
  <div className="flex gap-8 items-center">
    <ul className="menu menu-horizontal px-1 gap-2 text-base font-semibold">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
    <a className="btn bg-transparent border-2 text-base">Coin <img src="../../public/images/coin.png" alt="" /></a>
  </div>
</div>
  );
};

export default Navbar;
