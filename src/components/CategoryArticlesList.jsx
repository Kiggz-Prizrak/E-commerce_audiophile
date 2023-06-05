import CategoryArticle from "./CategoryArticle";

const CategoryArticlesList = ({ list }) => {
  console.log(list);
  // console.log(list[0].image[0].split('/'));
  return (
    <ul className="categoryArticlesList">
      {list.map((e) => {
        return (
          <li className="categoryArticle-container" key={e.id}>
            <CategoryArticle
              isNew={e.new}
              title={e.name}
              description={e.description}
              image={e.image.desktop.split("/").pop()}
              id={e.id}
              slug={e.slug}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryArticlesList;
