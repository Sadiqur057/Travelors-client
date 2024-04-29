import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-base-200  bottom-0 ">
      <div className=" flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 sm:w-[90%] md:w-5/6">
        <div className="lg:w-1/3">
          <Link to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
              <img className="p-1" src="/logo.png" alt="" />
            </div>
            <span className="self-center text-2xl text-c-primary font-semibold">
              Travelors
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-10">
          <div className="space-y-3 sm:col-span-2">
            <h3 className="tracking-wide font-semibold uppercase ">Travels </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Tourists
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Visitors
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Packages
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:col-span-2">
            <h3 className="uppercase font-semibold ">Pages</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tourist-spots">Travel Spots</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:col-span-3">
            <h3 className="tracking-wide font-semibold uppercase ">
              Contact us
            </h3>
            <div>
              <div className="flex flex-col justify-start space-y-1 mt-3">
                <p className="flex gap-2 overflow-hidden items-center">
                  <span className="text-lg text-c-primary">
                    <MdEmail />
                  </span>
                  <span>Travelors@mail.com</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className=" text-[15px] text-c-primary">
                    <FaPhone />
                  </span>
                  <span>+8801712453211</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:col-span-3">
            <div className="uppercase font-semibold">Social media</div>
            <div className="flex justify-start space-x-4 cursor-pointer">
              <FaTwitter className="text-c-primary text-xl cursor-pointer" />
              <FaFacebook className="text-c-primary text-xl cursor-pointer" />
              <RiInstagramFill className="text-c-primary text-[21px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6 text-sm text-center ">
        &copy; 2024 Travelors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
