import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  cardRemove,
  getCards,
  getCardsLoadingStatus,
  loadCards,
} from "../../store/cardsReducer";
import { Card } from "../card/card";
import styles from "./cards.module.css";
import Pagination from "../common/pagination/pagination";
import { pagesArray, paginate } from "../../utils/paginate";

export const Cards = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex: number): void => {
    setCurrentPage(pageIndex);
  };

  const cards = useAppSelector(getCards());
  const isLoading = useAppSelector(getCardsLoadingStatus());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, []);

  const pageSize: number = 4;
  const count: number = cards.length;
  const pagesCount: number = Math.ceil(count / pageSize);

  let pages = pagesArray(pagesCount);
  const cardCrop = paginate(cards, currentPage, pageSize);

  
  

  if (isLoading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <div className={styles.cards}>
          {cardCrop.map((card: any) => (
            <div key={card.id} className={styles.cards_item}>
              <Card
                img={card.image}
                price={card.price}
                title={card.title}
                id={card.id}
              ></Card>
            </div>
          ))}
        </div>
        <div className={styles.cards__pagin}>
          <Pagination
            currentPage={currentPage}
            onPageChance={handlePageChange}
            pages={pages}
          />
        </div>
      </>
    );
  }
};
