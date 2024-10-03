import { Cards } from "../../components/cards/cards";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import {  filterByCards } from "../../store/cardsReducer";
import styles from "./cardsList.module.css";
import CardInfo from "../infoCard/cardInfo";
import GroupList from "../../components/common/groupList/groupList";


const CardsList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { cardId } = params;

  const handleFilter = (category: string) => {
    dispatch(filterByCards(category));
  };

  const groups = [
    { id: 1, title: "Все товары", filters: "All" },
    { id: 2, title: "Избранное", filters: "Like" },
    { id: 3, title: "Электроника", filters: "electronics" },
    { id: 4, title: "Мужская одежда", filters: "men's clothing" },
    { id: 5, title: "Украшения", filters: "jewelery" },
    { id: 6, title: "Женская одежда", filters: "women's clothing" },
  ];

  return (
    <div>
      {cardId ? (
        <CardInfo idCard={cardId} />
      ) : (
        <div className={styles.cardList}>
          <div className={styles.cardList_filter}>
            <GroupList handleFilter={handleFilter} groups={groups} />
          </div>
          <div className={styles.cards}>
            <Cards />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsList;
