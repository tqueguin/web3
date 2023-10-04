const Button = ({ changeCount, text, delta }) => (
  <button
    data-delta={delta}
    onClick={(e) => {
      changeCount(e.target.dataset.delta);
    }}
  >
    {text}
  </button>
);

export default Button;
