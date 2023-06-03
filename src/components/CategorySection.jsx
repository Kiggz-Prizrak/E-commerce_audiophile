import CategoryCard from "./CategoryCard";

import headphonesCatImg from "../assets/images/home/category/headphones-cat.png";
import speakerCatImg from "../assets/images/home/category/speakers-cat.png";
import earphonesCatImg from "../assets/images/home/category/earphones-cat.png";

const CategorySection = () => {
  return (
    <ul className="categorySection-container">
      <CategoryCard image={headphonesCatImg} category="headphones" />
      <CategoryCard image={speakerCatImg} category="speakers" />
      <CategoryCard image={earphonesCatImg} category="earphones" />
    </ul>
  );
}

export default CategorySection;