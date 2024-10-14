import styles from "./btnEdit.module.css";
import { BtnEditProps } from "./btnEdit.props";

const BtnEdit = ({ handleClick }: BtnEditProps): JSX.Element => {
  return (
    <button className={styles.btn} onClick={() => handleClick()}>
      Редактировать
    </button>
  );
};

export default BtnEdit;
