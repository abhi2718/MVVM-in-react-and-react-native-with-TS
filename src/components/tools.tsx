import React, { useState } from "react";

export default function Loader() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>Loading ...</p>
    </div>
  );
}
