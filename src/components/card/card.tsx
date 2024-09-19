import { useState } from "react";
import { Htag } from "../Htag/Htag";
import { CardProps } from "./card.props";
import styles from "./card.module.css";
import Price from "../price/price";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../hooks";
import { cardRemove } from "../../store/cardsReducer";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { sliceText } from "../../utils/sliceText";

export const Card = ({
  children,
  img,
  price,
  title,
  id,
}: CardProps) => {
  const [like, setLike] = useState(true); 

  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(cardRemove(id));
  };

  let shortText = sliceText(title);

  const handleClickLike = (): void => {
    setLike(!like);
  };

  return (
    <div className={styles.card_item}>
      <div className={styles.card_img}>
        <img src={img} className={styles.card_pict} />
      </div>
      <div className={styles.card_list}>
        <Htag tag="h3">{shortText}</Htag>
      </div>
      <div className={styles.card_price}>
        <Price>{price}</Price>
      </div>
      <div className={styles.card_btn} onClick={() => handleClickLike()}>
        {like == true ? <AiOutlineLike /> : <AiFillLike />}
      </div>
      <div className={styles.card_remove} onClick={() => handleRemove(id)}>
        <AiOutlineClose />
      </div>
    </div>
  );
};
