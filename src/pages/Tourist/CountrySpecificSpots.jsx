import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TouristSpotCard from "../shared/TouristSpotCard";

const CountrySpecificSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const country = useParams();
  useEffect(() => {
    fetch(`https://travelors-server.vercel.app/countries/${country?.name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTouristSpots(data);
      });
  }, [country?.name]);
  return (
    <div className="w-[90%] md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-6 md:my-10">
      {touristSpots.map((touristSpot) => (
        <TouristSpotCard
          key={touristSpot._id}
          touristSpot={touristSpot}
        ></TouristSpotCard>
      ))}
    </div>
  );
};

CountrySpecificSpots.propTypes = {};

export default CountrySpecificSpots;
