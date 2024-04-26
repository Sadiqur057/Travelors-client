import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOutUser, loading } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("Logged out successfully");
    });
  };
  const activeStyles =
    "lg:border-b transition duration-300 ease-in-out px-3 py-2 border-c-primary text-c-black font-bold hover:bg-c-primary hover:text-[#fff] text-[15px] my-2 lg:my-0 mx-0 hover:rounded";
  const inactiveStyles =
    "px-3 py-2 font-medium border-y border-transparent   mx-1 text-c-black hover:font-black-800 rounded hover:bg-base-200  text-[15px] my-2 lg:my-0 mx-0";

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Home
      </NavLink>
      <NavLink
        to="/tourist-spot"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        All Tourist Spot
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? activeStyles : inactiveStyles
            }
          >
            Add Tourist Spot
          </NavLink>
          <NavLink
            to="/my-tourist-spot"
            className={({ isActive }) =>
              isActive ? activeStyles : inactiveStyles
            }
          >
            MyList
          </NavLink>
        </>
      )}
    </>
  );

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {links}
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-full overflow-hidden">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="text-c-primary mr-4 cursor-pointer font-bold text-2xl py-2"
          >
            <Link to='/'>Travellors</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user && (
                <div
                  tabIndex={0}
                  role="button"
                  className="  btn-circle avatar tooltip tooltip-left border"
                  data-tip={user?.displayName}
                >
                  <div className="w-full rounded-full">
                    <Link to="/profile">
                      <img
                        className="w-full h-full"
                        alt="Profile Picture"
                        src={user?.photoURL}
                      />
                    </Link>
                  </div>
                </div>
              )}
              {user ? (
                <button
                  className="btn bg-c-primary text-white md::text-[15px] font-bold hidden lg:block"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : loading ? (
                <span className="loading loading-spinner loading-md mr-10"></span>
              ) : (
                <>
                  {" "}
                  <Link to="/login" className="hidden lg:block">
                    <button className="btn bg-c-primary  rounded-xl hover:bg-c-hover text-white md:text-[15px] font-bold mr-2">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" className="hidden lg:block">
                    <button className="btn bg-c-primary  rounded-xl hover:bg-c-hover text-white md:text-[15px] font-bold ">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="mr-4">{navList}</div>
          <div className="flex items-center gap-x-1">
            {user ? (
              <button
                className="btn bg-c-primary text-white md::text-[15px] font-bold"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : loading ? (
              <span className="loading loading-spinner loading-md mr-10"></span>
            ) : (
              <>
                {" "}
                <Link to="/login" className="">
                  <button className="btn bg-c-primary  rounded-xl hover:bg-c-hover text-white md:text-[15px] font-bold mr-2">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-c-primary  rounded-xl hover:bg-c-hover text-white md:text-[15px] font-bold ">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
