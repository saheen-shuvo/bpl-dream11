import PropTypes from 'prop-types';
const Navbar = ({price}) => {
  return (
    <div className="flex justify-between items-center mt-2 lg:mt-6 mx-2 lg:mx-20">
      <div className="dropdown block md:hidden lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <img
            className="block md:hidden w-10"
            src="./images/logo.png"
            alt=""
          />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
      </div>
      <div className="">
        <img
          className="hidden lg:block w-14"
          src="./images/logo.png"
          alt=""
        />
      </div>
      <div className="flex gap-8 items-center">
        <ul className="hidden md:flex menu menu-horizontal px-1 gap-2 text-base font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <a className="btn btn-sm lg:btn-md bg-transparent border-2 text-base">{price} Coin <img src="./images/coin.png" alt="" />
        </a>
      </div>
    </div>
  );
};

Navbar.propTypes ={
  price: PropTypes.func
}

export default Navbar;
