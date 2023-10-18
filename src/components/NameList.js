import style from "./NameList.module.css";

export function NameList(props) {
  console.log(props);

  // if (props.users.length === 0) {
  //   return;
  // }
  return (
    <div className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} - {user.userAge}
          </li>
        ))}
      </ul>
    </div>
  );
}
