import Button2 from "./button/ButtonArrow";

const CategoryCard = ({ image, category }) => {
  return (
    <li className="categoryCard-container">
      <img src={image} alt="" />
      <div className="categoryCard-content">
        <h6>{category}</h6>
        <Button2 link={category} />
      </div>
    </li>
  );
};

export default CategoryCard;
