import { useState } from "react";
import BtnBack from "../../components/buttonBack/btnBack";
 
import styles from "./createProduct.module.css";
import { useAppDispatch } from "../../hooks";
import { createCard } from "../../store/cardsReducer";
import TextFileld from "../../components/common/form/textField/textField";
import SelectField from "../../components/common/form/selectField/selectField";

const CreateProduct = (): JSX.Element => {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: +0,
    category: "",
    like: false,
  });

  const dispatch = useAppDispatch();

  console.log(data);

  const isValid = 1;

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const newData = {
      ...data,
    };
    dispatch(createCard(newData));
  };

  const handleChange = (target: any) => {
    console.log(target);

    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const options = [
    "electronics",
    "men's clothing",
    "jewelery",
    "women's clothing",
  ];

  return (
    <div className={styles.createProduct}>
      <div>Создание карточки</div>
      <div className={styles.createProduct_form}>
        <form
          className={styles.createProduct_formActive}
          onSubmit={handleSubmit}
        >
          <TextFileld
            label="title"
            type="text"
            value={data.title}
            onChange={handleChange}
            name="title"
          />
          <TextFileld
            label="description"
            type="text"
            value={data.description}
            onChange={handleChange}
            name="description"
          />
          <TextFileld
            label="price"
            type="text"
            value={data.price}
            onChange={handleChange}
            name="price"
          />
          <SelectField
            label="category"
            value={data.category}
            onChange={handleChange}
            defaultOption="electronics"
            options={options}
            name="category"
          />
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
      <BtnBack push={"Cards"} />
    </div>
  );
};

export default CreateProduct;
