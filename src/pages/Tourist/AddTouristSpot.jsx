import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Select, Option, Input, Textarea } from "@material-tailwind/react";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
  window.scrollTo(0, 0);
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  const userPhoto = user?.photoURL;
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

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.name.value;
    const email = form.email.value;
    const spot_name = form.spot_name.value;
    const visitors = form.visitors.value;
    const country = countryValue;
    const location = form.location.value;
    const cost = form.cost.value;
    const description = form.description.value;
    const image = form.image.value;
    const seasonality = seasonalityValue;
    const travelTime = travelTimeValue;
    const touristSpotDetails = {
      user,
      email,
      spot_name,
      visitors,
      country,
      location,
      description,
      seasonality,
      cost,
      travelTime,
      image,
      userPhoto,
    };
    console.log(touristSpotDetails);

    fetch("https://travelors-server.vercel.app/tourist-spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpotDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have added the Tourist spot",
            icon: "success",
            confirmButtonColor: "#35a483",
          });
        }
      });
  };

  return (
    <div className="bg-cool py-10">
      <section className="p-6 bg-base-100 w-[90%] max-w-4xl mx-auto rounded-md">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="text-center font-bold text-2xl md:text-3xl py-8">
            Add Your Favourite Tourist Spot
          </p>
        </div>
        <form
          onSubmit={handleAddSpot}
          className="container flex flex-col mx-auto space-y-12 "
        >
          <fieldset className=" gap-6 rounded-md shadow-sm p-2 md:p-6 lg:p-10">
            <div className="grid grid-cols-6 gap-4 col-span-full ">
              <div className="col-span-full sm:col-span-3 ">
                <Input
                  label="Username"
                  color="teal"
                  readOnly
                  defaultValue={user?.displayName}
                  name="name"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Email"
                  color="teal"
                  readOnly
                  defaultValue={user?.email}
                  name="email"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Tourist Spot Name"
                  color="teal"
                  name="spot_name"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Visitors Per Year"
                  color="teal"
                  name="visitors"
                  type="number"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <div>
                  <Select
                    label="Select Country"
                    color="teal"
                    onChange={handleCountryOptions}
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
                <Input label="Location" color="teal" name="location" />
              </div>

              <div className="col-span-full">
                <div className="relative w-full min-w-[200px]">
                  <Textarea name="description" color="teal" label="Description"></Textarea>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2">
                <Input
                  label="Average Cost"
                  color="teal"
                  name="cost"
                  type="number"
                />
              </div>
              <div className="col-span-full lg:col-span-2">
                <div>
                  <Select
                    label="Select Seasonality"
                    color="teal"
                    onChange={handleSeasonality}
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
                <Input label="Image URL" color="teal" name="image" />
              </div>
              <div className="col-span-full">
                <input
                  type="submit"
                  className="bg-c-primary hover:bg-c-hover btn btn-neutral text-white w-full"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;
