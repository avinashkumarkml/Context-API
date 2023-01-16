import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";

const OtherChild = () => {
  const { appColor,getDay } = useContext(GlobalInfo);

  const day = "sunday"

  return (
    <div>
      <h1 style={{ color: appColor }}>Other Child</h1>
      <button onClick={()=>getDay(day)} >Click</button>
      <SuperChild/>
    </div>
  );
};

export default OtherChild;
