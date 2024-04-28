import { useEffect, useState } from "react";
import TouristSpotCard from "../shared/TouristSpotCard";
import { Spinner } from "@material-tailwind/react";

const TouristCardSection = () => {
  const [loading, setLoading] = useState(true);
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("https://travelors-server.vercel.app/tourist-spots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTouristSpots(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="mt-10 h-32 w-full flex justify-center items-center">
        <Spinner className="h-12 w-12" color="teal" />
      </div>
    );
  }
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
