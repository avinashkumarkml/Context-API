import React, { useContext } from "react";
import { GlobalInfo } from "./App";

const SuperChild = () => {
  const { appColor } = useContext(GlobalInfo);

  return (
    <div>
      <h1 style={{ color: appColor }}>Super Child</h1>
    </div>
  );
};

export default SuperChild;
