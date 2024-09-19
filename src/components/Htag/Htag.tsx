import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";
import cn from "classnames";

export const Htag = ({
  tag,
  children,
  className,
  ...props
}: HtagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.h, {
        [styles.h1]: (tag = "h1"),
        [styles.h2]: (tag = "h2"),
        [styles.h3]: (tag = "h3"),
      })}
      {...props}
    >
      {children}
    </div>
  );
};
