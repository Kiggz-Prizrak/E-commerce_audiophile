import { useLoaderData } from "react-router-dom";

import CategorySection from "../components/CategorySection";

const Home = () => {
  const articlesList = useLoaderData();
  const newArticles = articlesList.filter((e) => e.new);
  const randomNewArticles = newArticles[Math.floor(Math.random() * 3)];

  console.log(newArticles)

  return (
    <div className="home-container">
      <div className="home-content">
        <CategorySection />
      </div>
    </div>
  );
};

export default Home;
