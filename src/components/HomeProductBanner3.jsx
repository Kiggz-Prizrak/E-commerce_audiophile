import Image from "./Image";
import Button from "./button/Button";

const HomeProductBanner3 = () => {
  return (
    <div className="homeProductBanner3">
      <div className="homeProductBanner3-content">
        <Image image="image-earphones-yx1.jpg" link="home" />
      </div>
      <div className="homeProductBanner3-content">
        <div className="homeProductBanner3-text">
          <h4>YX1 EARPHONES</h4>
          <Button link="article/1" className="button-transparent" />
        </div>
      </div>
    </div>
  );
};

export default HomeProductBanner3;
