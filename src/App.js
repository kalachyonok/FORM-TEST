import { InfoForm } from "./components/InfoForm";
import { NameList } from "./components/NameList";
import { useState } from "react";

function App() {
  const [users, setNewUser] = useState([]);

  const addNewUserHandler = (user) => {
    setNewUser((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <InfoForm onAddNewUser={addNewUserHandler} />
      <NameList users={users} />
    </div>
  );
}

export default App;
