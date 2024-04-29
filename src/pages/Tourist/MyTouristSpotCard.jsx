import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";

import Swal from "sweetalert2";

const MyTouristSpotCard = ({
  touristSpot,
  setMyTouristSpots,
  myTouristSpots,
}) => {
  const {
    _id,

    spot_name,
    country,
    cost,
    travelTime,

  } = touristSpot || {};

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
                text: "This tourist spot has been deleted.",
                icon: "success",
                confirmButtonColor: "#35a483",
              });
            }
          });
      }
    });
  };

  return (

        <tr className="text-gray-600 text-sm md:text-base">
          <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm font-medium ">
            {spot_name}
          </td>
          <td className="hidden md:block px-2 md:px-6 py-3 whitespace-nowrap text-sm ">
            {country}
          </td>
          <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm ">
            ${cost}
          </td>
          <td className="px-2 md:px-6 py-3 whitespace-nowrap text-sm ">
            {travelTime} Days
          </td>
          <td className="px-2 md:px-6 py-3 whitespace-nowrap text-end text-sm font-medium flex gap-2">
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
  myTouristSpots: PropTypes.object,
  setMyTouristSpots: PropTypes.func
};
export default MyTouristSpotCard;
