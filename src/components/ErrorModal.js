import { Button } from "./Button";
import styleModal from "./ErrorModal.module.css";

export const ErrorModal = () => {
  return (
    <div>
      <div className={styleModal.backdrop}></div>
      <div className={styleModal.modal}>
        <header className={styleModal.header}>
          <h2>Некорректный возраст</h2>
        </header>

        <div className={styleModal.content}>Эти поля не могут быть пустыми</div>
        <div className={styleModal.actions}>
          <Button label="Закрыть" />
        </div>
      </div>
    </div>
  );
};
