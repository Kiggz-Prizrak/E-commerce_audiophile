import Button3 from './button/Button3'

const CategoryCard = ({image, category}) => {
  return (
    <li className="categoryCard-container">
      <img src={image} alt="" />
      <div className="categoryCard-content">
        <h6>{category}</h6>
        <Button3 link={category} />
      </div>
    </li>
  );
}

export default CategoryCard