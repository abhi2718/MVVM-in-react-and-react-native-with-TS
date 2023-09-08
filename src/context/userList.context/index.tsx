import { createContext, ReactNode, useState } from "react";
import { User } from "../../types/screens.types/home.type";

export type userListContextType = {
  userList: User[];
  setUserList: React.Dispatch<React.SetStateAction<User[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export const UserListContext = createContext<userListContextType>({
  userList: [],
  setUserList: () => {},
  loading: false,
  setLoading: () => {},
});
type userListProviderProps = {
    children:ReactNode 
}
export const UserListProvider = (props: userListProviderProps) => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const value = {
    userList,
    setUserList,
    loading,
    setLoading,
  };
  return (
    <UserListContext.Provider value={value}>
      {props.children}
    </UserListContext.Provider>
  );
};
