import Image from "./Image";
import PatternCirles from "../assets/PatternCircles";

import Button from "./button/Button";

const HomeProductBanner1 = () => {
  return (
    <div className="HomeProductBanner1">
      <div className="HomeProductBanner1-image-container">
        <PatternCirles />
        <Image
          image={"image-speaker-zx9.png"}
          link={"home"}
          className={"HomeProductBanner1-image"}
        />
      </div>
      <div className="HomeProductBanner1-text">
        <h1>
          ZX9 <br /> speaker
        </h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button link="article/2" className="button-black"
        />
      </div>
    </div>
  );
};

export default HomeProductBanner1;
