import infoStyle from "./InfoForm.module.css";

export const InfoForm = () => {
  return (
    <form>
      <div>
        <div>
          <label>Имя</label>
          <input type="text" />
        </div>

        <div>
          <label>Возраст</label>
          <input type="number" min="0" step="1" />
        </div>

        <button>Добавить пользователя</button>
      </div>
    </form>
  );
};
