import { Button } from "./Button";
import infoStyle from "./InfoForm.module.css";

export const InfoForm = () => {
  return (
    <form>
      <div className={infoStyle.input}>
        <div>
          <label>Имя</label>
          <input type="text" />
        </div>

        <div>
          <label>Возраст</label>
          <input type="number" min="0" step="1" />
        </div>

        <Button />
      </div>
    </form>
  );
};
