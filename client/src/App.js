import Header from "./components/Header/Header";
import Menu from "./components/Main/Menu/Menu";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Menu />
        <Main />
      </div>
    </>
  );
}

export default App;
