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
import { Link } from "react-router-dom";
import BtnEdit from "../ButtonEdit/btnEdit";
import { useState } from "react";
import ModalFormEdit from "../../pages/ModalFormEdit/ModalFormEdit";
import Modal from "../modal/modal";

export const Card = ({
  children,
  img,
  price,
  title,
  id,
  like,
  handleLikeAdd,
}: CardProps) => {
  const [isModalActive, setModalActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(cardRemove(id));
  };

  let shortText = sliceText(title);

  const handleModalOpen = () => {
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <>
      <div className={styles.card}>
        <Link to={`/cards/${id}`}>
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
          </div>
        </Link>
        <div className={styles.card_btn} onClick={() => handleLikeAdd(id)}>
          {like == false ? <AiOutlineLike /> : <AiFillLike />}
        </div>
        <div className={styles.card_remove} onClick={() => handleRemove(id)}>
          <AiOutlineClose />
        </div>
        <div className={styles.card_edit}>
          <BtnEdit handleClick={handleModalOpen} />
        </div>
        <div>
          {isModalActive && (
            <Modal title="Отредактируйте карточку" onClose={handleModalClose}>
              <ModalFormEdit cardId={id} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};
