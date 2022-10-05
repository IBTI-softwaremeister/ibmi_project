import "./App.css";
import { GlobalStyle } from "./styles/styles";
import Main from "./components/page/main/index";
import Type from "./components/page/type/index";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/type" element={<Type />} />
      </Routes>
    </>
  );
}

export default App;
