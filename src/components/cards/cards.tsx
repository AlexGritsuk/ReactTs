import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { 
  CardInitial,
  LikeAdd,
  filters,
  getCards,
  getCardsLoadingStatus,
  getCurrentPage,
  getFilter,
  loadCards,
} from "../../store/cardsReducer";
import { Card } from "../card/card";
import styles from "./cards.module.css";
import Pagination from "../common/pagination/pagination";
import { pagesArray, paginate } from "../../utils/paginate";
import { filterdCards } from "../../utils/filterCards";

export const Cards = (): JSX.Element => {    
  

  const cards = useAppSelector(getCards());
  const filterCategory = useAppSelector(getFilter());
  const isLoading = useAppSelector(getCardsLoadingStatus());
  const currentPage = useAppSelector(getCurrentPage());
  const dispatch = useAppDispatch();  
  
  const pageSize: number = 4;

  const handleLikeAdd = (id: number) => {
    dispatch(LikeAdd(id));
  };

  const pagesCount: number = Math.ceil(
    filterdCards(filterCategory, filters, cards).length / pageSize
  );
  let pages = pagesArray(pagesCount);
  const cardCrop = paginate(
    filterdCards(filterCategory, filters, cards),
    currentPage,
    pageSize
  );  

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  console.log(cardCrop);
  
  interface cardProp {

  }
  return (
    <div className={styles.cards_wrapper}>
      <div className={styles.cards}>
        {cardCrop.map((card: any) => (
          <div key={card.id} className={styles.cards_item}>
            <Card
              img={card.image}
              price={card.price}
              title={card.title}
              id={card.id}
              like={card.like}
              handleLikeAdd={handleLikeAdd}
            />
          </div>
        ))}
      </div>
      <div className={styles.cards__pagin}>
        <Pagination currentPage={currentPage} pages={pages} />
      </div>
    </div>
  );
};
