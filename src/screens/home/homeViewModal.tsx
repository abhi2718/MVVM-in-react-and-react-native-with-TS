import React, { useEffect, useState } from "react";
import { HomeRepository } from "../../respository/home";

export default function useViewModal() {
  const homeRepository = new HomeRepository();
  const [count, setCount] = useState(0);
  const countUp = () => setCount((preValue) => preValue + 1);
  const countDown = () => setCount((preValue) => preValue - 1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const data = await homeRepository.getUsers();
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
