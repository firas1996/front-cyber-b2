import FirstComponent from "./components/FirstComponent";

const App = () => {
  var userName = "Firas";
  return (
    <>
      <FirstComponent theName={userName} x="5" />
    </>
  );
};
export default App;
