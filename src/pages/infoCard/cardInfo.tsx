import { CardInfoProps } from "./cardInfo.props";
import { getCardById, loadCards } from "../../store/cardsReducer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import styles from "./cardInfo.module.css"
import BtnBack from "../../components/buttonBack/btnBack";

const CardInfo = ({ idCard }: CardInfoProps): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCards());
  }, []);

  const cards = useAppSelector(getCardById(idCard));

  console.log(cards);
  

  return (
    <div>
      {cards ? (
        <div className={styles.cards_info}>
          <div>
            <img src={cards.image} className={styles.cards_info_pict} />
          </div>          
          <div className={styles.cards_item}>{cards.title}</div>
          <div className={styles.cards_item}>Цена: {cards.price} $</div>
          <div className={styles.cards_item}>Описание: {cards.description}</div>
          <div className={styles.cards_item}>Категория товара: {cards.category}</div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      <div className={styles.cards_btnBack}>
        <BtnBack push={"Cards"}/>
      </div>
    </div>
  );
};

export default CardInfo;
