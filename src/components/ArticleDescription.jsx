const ArticleDescription = ({ description, list }) => {
  return (
    <div className="articleDescription-container">
      <div className="articleDescription-text">
        <h3>features</h3>
        <p>{description}</p>
      </div>
      <div>
        <div className="articleDescription-list">
          <h3>In the box</h3>
          <ul>
            {list.map((e, i) => {
              return (
                <li key={i}>
                  <p className="item-quantity">{e?.quantity}x</p>
                  <p>{e?.item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleDescription;
