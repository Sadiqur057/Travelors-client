import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Select, Option, Input } from "@material-tailwind/react";
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  const [seasonalityValue, setSeasonalityValue] = useState("");
  const [travelTimeValue, setTravelTimeValue] = useState();

  const seasonalityOptions = [
    { label: "Summer", value: "Summer" },
    { label: "Winter", value: "Winter" },
    { label: "All Time", value: "All Time" },
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

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.name.value;
    const email = form.email.value;
    const spot_name = form.spot_name.value;
    const visitors = form.visitors.value;
    const country = form.country.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const description = form.description.value;
    const image = form.image.value;
    const seasonality = seasonalityValue;
    const travelTime = travelTimeValue;
    const touristSpotDetails = {user, email, spot_name,  visitors,  country, location, description, seasonality, cost, travelTime,image}
    console.log(touristSpotDetails);
    
    fetch('http://localhost:5000/tourist-spots',{
      method: "POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(touristSpotDetails)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    })

  };

  return (
    <div className="bg-gray-400 py-10">
      <section className="p-6 bg-white w-[90%] mx-auto rounded-md">
        <form
          onSubmit={handleAddSpot}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm p-2 md:p-6 lg:p-10">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-3xl">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
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
                <Input label="Tourist Spot Name" color="teal" name="spot_name" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Visitors Per Year" color="teal" name="visitors" type="number" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Country Name" color="teal" name="country" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Location" color="teal" name="location" />
              </div>

              <div className="col-span-full">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    name="description"
                    placeholder=" "
                  ></textarea>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Textarea Green
                  </label>
                </div>
              </div>
              <div className="col-span-full sm:col-span-2">
                <Input label="Average Cost" color="teal" name="cost" type="number" />
              </div>
              <div className="col-span-full sm:col-span-2">
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
              <div className="col-span-full sm:col-span-2">
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