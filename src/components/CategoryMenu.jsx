import CategoryMenuCard from "./CategoryMenuCard";
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

const CategoryMenu = () => {
  return (
    <ul className="CategoryMenu-container">
      <CategoryMenuCard image={headphonesCatImg} category="headphones" />
      <CategoryMenuCard image={speakerCatImg} category="speakers" />
      <CategoryMenuCard image={earphonesCatImg} category="earphones" />
    </ul>
  );
};

export default CategoryMenu;
