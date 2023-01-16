import { createContext, useState } from "react";
import "./App.css";
import Child from "./Child";
import OtherChild from "./OtherChild";

export const GlobalInfo = createContext();

function App() {
  const [color, setColor] = useState("red");

  const [day, setDay] = useState("monday");

  const getDay = (item) => {
    console.log(item);
    setDay(item);
  };

  return (
    <GlobalInfo.Provider value={{ appColor: color, getDay: getDay }}>
      <div className="App">
        <h1>App Component {day} </h1>

        <Child />
        <OtherChild />
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
