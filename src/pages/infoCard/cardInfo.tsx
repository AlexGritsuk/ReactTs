import { CardInfoProps } from "./cardInfo.props";
import { getCardById, loadCards } from "../../store/cardsReducer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";

const CardInfo = ({ idCard }: CardInfoProps): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCards());
  }, []);

  const cards = useAppSelector(getCardById(idCard));

  return (
    <>
      {cards ? (
        <div>
          <div>{cards.title}</div>
          <div>{cards.price}</div>
          <div>{cards.description}</div>
          <div>{cards.category}</div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default CardInfo;
