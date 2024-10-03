import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cards } from "./components/cards/cards";
import "./index.css";
import CardsList from "./pages/cardsList/cardsList";
import Main from "./pages/main/main";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Cards/:cardId?" element={<CardsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
