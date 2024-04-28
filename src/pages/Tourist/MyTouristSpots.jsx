import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyTouristSpotCard from "./MyTouristSpotCard";
import { Spinner } from "@material-tailwind/react";

const MyTouristSpots = () => {
  const [myTouristSpots, setMyTouristSpots] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    fetch(`https://travelors-server.vercel.app/tourist-spots/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyTouristSpots(data);
        setDataLoading(false)
      });
  }, [email]);

if (dataLoading || loading) {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center">
      <Spinner className="h-12 w-12" color="teal" />
    </div>
  );
}

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap w-full mb-20 items-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">
              My Tourist Spots: {myTouristSpots.length}
            </h1><div className="h-1 w-20 bg-c-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 -m-4 gap-4 lg:gap-6 ">
          {myTouristSpots.map((touristSpot) => (
            <MyTouristSpotCard
              touristSpot={touristSpot}
              setMyTouristSpots={setMyTouristSpots}
              myTouristSpots={myTouristSpots}
              key={touristSpot._id}
            ></MyTouristSpotCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTouristSpots;
