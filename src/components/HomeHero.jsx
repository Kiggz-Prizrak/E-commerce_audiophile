import Button from "./button/Button";
import Image from "./Image";

const HomeHero = () => {
  return (
    <div className="homeHero-container">
      <div className="homeHero-content">
        <div className="homeHero-content-text">
          <p className="overline"> new product </p>
          <h1>
            XX99 Mark II <br />
            Headphones
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button link="article/3" className="button-orange" />
        </div>
      </div>
      <Image link="home" image="image-hero.jpg" />
    </div>
  );
};

export default HomeHero;
