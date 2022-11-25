import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail/CardDetail";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movie/:id" element={<CardDetail />} />
    </Routes>
  );
}

export default App;
