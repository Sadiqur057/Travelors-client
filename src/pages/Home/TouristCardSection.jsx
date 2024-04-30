import { useEffect, useState } from "react";
import TouristSpotCard from "../shared/TouristSpotCard";
import { Spinner } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";

const TouristCardSection = () => {
  const [loading, setLoading] = useState(true);
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("https://travelors-server.vercel.app/tourist-spots")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 6) {
          setTouristSpots([...data].slice(0, 6));
          setLoading(false);
        } else {
          setTouristSpots(data);
          setLoading(false);
        }
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
    <div className="mt-10 md:mt-16 w-[90%] md:w-5/6 mx-auto">
      <div className="flex flex-col text-center w-full mb-6 md:mb-10">
        <Fade cascade damping={0.1}>
          <h1 className="text-[28px] md:text-3xl font-semibold title-font mb-5 ">
            Featured Destinations
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Dive into our curated selection of top tourist spots from around the
            globe. Click on each destination to uncover detailed information,
            stunning photos, and must-see highlights. Start planning your next
            unforgettable adventure today!
          </p>
        </Fade>
      </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-10 md:my-14">
        <Fade cascade damping={0.2}>
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
      </Fade>
        </div>
    </div>
  );
};

export default TouristCardSection;
