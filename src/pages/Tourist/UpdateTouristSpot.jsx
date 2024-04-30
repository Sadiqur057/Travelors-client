import { Select, Option, Input, Textarea } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateTouristSpot = () => {
  const [touristSpot, setTouristPost] = useState([]);

  const id = useParams().id;
  useEffect(() => {
    fetch(`https://travelors-server.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristPost(data);
        window.scrollTo(0, 0);
      });
  }, [id]);

  const {
    _id,
    visitors,
    seasonality: season,
    spot_name,
    country: countryName,
    location,
    cost,
    travelTime: duration,
    description,
    image,
  } = touristSpot || {};

  // handle update

  const [seasonalityValue, setSeasonalityValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [travelTimeValue, setTravelTimeValue] = useState();

  const seasonalityOptions = [
    { label: "Summer", value: "Summer" },
    { label: "Winter", value: "Winter" },
    { label: "All Time", value: "All Time" },
  ];

  const countryOptions = [
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "Thailand", value: "Thailand" },
    { label: "Indonesia", value: "Indonesia" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "Vietnam", value: "Vietnam" },
    { label: "Cambodia", value: "Cambodia" },
  ];

  const travelTimeOptions = [
    { label: "1 days", value: "1" },
    { label: "2 days", value: "2" },
    { label: "3 days", value: "3" },
    { label: "4 days", value: "4" },
    { label: "5 days", value: "5" },
    { label: "6 days", value: "6" },
    { label: "7 days", value: "7" },
  ];

  const handleSeasonality = (value) => {
    setSeasonalityValue(value);
  };
  const handleTimeOptions = (value) => {
    setTravelTimeValue(value);
  };
  const handleCountryOptions = (value) => {
    setCountryValue(value);
  };
  const navigate = useNavigate();

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot_name = form.spot_name.value;
    const visitors = form.visitors.value;
    const country = countryValue || countryName;
    const location = form.location.value;
    const cost = form.cost.value;
    const description = form.description.value;
    const image = form.image.value;
    const seasonality = seasonalityValue || season;
    const travelTime = travelTimeValue || duration;
    const touristSpotDetails = {
      spot_name,
      visitors,
      country,
      location,
      description,
      seasonality,
      cost,
      travelTime,
      image,
      _id,
    };

    fetch(`https://travelors-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpotDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You have updated the Tourist spot",
            icon: "success",
            confirmButtonColor: "#35a483",
          }).then(() => {
            navigate("/my-tourist-spot");
          });
        } else {
          Swal.fire({
            title: "Warning!",
            text: "You haven't updated anything",
            icon: "warning",
            confirmButtonColor: "#35a483",
          }).then(() => {
            navigate("/my-tourist-spot");
          });
        }
      });
  };
  return (
    <div className="bg-cool py-10 px-4 md:px-10 ">
      <Helmet>
        <title>Travelors | Update Tourist Spots</title>
      </Helmet>
      <div className="max-w-3xl mx-auto bg-base-100 p-4 md:p-4 rounded-xl">
        <h1 className="text-center text-2xl md:text-3xl font-semibold pt-4 md:pt-10  pb-4 md:pb-6">
          Update Information for {spot_name}
        </h1>
        <form
          onSubmit={handleAddSpot}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" gap-6 rounded-md  p-2 md:p-6 lg:p-10 ">
            <div className="grid grid-cols-6 gap-4 col-span-full ">
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Tourist Spot Name"
                  color="teal"
                  name="spot_name"
                  defaultValue={spot_name}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Visitors Per Year"
                  color="teal"
                  name="visitors"
                  type="number"
                  defaultValue={visitors}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <div>
                  <Select
                    label="Select Country"
                    color="teal"
                    onChange={handleCountryOptions}
                    value={countryName}
                  >
                    {countryOptions.map((countryOption) => (
                      <Option
                        key={countryOption.value}
                        value={countryOption.value}
                      >
                        {countryOption.label}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Location"
                  color="teal"
                  name="location"
                  defaultValue={location}
                />
              </div>

              <div className="col-span-full">
                <div className="relative w-full min-w-[200px]">
                  <Textarea
                    name="description"
                    color="teal"
                    label="Description"
                    defaultValue={description}
                  ></Textarea>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2">
                <Input
                  label="Average Cost"
                  color="teal"
                  name="cost"
                  type="number"
                  defaultValue={cost}
                />
              </div>
              <div className="col-span-full lg:col-span-2">
                <div>
                  <Select
                    label="Select Seasonality"
                    color="teal"
                    onChange={handleSeasonality}
                    value={season}
                  >
                    {seasonalityOptions.map((seasonalityOption) => (
                      <Option
                        key={seasonalityOption.value}
                        value={seasonalityOption.value}
                      >
                        {seasonalityOption.label}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2">
                <div>
                  <Select
                    label="Travel Time"
                    color="teal"
                    onChange={handleTimeOptions}
                    value={duration}
                  >
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
              <div className="col-span-full">
                <Input
                  label="Image URL"
                  defaultValue={image}
                  color="teal"
                  name="image"
                />
              </div>
              <div className="col-span-full">
                <input
                  type="submit"
                  value="Update"
                  className="bg-c-primary hover:bg-c-hover btn btn-neutral text-white w-full"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

UpdateTouristSpot.propTypes = {};

export default UpdateTouristSpot;
