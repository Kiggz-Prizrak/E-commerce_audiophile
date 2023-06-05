import Image from "./Image"
import ArticleDescription from "./ArticleDescription"

const CategoryArticle = ({isNew, title, id, description, image, slug}) => {

  return (
    <>
      
        <Image image={image} link={`product-${slug}`} />
      
      <div className="CategoryArticle-description">
        <ArticleDescription
          isNew={isNew}
          title={title}
          description={description}
          link={`article/${id}`}
        />
      </div>
    </>
  );
}

export default CategoryArticle