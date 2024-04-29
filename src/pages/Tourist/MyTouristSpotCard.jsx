import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoPartlySunny } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { MdOutlineSevereCold } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyTouristSpotCard = ({
  touristSpot,
  setMyTouristSpots,
  myTouristSpots,
}) => {
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://travelors-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingTouristSpots = myTouristSpots.filter(
                (touristSpot) => touristSpot._id !== id
              );
              setMyTouristSpots(remainingTouristSpots);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonColor: "#35a483",
              });
            }
          });
      }
    });
  };

  return (
    //     <section className="dark:bg-gray-100 dark:text-gray-800">
    // 	<div className="container flex flex-col mx-auto lg:flex-row">
    // 		<div className="w-full lg:w-1/3" >
    //       <img src={image} alt="" />
    //     </div>
    // 		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
    // 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-600">
    // 				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    // 			</svg>
    // 			<h2 className="text-3xl font-semibold leading-none">Modern solutions to all kinds of problems</h2>
    // 			<p className="mt-4 mb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum rem amet!</p>
    // 			<button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50">Get started</button>
    // 		</div>
    // 	</div>
    // </section>
        <tr className="text-gray-600 text-sm md:text-base">
          <td className="px-2 md:px-6 py-4 whitespace-nowrap text-sm font-medium ">
            {spot_name}
          </td>
          <td className="hidden md:block px-2 md:px-6 py-4 whitespace-nowrap text-sm ">
            {country}
          </td>
          <td className="px-2 md:px-6 py-4 whitespace-nowrap text-sm ">
            ${cost}
          </td>
          <td className="px-2 md:px-6 py-4 whitespace-nowrap text-sm ">
            {travelTime} Days
          </td>
          <td className="px-2 md:px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex gap-2">
            <Link to={`/update/${_id}`}>
              <button className=" rounded-md hover:bg-c-hover bg-c-primary  text-white p-2 md:text-xl">
                <MdModeEdit></MdModeEdit>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className=" rounded-md hover:bg  bg-[#ea4744]  text-white p-2 md:text-xl w-fit"
            >
              <MdDelete></MdDelete>
            </button>
          </td>
        </tr>
  );
};

MyTouristSpotCard.propTypes = {
  touristSpot: PropTypes.object,
};
export default MyTouristSpotCard;
