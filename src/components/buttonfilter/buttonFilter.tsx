import { ButtonFilterProps } from "./buttonFilter.props";
import cn from "classnames";
import styles from "./buttonFilter.module.css"

export const ButtonFilter = ({ children }: ButtonFilterProps): JSX.Element => {
  return <div className={cn(styles.btn, {

  })

  }>{children}</div>;
};
