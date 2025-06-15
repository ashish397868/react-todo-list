import "./index.css";

const Button = ({ title, variant, func, size }) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={func}>
      {title}
    </button>
  );
};

export default Button;