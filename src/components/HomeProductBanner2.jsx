import Button from './button/Button'
import Image from './Image'
const HomeProductBanner2 = () => {
  return (
    <div className="homeProductBanner2">
      <div className="homeProductBanner2-content">
        <div>
          <h4>ZXY SPEAKER</h4>
          <Button link="product/6" className="button-transparent" />
        </div>
      </div>
      <Image image="image-speaker-zx7.jpg" link="home" className="" />
    </div>
  );
}

export default HomeProductBanner2