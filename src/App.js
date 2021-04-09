import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import DataSet from "./components/dataSet/dataSet.jsx";

function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <DataSet></DataSet>
    </div>
  );
}

export default App;
