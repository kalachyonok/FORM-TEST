import { ErrorModal } from "./components/ErrorModal";
import { InfoForm } from "./components/InfoForm";
import { NameList } from "./components/NameList";
import { useState } from "react";

function App() {
  const [users, setNewUser] = useState([]);
  const [isErrorModalVisible, setErrorModalVisible] = useState(false);
  const [warning, setNewWorning] = useState("");
  const [warningInfo, setNewWarningInfo] = useState("");

  const addNewUserHandler = (user) => {
    setNewUser((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const changeWarningHandler = (text) => {
    setNewWorning(text);
  };

  const addInfoWarningHandler = (info) => {
    setNewWarningInfo(info);
  };

  const openModalErrorHandler = (state) => {
    setErrorModalVisible(state);
  };

  return (
    <div>
      <InfoForm
        onAddNewUser={addNewUserHandler}
        onOpenModalError={openModalErrorHandler}
        onChangeWarning={changeWarningHandler}
        onAddInfoWarning={addInfoWarningHandler}
      />
      <NameList users={users} />
      {isErrorModalVisible && (
        <ErrorModal
          warning={warning}
          warningInfo={warningInfo}
          onCloseModal={openModalErrorHandler}
        />
      )}
    </div>
  );
}

export default App;
