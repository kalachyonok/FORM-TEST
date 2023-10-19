import styleButton from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={styleButton.button}
    >
      {props.label}
    </button>
  );
};
