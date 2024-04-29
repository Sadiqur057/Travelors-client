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
        setDataLoading(false);
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
            </h1>
            <div className="h-1 w-20 bg-c-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 overflow-auto">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr className="text-left text-xs  font-medium">
                      <th scope="col" className=" px-2 md:px-6 py-3">
                        Spot Name
                      </th>
                      <th scope="col" className="hidden md:block px-2 md:px-6 py-3">
                        Country
                      </th>
                      <th scope="col" className=" px-2 md:px-6 py-3">
                        Cost
                      </th>
                      <th scope="col" className=" px-2 md:px-6 py-3">
                        Duration
                      </th>
                      <th scope="col" className=" px-2 md:px-6 py-3">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {myTouristSpots.map((touristSpot) => (
                      <MyTouristSpotCard
                        touristSpot={touristSpot}
                        setMyTouristSpots={setMyTouristSpots}
                        myTouristSpots={myTouristSpots}
                        key={touristSpot._id}
                      ></MyTouristSpotCard>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTouristSpots;
