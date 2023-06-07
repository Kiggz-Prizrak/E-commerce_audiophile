import { useState } from "react";
import Image from "./Image";


import ButtonQuantity from "./button//ButtonQuantity";
import ButtonSubmit from "./button/ButtonSubmit";

const ArticleSection = ({ isNew, title, description, price, slug, image }) => {
  const [articleQuantity, setArticleQuantity] = useState(0);
  return (
    <section className="articleSection-container">
      <Image link={`product-${slug}`} image={image}/>
      <div className="articleDescription-content">
        {isNew ? <p className="overline"> new product </p> : ""}
        <h2>{title}</h2>
        <p>{description}</p>
        <h6>{price} $</h6>
        <div className="button-container">
          <ButtonQuantity
            articleQuantity={articleQuantity}
            setArticleQuantity={setArticleQuantity}
          />
          <ButtonSubmit title="ADD TO CART" />
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
