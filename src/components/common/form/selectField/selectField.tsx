import { SelectFieldProps } from "./selectField.props";
import styles from "./selectField.module.css";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name,
}: SelectFieldProps) => {
  const handleChange = ({ target }: any) => {
    onChange({
      name: target.name,
      value: target.value,
    });
  };

  return (
    <div className={styles.selectField}>
      <div className={styles.selectField_label}>
        <label htmlFor={name}>{label}</label>
      </div>
      <select
        className={styles.input}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={"option" + option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
