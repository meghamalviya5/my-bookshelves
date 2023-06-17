import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
