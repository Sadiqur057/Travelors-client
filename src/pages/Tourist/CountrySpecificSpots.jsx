import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TouristSpotCard from "../shared/TouristSpotCard";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const CountrySpecificSpots = () => {
  const [loading, setLoading] = useState(true);
  const [countryLoading, setCountryLoading] = useState(true);
  const [touristSpots, setTouristSpots] = useState([]);
  const [countryInformation, setCountryInformation] = useState([]);
  const country = useParams();
  useEffect(() => {
    fetch(`https://travelors-server.vercel.app/countries/${country?.name}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
        setLoading(false);
        window.scrollTo(0, 0);
      });
  }, [country?.name]);

  useEffect(() => {
    fetch(`https://travelors-server.vercel.app/country/${country?.name}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryInformation(data);
        setCountryLoading(false);
      });
  }, [country?.name]);

  if (loading || countryLoading) {
    return (
      <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center">
        <Spinner className="h-12 w-12" color="teal" />
      </div>
    );
  }
  return (
    <section className="text-gray-600 body-font pb-6 md:pb-10">
      <Helmet>
        <title>Travelors | {country?.name}</title>
      </Helmet>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap w-full mb-20 items-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium  mb-2 ">
              {countryInformation.name}{" "}
              <span className="text-base">
                Tourist spot available : {touristSpots.length}
              </span>
            </h1>
            <div className="h-1 w-20 bg-c-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            {countryInformation.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-6 md:my-10">
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
        </div>
      </div>
    </section>
  );
};

CountrySpecificSpots.propTypes = {};

export default CountrySpecificSpots;
