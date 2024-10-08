import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CardsList from "./pages/cardsList/cardsList";
import CreateProduct from "./pages/createProduct/createProduct";
import { useEffect } from "react";
import { loadCards } from "./store/cardsReducer";
import { useAppDispatch } from "./hooks";

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadCards());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:Cards?/:cardId?" element={<CardsList />}></Route>        
        <Route path="/Create" element={<CreateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
