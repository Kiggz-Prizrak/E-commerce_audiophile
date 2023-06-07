import Image from "./Image";
import ProductPresentation from "./ProductPresentation";

const HomeHero = () => {
  return (
    <div className="homeHero-container">
      <div className="homeHero-content">
        <ProductPresentation
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
