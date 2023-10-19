import { Button } from "./Button";
import styleModal from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  return (
    <div>
      <div
        onClick={() => props.onCloseModal(false)}
        className={styleModal.backdrop}
      ></div>
      <div className={styleModal.modal}>
        <header className={styleModal.header}>
          <h2>{props.warning}</h2>
        </header>

        <div className={styleModal.content}>{props.warningInfo}</div>
        <div className={styleModal.actions}>
          <Button onClick={() => props.onCloseModal(false)} label="Закрыть" />
        </div>
      </div>
    </div>
  );
};
