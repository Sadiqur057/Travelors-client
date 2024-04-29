import slider1 from "../../assets/images/slider/slider-1.jpg";
import slider2 from "../../assets/images/slider/slider-2.jpg";
import slider3 from "../../assets/images/slider/slider-3.jpg";
import slider4 from "../../assets/images/slider/slider-4.jpg";
import slider5 from "../../assets/images/slider/slider-5.jpg";
import slider6 from "../../assets/images/slider/slider-6.jpg";

import { Fade } from "react-awesome-reveal";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Carousel, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CarouselCustomNavigation() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  return (
    <Carousel
      autoplay
      autoplayDelay={3000}
      loop
      prevArrow={false}
      nextArrow={false}
      className="h-[calc(100vh-130px)]  md:h-[calc(100vh-84px)] "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all  content-[''] ${
                activeIndex === i ? "w-8 bg-white " : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image) => (
        <div key={image} className="relative h-full w-full">
          <img
            src={image}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/50 py-10">
            <div className=" grid md:grid-cols-6 mx-auto w-5/6 gap-10 md:gap-14 lg:gap-20 md:px-2 ">
              <div className="mx-auto md:col-span-5 md:px-6">
                <Fade direction="down">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-7 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Naturessss
                  </Typography>
                </Fade>
                <Fade>
                  <Typography
                    variant="lead"
                    color="white"
                    className="text-lg md:text-xl mb-8 opacity-80 leading-snug max-w-[560px]"
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                  </Typography>
                </Fade>
                <Fade direction="up">
                  <div className="flex gap-2">
                    <Link to="/tourist-spots">
                      <Button className="text-white bg-c-primary">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </Fade>
              </div>
              <div className="md:col-span-1 flex md:flex-col  gap-10 text-white w-full  justify-center items-center h-full">
                <Fade cascade damping={0.4}>
                  <p className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer w-fit">
                    <FaInstagram />
                  </p>
                  <p className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer w-fit">
                    <FaFacebookSquare />
                  </p>
                  <p className="p-2 text-3xl md:text-4xl glass rounded-md cursor-pointer w-fit">
                    <FaSquareTwitter />
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
