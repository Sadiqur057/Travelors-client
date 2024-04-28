import { useLoaderData } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const TouristSpotDetails = () => {
  const [loading, setLoading] = useState(true);
  const touristSpotData = useLoaderData();
  const {
    user,
    spot_name,
    country,
    location,
    description,
    cost,
    travelTime,
    seasonality,
    image,
    visitors,
    userPhoto,
  } = touristSpotData || {};

  useEffect(() => {
    if (touristSpotData) {
      setLoading(false);
    }
  }, [touristSpotData]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center">
        <Spinner className="h-12 w-12" color="teal" />
      </div>
    );
  }

  return (
    <section className="body-font mt-6 md:mt-10">
      <div className="w-[90%] md:w-5/6 mx-auto">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <img
            src={image}
            className="w-full object-cover max-h-[440px] lg:rounded"
          />
        </div>
        <div className="flex flex-col md:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-4 md:mt-6  text-lg leading-relaxed w-full lg:w-3/4">
            <h1 className="font-bold text-3xl mb-3">{spot_name}</h1>
            <p className="pb-6 text-gray-700">{description}</p>
            <div className="overflow-x-auto">
              <table className="table ">
                <tbody>
                  <tr className="border-0">
                    <th className="pl-0 py-1">Location</th>
                    <td className="py-0">{location}</td>
                  </tr>
                  <tr className="border-0">
                    <th className="pl-0 py-1">Country</th>
                    <td className="py-0">{country}</td>
                  </tr>
                  <tr className="border-0">
                    <th className="pl-0 py-1">Cost </th>
                    <td className="py-0">$ {cost} / person</td>
                  </tr>
                  <tr className="border-0">
                    <th className="pl-0 py-1">Seasonality</th>
                    <td className="py-0"> {seasonality}</td>
                  </tr>

                  <tr className="border-0">
                    <th className="pl-0 py-1">Travel Time</th>
                    <td className="py-0">{travelTime} Days</td>
                  </tr>
                  <tr className="border-0">
                    <th className="pl-0 py-1">Total Visitor</th>
                    <td className="py-0">{visitors} per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex my-3 justify-end">
              <button className="py-2 px-4 bg-c-primary text-sm font-semibold text-white rounded-md">
                Reserve Now
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 lg:1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src={userPhoto}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold  text-sm"> {user} </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {" "}
                    Author{" "}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Someone who loves traveling and finding cool new places. They
                enjoy sharing their discoveries with others so everyone can have
                fun exploring.
              </p>
              <button className="py-2 px-4 bg-c-primary text-sm font-semibold text-white rounded-md flex w-full items-center justify-center">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TouristSpotDetails.propTypes = {};

export default TouristSpotDetails;
