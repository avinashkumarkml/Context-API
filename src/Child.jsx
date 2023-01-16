import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";

const Child = () => {
  const { appColor } = useContext(GlobalInfo);

  return (
    <div>
      <h1 style={{ color: appColor }}>Child</h1>
      <SuperChild/>
    </div>
  );
};

export default Child;
