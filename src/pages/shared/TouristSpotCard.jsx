import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ touristSpot }) => {
  const {
    user,
    spot_name,
    country,
    location,
    description,
    cost,
    travelTime,
    image,
  } = touristSpot || {};

  return (
    <div className="rounded-xl card shadow-md">
      <div className="relative">
        <img
          src={image}
          alt="ui/ux review check"
          className="h-[220px] object-cover w-full object-center rounded-t-xl"
        />
        <div className="!absolute bottom-4 right-4 ">
          <p className="text-base bg-c-primary px-3 py-2 rounded-lg flex items-center gap-2 text-white">
            <FaLocationDot></FaLocationDot> <span>{location}</span>
          </p>
        </div>
      </div>
      <CardBody>
        <div className="flex items-center justify-between">
          <Typography className="font-semibold text-xl">{spot_name}</Typography>
          <Typography className="flex items-center gap-1.5 font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
        <div className="mb-3 mt-1">
          <p className="flex items-center gap-2 pt-0 pb-2 text-[15px]">
            <FaUserAlt className="text-c-primary text-md"></FaUserAlt>{" "}
            <span>{user}</span>
          </p>
        </div>
        <Typography color="gray" className="mb-1">
          {description.slice(0, 65)}...
        </Typography>
        <div className="flex gap-4 flex-wrap justify-between ">
          <div className="flex gap-4">
            <p className="flex items-center gap-2 py-2 ">
              <AiFillDollarCircle className="text-c-primary text-[20px]"></AiFillDollarCircle>{" "}
              <span>{cost}</span>
            </p>
            <p className="flex items-center gap-2 py-2 ">
              <IoTime className="text-c-primary text-xl"></IoTime>{" "}
              <span>{travelTime} Days</span>
            </p>
          </div>
          <p className="flex items-center gap-2 py-2 self-end">
            <FaMapLocationDot className="text-c-primary text-xl"></FaMapLocationDot>{" "}
            <span>{country}</span>
          </p>
        </div>
      </CardBody>
      <CardFooter className="mt-0 pt-0">
        <Link to="/">
          <button className=" rounded-md hover:bg-c-hover bg-c-primary w-full text-white py-[9px]">
            View Details
          </button>
        </Link>
      </CardFooter>
    </div>
  );
};

TouristSpotCard.propTypes = {
  touristSpot: PropTypes.object,
};

export default TouristSpotCard;
