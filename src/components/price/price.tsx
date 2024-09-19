import styles from "./price.module.css";
import { PriceProps } from "./priceProps";

const Price = ({ children }: PriceProps): JSX.Element => {
  return <span className={styles.price}>{children} $</span>;
};

export default Price;
