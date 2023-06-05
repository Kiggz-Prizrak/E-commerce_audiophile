import { useLoaderData } from "react-router-dom";

import HomeCategorySection from "../components/CategoryMenu";
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
    <div className="page-container">
      <HomeHero />
      <div className="page-content">
        <HomeCategorySection />
        <HomeProductBanner1 />
        <HomeProductBanner2 />
        <HomeProductBanner3 />

        <PresentationSection />
      </div>
    </div>
  );
};

export default Home;
