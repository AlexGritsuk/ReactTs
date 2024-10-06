import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cards } from "./components/cards/cards";
import "./index.css";
import CardsList from "./pages/cardsList/cardsList";
import Main from "./pages/main/main";
import CreateProduct from "./pages/createProduct/createProduct";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/Cards/:cardId?" element={<CardsList />}></Route>
        <Route path="/Create" element={<CreateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
