import CategoryCard from "./CategoryCard";
//import.meta.env.VITE_API_HOST
const headphonesCatImg = ` ${
  import.meta.env.VITE_API_HOST
}/images/home/category/headphones-cat.png`;

const speakerCatImg = ` ${
  import.meta.env.VITE_API_HOST
}/images/home/category/speakers-cat.png`;

const earphonesCatImg = ` ${
  import.meta.env.VITE_API_HOST
}/images/home/category/earphones-cat.png`;

const CategorySection = () => {
  return (
    <ul className="categorySection-container">
      <CategoryCard image={headphonesCatImg} category="headphones" />
      <CategoryCard image={speakerCatImg} category="speakers" />
      <CategoryCard image={earphonesCatImg} category="earphones" />
    </ul>
  );
};

export default CategorySection;
