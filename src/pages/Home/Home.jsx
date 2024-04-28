import Countries from "./Countries";
import  { CarouselCustomNavigation } from "./Slider";
import TouristCardSection from "./TouristCardSection";


const Home = () => {
  return (
    <div className="">
      <CarouselCustomNavigation></CarouselCustomNavigation>
      <TouristCardSection></TouristCardSection>
      <Countries></Countries>
    </div>
  );
};

export default Home;