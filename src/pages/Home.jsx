import { useLoaderData } from "react-router-dom";

import CategorySection from "../components/CategorySection";
import PresentationSection from "../components/PresentationSection";
import HomeProductBanner1 from "../components/HomeProductBanner1";
import HomeProductBanner2 from "../components/HomeProductBanner2";
import HomeProductBanner3 from "../components/HomeProductBanner3";
import HomeHero from "../components/HomeHero";

// import Button from "../components/button/ButtonArrow";

const Home = () => {
  const articlesList = useLoaderData();
  const newArticles = articlesList.filter((e) => e.new);
  
  const randomNewArticles = newArticles[Math.floor(Math.random() * 3)];

  console.log(articlesList);

  return (
    <div className="home-container">
      <HomeHero />
      <div className="home-content">
        <CategorySection />
        <HomeProductBanner1 />
        <HomeProductBanner2 />
        <HomeProductBanner3 />

        <PresentationSection />
      </div>
    </div>
  );
};

export default Home;
