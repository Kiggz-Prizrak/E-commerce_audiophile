import SuggestionItem from "./SuggestionItem";

const SuggestionList = ({ list }) => {
  return (
    
    <div className="suggestionList-container">
      <h5>You may also like</h5>
      <ul>
        {list?.map((e) => {
          return (<li  className="suggestionItem-container" key={e.name}>
            <SuggestionItem
              link={e.slug}
              image={e.image.desktop.split("/").pop()}
              title={e.name}
            />
          </li>)
        })}
      </ul>
    </div>
  );
};
export default SuggestionList;
