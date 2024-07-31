import { Link } from "react-router-dom";
import routeConstants from "../../constants/routeConstants";
import { Icons } from "../../assets/icons";

const Navbar = () => {
  return (
    <nav className="max-w-[1400px] mx-auto px-3 py-2 text-white gap-x-12 flex justify-between items-center border-[1px] border-solid border-white/15 rounded-xl bg-white-03 relative">
      <Link to={routeConstants.HOME}>
        <img className="max-w-[76px]" src={Icons.logo} alt="" />
      </Link>
      <div className="flex items-center justify-between gap-4 flex-1">
        <ul className="flex items-center gap-x-12">
          <li>
            <Link
              className="text-base font-normal hover:opacity-85 transition-all ease-in-out duration-300"
              to=""
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal hover:opacity-85 transition-all ease-in-out duration-300"
              to=""
            >
              New arrivals
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal hover:opacity-85 transition-all ease-in-out duration-300"
              to=""
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal hover:opacity-85 transition-all ease-in-out duration-300"
              to=""
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/login"
            className="rounded-lg inline-flex items-center justify-center text-center min-h-[52px] cursor-pointer px-6 text-timberwolf hover:opacity-90 transition-all ease-in-out duration-300 text-base"
          >
            Log in
          </Link>
          <Link
            to="/login"
            className="text-white rounded-lg inline-flex items-center justify-center text-center min-h-[52px] cursor-pointer px-6 bg-onyx font-semibold hover:opacity-90 transition-all ease-in-out duration-300 text-base"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
