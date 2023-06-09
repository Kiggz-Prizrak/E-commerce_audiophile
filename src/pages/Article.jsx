import { useLoaderData } from "react-router-dom";

import CategoryMenu from "../components/CategoryMenu";
import PresentationSection from "../components/PresentationSection";
import ButtonBack from "../components/button/ButtonBack";
import ArticleSection from "../components/ArticleSection";
import ArticleDescription from "../components/ArticleDescription";
import ArticleGallery from "../components/ArticleGallery";
import SuggestionList from "../components/SuggestionList";

const Article = () => {
  const article = useLoaderData();
  
  return (
    <div className="page-container">
      <div className="page-content">
        <ButtonBack pageLink={`category/${article?.category}`} />
        <ArticleSection
          isNew={article.new}
          title={article.name}
          description={article.description}
          price={article.price.toFixed(2)}
          slug={article.slug}
          image={article.image.desktop.split("/").pop()}
          id={article.id}
        />

        <ArticleDescription
          description={article.features}
          list={article.includes}
        />
        <ArticleGallery gallery={article.gallery} slug={article.slug} />
        <SuggestionList list={article.others}/>
        <CategoryMenu />
        <PresentationSection />
      </div>
    </div>
  );
};

export default Article;
