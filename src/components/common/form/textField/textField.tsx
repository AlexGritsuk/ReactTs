import { TextFieldProps } from "./textField.props";
import styles from "./textField.module.css";

const TextFileld = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}: TextFieldProps): JSX.Element => {
  const handleChange = ({ target }: any) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.textField}>
      <div className={styles.textField_label}>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default TextFileld;
