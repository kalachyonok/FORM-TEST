import styleButton from "./Button.module.css";

export const Button = (props) => {
  return (
    <button type="submit" className={styleButton.button}>
      {props.label}
    </button>
  );
};
