import Button from "./button/Button";

const ProductPresentation = ({ isNew, title, description, link }) => {
    
  return (
    <div className="productPresentation-container">
      {isNew ? <p className="overline"> new product </p> : ""}

      <h1>{title}</h1>
      <p>{description}</p>
      <Button link={link} className="button-orange" />
    </div>
  );
};

export default ProductPresentation;