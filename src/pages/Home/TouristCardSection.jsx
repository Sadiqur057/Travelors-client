import { useEffect, useState } from "react";
import TouristSpotCard from "../shared/TouristSpotCard";

const TouristCardSection = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("https://travelors-server.vercel.app/tourist-spots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTouristSpots(data);
      });
  }, []);

  return (
    <div className="w-[90%] md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-10 md:my-14">
      {touristSpots.map((touristSpot) => (
        <TouristSpotCard
          key={touristSpot._id}
          touristSpot={touristSpot}
        ></TouristSpotCard>
      ))}
    </div>
  );
};

export default TouristCardSection;
