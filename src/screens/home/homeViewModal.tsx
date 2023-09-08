import React, { useContext, useEffect, useState } from "react";
import { UserListContext } from "../../context/userList.context";
import { HomeRepository } from "../../respository/home";
import { User } from "../../types/screens.types/home.type";

export default function useViewModal() {
  const homeRepository = new HomeRepository();
  const [count, setCount] = useState(0);
  const countUp = () => setCount((preValue) => preValue + 1);
  const countDown = () => setCount((preValue) => preValue - 1);
  const { setUserList, loading, setLoading } = useContext(UserListContext);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const { data } = await homeRepository.getUsers(2);
        setUserList(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  return {
    count,
    countUp,
    countDown,
    loading,
  };
}
