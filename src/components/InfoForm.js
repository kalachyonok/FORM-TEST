import { Button } from "./Button";
import infoStyle from "./InfoForm.module.css";
import { useState } from "react";

export const InfoForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const nameAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const submitHandler = (event) => {
    // console.log(111);
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      props.onChangeWarning("Некорректный ввод");
      props.onAddInfoWarning("Эти поля не могут быть пустыми");
      props.onOpenModalError(true);
      return;
    }

    if (inputAge < 0) {
      props.onChangeWarning("Некорректный возраст");
      props.onAddInfoWarning("Возраст не может быть меньше 0");
      props.onOpenModalError(true);
      return;
    }

    const newInfo = {
      userName: inputName,
      userAge: inputAge,
      id: Math.random().toString(),
    };

    props.onAddNewUser(newInfo);

    setInputName("");
    setInputAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={infoStyle.input}>
        <div>
          <label>Имя</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>

        <div>
          <label>Возраст</label>
          <input
            type="number"
            value={inputAge}
            onChange={nameAgeHandler}
            step="1"
          />
        </div>

        <Button label="Добавить пользователя" />
      </div>
    </form>
  );
};
