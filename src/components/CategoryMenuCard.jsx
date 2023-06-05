import Button2 from "./button/ButtonArrow";

const CategoryMenuCard = ({ image, category }) => {
  return (
    <li className="homeCategoryCard-container">
      <img src={image} alt="" />
      <div className="homeCategoryCard-content">
        <h6>{category}</h6>
        <Button2 link={category} />
      </div>
    </li>
  );
};

export default CategoryMenuCard;
