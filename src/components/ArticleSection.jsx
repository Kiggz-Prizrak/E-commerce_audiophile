import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";
import productBuilder from "../store/productBuilder";

import ButtonQuantity from "./button//ButtonQuantity";
import Image from "./Image";

const ArticleSection = ({
  isNew,
  title,
  description,
  price,
  slug,
  image,
  id,
}) => {
  const [articleQuantity, setArticleQuantity] = useState(0);
  const [errorQuantity, setErrorQuantity] = useState("");
  const dispatch = useDispatch();

  return (
    <section className="articleSection-container">
      <Image link={`product-${slug}`} image={image} />
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
 
          <button
            className="button-orange"
            onClick={() => {
              if (articleQuantity > 0) {
                setErrorQuantity("");
                dispatch(
                  addToCart(
                    productBuilder(id, price, articleQuantity, title, image)
                  )
                );
              } else {
                setErrorQuantity("veuillez sélectionner une quantité");
              }
            }}
          >
            add to cart
          </button>
        </div>
        <p>{errorQuantity}</p>
      </div>
    </section>
  );
};

export default ArticleSection;
