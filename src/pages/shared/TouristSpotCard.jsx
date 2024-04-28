import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoPartlySunny } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { MdOutlineSevereCold } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";


const TouristSpotCard = ({ touristSpot }) => {
  const {
    _id,
    visitors,
    seasonality,
    spot_name,
    country,
    location,
    cost,
    travelTime,
    image,
  } = touristSpot || {};
  let seasonalityIcon = <IoPartlySunny></IoPartlySunny>;
  if (seasonality === "Winter") {
    seasonalityIcon = <MdOutlineSevereCold></MdOutlineSevereCold>;
  } else if (seasonality === "Summer") {
    seasonalityIcon = <IoMdSunny></IoMdSunny>;
  } else {
    seasonalityIcon = <IoPartlySunny></IoPartlySunny>;
  }
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
          <span className="text-2xl text-c-primary">{seasonalityIcon}</span>
        </div>
        <div className="mb-2 mt-1">
          <p className="flex items-center gap-2 pt-0 pb-2 text-[15px]">
            <span> Specially for {seasonality}</span>
          </p>
        </div>
        <div>
          <div className="flex gap-4 justify-between">
            <p className="flex items-center gap-2 py-2 ">
              <AiFillDollarCircle className="text-c-primary text-[20px]"></AiFillDollarCircle>{" "}
              <span>{cost} / person</span>
            </p>
            <p className="flex items-center gap-2 py-2 ">
              <IoTime className="text-c-primary text-xl"></IoTime>{" "}
              <span>{travelTime} Days</span>
            </p>
          </div>
          <div className="flex gap-4 justify-between w-full mr-4">
            <p className="flex items-center gap-2 py-2 ">
              <FaPeopleGroup className="text-c-primary text-[20px]"></FaPeopleGroup>{" "}
              <span>{visitors} / year</span>
            </p>
            <p className="flex items-center gap-2 py-2 self-end">
              <FaMapLocationDot className="text-c-primary text-xl"></FaMapLocationDot>{" "}
              <span>{country}</span>
            </p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="mt-0 pt-0">
        <Link to={`/spot-details/${_id}`}>
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
