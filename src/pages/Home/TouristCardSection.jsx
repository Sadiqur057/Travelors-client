import { useEffect, useState } from "react";
import TouristSpotCard from "../shared/TouristSpotCard";


const TouristCardSection = () => {
  const [touristSpots, setTouristSpots] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/tourist-spots')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setTouristSpots(data)
    })
  },[])

return(
  <div className="w-[90%] md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 md:my-14">
    {
      touristSpots.map(touristSpot=><TouristSpotCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotCard>)
    }
  </div>
)
};

export default TouristCardSection;