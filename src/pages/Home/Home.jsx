import Contact from "./Contact";
import Countries from "./Countries";
import  { CarouselCustomNavigation } from "./Slider";
import Statistics from "./Statistics";
import TouristCardSection from "./TouristCardSection";
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Travelors | Home</title>
      </Helmet>
      <CarouselCustomNavigation></CarouselCustomNavigation>
      <TouristCardSection></TouristCardSection>
      <Countries></Countries>
      <Statistics></Statistics>
      <Contact></Contact>
    </main>
  );
};

export default Home;