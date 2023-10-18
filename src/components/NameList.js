import style from "./NameList.module.css";

export function NameList() {
  return (
    <div className={style.users}>
      <ul>
        <li>Здесь будет показана новая инфа пользователя: Ольга - 28 лет</li>
      </ul>
    </div>
  );
}
