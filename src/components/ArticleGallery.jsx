import Image from "./Image"

const ArticleGallery = ({gallery, slug} ) => {
  return (
    <div className="ArticleGallery-container">
      <div className="ArticleGallery-column">
        <Image
          link={`product-${slug}`}
          image={gallery.first.desktop.split("/").pop()}
        />
        <Image
          link={`product-${slug}`}
          image={gallery.second.desktop.split("/").pop()}
        />
      </div>
      <Image
        link={`product-${slug}`}
        image={gallery.third.desktop.split("/").pop()}
      />
    </div>
  );
}

export default ArticleGallery