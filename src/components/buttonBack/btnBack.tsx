import { useNavigate } from "react-router-dom";
import { BtnBackProps } from "./btnBack.props";
import styles from "../buttonfilter/buttonFilter.module.css"

const BtnBack = ({ push }: BtnBackProps): JSX.Element => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/${push}`);
  };

  return (
    <button className={styles.btn} onClick={() => handleBack()}>      
      Вернуться назад
    </button>
  ); 
};

export default BtnBack;
