import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import Login from "./components/Login";

const App = () => {
  var userName = "Firas";
  const [val, setVal] = useState("");
  const getData = (data) => {
    setVal(data);
  };
  return (
    <>
      {/* <FirstComponent theName={userName} x="5" getData={getData} />
      <h2>{val}</h2> */}
      <Login />
    </>
  );
};
export default App;
