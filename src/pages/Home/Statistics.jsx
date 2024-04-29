import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaRegComments, FaRegFlag } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";

const Statistics = () => {
  const [spotCounts, setSpotCounts] = useState(0);
  const [countryLoading, seCountryLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [spotLoading, setSpotsLoading] = useState(true);
  const [countryCounts, setCountryCounts] = useState(0);
  const [userCounts, setUserCounts] = useState(0);
  useEffect(() => {
    fetch("https://travelors-server.vercel.app/spot-counts")
      .then((res) => res.json())
      .then((data) => {
        setSpotCounts(data.count);
        setSpotsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://travelors-server.vercel.app/user-counts")
      .then((res) => res.json())
      .then((data) => {
        setUserCounts(data.count);
        setUserLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://travelors-server.vercel.app/country-counts")
      .then((res) => res.json())
      .then((data) => {
        setCountryCounts(data.count);
        seCountryLoading(false);
      });
  }, []);

  window.scrollTo(0, 0);
  if (spotLoading || countryLoading || userLoading) {
    return (
      <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center">
        <Spinner className="h-12 w-12" color="teal" />
      </div>
    );
  }
  return (
    <section className="body-font">
      <div className="container px-5 py-8 md:py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-6 md:mb-10">
          <h1 className="md:text-3xl text-[28px] font-semibold title-font mb-5 ">
            Travelors Insights
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover fascinating statistics about our tourist
            destinations,including total places to visit, visitor demographics
            by country, and valuable feedback from our guests. Dive into the
            numbers and uncover the rich tapestry of experiences awaiting you.
          </p>
        </div>
        <div className="grid grid-cols-4 -m-4 text-center">
          <div className="p-4 col-span-2 md:col-span-1 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <GiIsland className="text-4xl text-c-primary flex w-full justify-center mb-3" />
              <h2 className="title-font font-medium text-3xl ">
                {spotCounts}
              </h2>
              <p className="leading-relaxed">Tourist Spots</p>
            </div>
          </div>
          <div className="p-4 col-span-2 md:col-span-1 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <LuUsers2 className="text-4xl text-c-primary flex w-full justify-center mb-3" />
              <h2 className="title-font font-medium text-3xl ">
                {userCounts}
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 col-span-2 md:col-span-1 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FaRegFlag className="text-4xl text-c-primary flex w-full justify-center mb-3" />
              <h2 className="title-font font-medium text-3xl ">
                {countryCounts}
              </h2>
              <p className="leading-relaxed">Countries</p>
            </div>
          </div>
          <div className="p-4 col-span-2 md:col-span-1 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FaRegComments className="text-4xl text-c-primary flex w-full justify-center mb-3" />
              <h2 className="title-font font-medium text-3xl ">
                46
              </h2>
              <p className="leading-relaxed">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
