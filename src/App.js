import React from "react";
import "./App.css";
//import UserList from "./Components/UserList/UserList";
import UserSearch from "./Components/UserSearch/UserSearch";
import UserContext from "./Components/Context/user-context";
function App() {
  const USERS_ARRAY = [
    {
      id: "U1",
      name: "Pooja",
    },
    {
      id: "U2",
      name: "Neha",
    },
    {
      id: "U3",
      name: "Ruby",
    },
    {
      id: "U4",
      name: "Priya",
    },
  ];

  const user_array = {
    users: USERS_ARRAY,
  };
  return (
    <React.Fragment>
      <UserContext.Provider value={user_array}>
        <UserSearch />
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
