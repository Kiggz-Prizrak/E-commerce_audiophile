const ButtonSubmit = ({title, subFunction}) => {
  return (
    <button className="button-orange" onClick={subFunction}>
      {title}
    </button>
  );
};

export default ButtonSubmit