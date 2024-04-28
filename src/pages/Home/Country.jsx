import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  console.log(country);
  const { name, image, description } = country || {};
  return (
    <Link to={`/countries/${name}`}>
      <div className="h-full rounded-2xl min-h-[200px] ">
        <div className="flex relative h-full items-center country-box">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full min-h-[200px] object-cover object-center rounded-2xl"
            src={image}
          />

          <div className="hidden  relative z-10 w-full h-full min-h-[200px] bg-[#000] opacity-0 hover:opacity-70 text-white rounded-2xl country-details">
            <div className="flex flex-col justify-center  w-full h-full  px-8 py-10 min-h-[200px] self-center">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold mb-3">{name}</h1>
                <p className="text-sm lg:text-base lg:leading-relaxed w-full h-full">
                  {description?.slice(0, 100)}...
                </p>
              </div>
            </div>
          </div>
          <div className="relative  w-full h-full country-name text-white top-0  min-h-[200px] md:text-lg font-medium">
            <p className="py-[6px] px-3 w-fit bg-c-primary rounded-t-xl rounded-r-md">{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
