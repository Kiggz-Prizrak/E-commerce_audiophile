const Image = ({ image, link, className }) => {


  return (
    <>
      <picture>
        <source
          media="(min-width: 761px)"
          srcSet={` ${
            import.meta.env.VITE_API_HOST
          }/images/${link}/desktop/${image}`}
        />
        <source
          media="(max-width: 760px)"
          srcSet={` ${
            import.meta.env.VITE_API_HOST
          }/images/${link}/tablet/${image}`}
        />
        <source
          media="(max-width: 400px)"
          srcSet={` ${
            import.meta.env.VITE_API_HOST
          }/images/${link}/mobile/${image}`}
        />

        <img
          className={className}
          src="elva-800w.jpg"
          alt={` ${
            import.meta.env.VITE_API_HOST
          }/images/${link}/desktop/${image}`}
        />
      </picture>
    </>
  );
};

export default Image