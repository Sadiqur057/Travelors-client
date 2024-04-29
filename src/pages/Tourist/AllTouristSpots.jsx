import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../shared/TouristSpotCard";
import { Select, Option, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllTouristSpots = () => {
  const [loading, setLoading] = useState(true)
  const allTouristSpots = useLoaderData();
  const [sortedData, setSortedData] = useState(allTouristSpots)

  const handleSortOptions = (value) => {
    if(value==="cost"){
      const newSortedDate = [...allTouristSpots].sort((a,b)=>{
        return parseInt(a.cost) - parseInt(b.cost)
      })
      setSortedData(newSortedDate)
    }else if(value==="duration"){
      const newSortedDate = [...allTouristSpots].sort((a,b)=>{
        return parseInt(a.travelTime) - parseInt(b.travelTime)
      })
      setSortedData(newSortedDate)
    }

  };


  const travelTimeOptions = [
    {
      label: "Sort By Cost",
      value: "cost",
    },
    {
      label: "Sort By Duration",
      value: "duration",
    },
  ];

  useEffect(()=>{
    if(allTouristSpots){
      setLoading(false)
    }
  },[allTouristSpots])

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center">
        <Spinner className="h-12 w-12" color="teal" />
      </div>
    );
  }


  return (
    <div className="w-[90%] mx-auto md:w-5/6 mt-6 md:mt-10">
      <div className="flex flex-wrap w-full mb-10 items-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">
            Total Tourist Spots: {allTouristSpots.length}
          </h1>
          <div className="h-1 w-20 bg-c-primary rounded"></div>
        </div>

        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Discover the Worlds Wonders! Browse Through a Collection of Tourist Spots Added by Our Global Community of Travel Enthusiasts. Uncover a Tapestry of Experiences Waiting to Be Explored. Start Your Journey of Discovery Today!.
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <div>
          <Select label="Sort By" color="teal" onChange={handleSortOptions}>
            {travelTimeOptions.map((travelTimeOption) => (
              <Option
                key={travelTimeOption.value}
                value={travelTimeOption.value}
              >
                {travelTimeOption.label}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 mb-10">
                {
          sortedData.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))
        }
      </div>
    </div>
  );
};

export default AllTouristSpots;
