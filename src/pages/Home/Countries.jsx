import { useEffect, useState } from "react";
import Country from "./Country";
import { Spinner } from "@material-tailwind/react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://travelors-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        setLoading(false)
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
    <section className=" body-font w-[90%] md:w-5/6 mx-auto ">
      <div className="container py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-6 md:mb-10">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 ">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="md:grid grid-cols-7 grid-rows-12 gap-2 md:max-h-[700px] lg:max-h-[600px] min-h-[600px] space-y-3 md:space-y-0">
          <div className="md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-4 md:row-start-1 md:row-end-5 lg:row-start-1 lg:row-end-7">
            <Country country={countries[0]}></Country>
          </div>
          <div className="md:col-start-5 md:col-end-8 lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-7 row-start-1 row-end-5">
            <Country country={countries[1]}></Country>
          </div>
          <div className=" lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-7 col-start-1 col-end-4 row-start-5 row-end-9">
            <Country country={countries[2]}></Country>
          </div>
          <div className="lg:col-start-1 lg:col-end-3 lg:row-start-7 lg:row-end-13 row-start-5 row-end-9 col-start-4 col-end-8">
            <Country country={countries[3]}></Country>
          </div>
          <div className="lg:col-start-3 lg:col-end-5 lg:row-start-7 lg:row-end-13 col-start-1 col-end-5 row-start-9 row-end-13">
            <Country country={countries[4]}></Country>
          </div>
          <div className="lg:col-start-5 lg:col-end-8 lg:row-start-7 lg:row-end-13 col-start-5 col-end-8  row-start-9 row-end-13">
            <Country country={countries[5]}></Country>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
