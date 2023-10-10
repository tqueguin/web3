const Button = ({ onClick, value }) => {
  return (
    <button onClick={onClick} className={value}>
      {value}
    </button>
  );
};

export default Button;
