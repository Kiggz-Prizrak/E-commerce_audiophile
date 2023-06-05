import Image from "./Image";
import ArticleDescription from "./ArticleDescription";

const HomeHero = () => {
  return (
    <div className="homeHero-container">
      <div className="homeHero-content">
          <ArticleDescription
            isNew={true}
            title="XX99 Mark II 
            Headphones"
            description="Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast."
            link="article/3"
          />
      </div>
      <Image link="home" image="image-hero.jpg" />
    </div>
  );
};

export default HomeHero;
