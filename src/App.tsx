import React from "react";
import { UserListProvider } from "./context/userList.context";
import HomeScreen from "./screens/home/home";

function App() {
  return (
    <div>
      <UserListProvider>
      <HomeScreen />
      </UserListProvider>
    </div>
  );
}

export default App;
