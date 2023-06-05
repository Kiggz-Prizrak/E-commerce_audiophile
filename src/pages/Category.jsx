import { useLoaderData, useParams } from "react-router-dom";

import PresentationSection from "../components/PresentationSection";
import HomeCategorySection from "../components/CategoryMenu";
import CategoryHero from "../components/CategoryHero";
import CategoryArticlesList from "../components/CategoryArticlesList";

const Category = () => {
  const articlesList = useLoaderData();
  // console.log(articlesList);
  //if(Number.isInteger(2/2)) {console.log('in')} else {console.log('off')}

  return (
    <div className="page-container">
      <CategoryHero title={useParams().category} />
      <div className="page-content">
        <CategoryArticlesList list={articlesList} />
        <HomeCategorySection />
        <PresentationSection />
      </div>
    </div>
  );
};

export default Category;
