import Contact from "./Contact";
import Countries from "./Countries";
import  { CarouselCustomNavigation } from "./Slider";
import Statistics from "./Statistics";
import TouristCardSection from "./TouristCardSection";


const Home = () => {
  return (
    <main>
      <CarouselCustomNavigation></CarouselCustomNavigation>
      <TouristCardSection></TouristCardSection>
      <Countries></Countries>
      <Statistics></Statistics>
      <Contact></Contact>
    </main>
  );
};

export default Home;