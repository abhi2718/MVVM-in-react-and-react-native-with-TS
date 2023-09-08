import { ReactNode } from "react";
import { User } from "../../screens.types/home.type";

export type userListContextType = {
    userList: User[];
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
  
export type userListProviderProps = {
    children:ReactNode 
}