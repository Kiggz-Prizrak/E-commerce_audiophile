import Image from './Image'

const PresentationSection = () => {
  return (
    <section className="presentationSection-container">
      <div className="presentationSection-text">
        <h2>
          Bringing you the <mark>best</mark> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image image="image-best-gear.jpg" link="shared" className="" />
    </section>
  );
}

export default PresentationSection;