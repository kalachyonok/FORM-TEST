import styleButton from "./Button.module.css";

export const Button = () => {
  return (
    <button type="submit" className={styleButton.button}>
      Добавить пользователя
    </button>
  );
};
