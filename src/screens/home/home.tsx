import React from "react";
import useViewModal from "./homeViewModal";
import "./home.css";
import Loader from "../../components/tools";
import UserList from "./components/userList";

export default function HomeScreen() {
    const {loading} = useViewModal();
    if (loading) {
        return <Loader />
    }
  return (
    <div>
      <UserList />
    </div>
  );
}
