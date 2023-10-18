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
            min="0"
            step="1"
          />
        </div>

        <Button />
      </div>
    </form>
  );
};
