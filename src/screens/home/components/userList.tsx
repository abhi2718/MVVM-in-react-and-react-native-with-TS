import React, { useContext } from "react";
import { UserListContext } from "../../../context/userList.context";
import {
  UserListProps,
  UserItemProps,
} from "../../../types/screens.types/home.type";

export default function UserList() {
  const { userList } = useContext(UserListContext);
  return (
    <div>
      {userList.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

const UserItem = (props: UserItemProps) => {
  const { user } = props;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.color}</p>
    </div>
  );
};
