import React from "react";
import useViewModal from "./homeViewModal";
import "./home.css";
import Loader from "../../components/tools";

export default function HomeScreen() {
    const { count, countUp, countDown, loading } = useViewModal();
    if (loading) {
        return <Loader />
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={countUp}>Count UP</button>
      <button onClick={countDown}>Count Down</button>
    </div>
  );
}
