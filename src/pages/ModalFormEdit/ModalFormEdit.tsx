import { useState, useEffect } from "react";
import SelectField from "../../components/common/form/selectField/selectField";
import TextFileld from "../../components/common/form/textField/textField";
import { useSelector } from "react-redux";
import { editUser, getCurrentCardData } from "../../store/cardsReducer";
import { useAppDispatch } from "../../hooks";

const ModalFormEdit = ({ cardId }: any) => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const currentCard = useSelector(getCurrentCardData(cardId));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentCard && !data) {
      setData({
        ...currentCard,
      });
    }
  }, [currentCard, data]);

  const isValid = 1;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      editUser({
        ...currentCard,
        title: data.title,
        price: data.price,
        description:data.description
      })
    );
    console.log("currentCard", currentCard);
  };

  const handleChange = (target: any) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextFileld
          label="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          name="title"
          placeholder={data.title}
        />
        <TextFileld
          label="price"
          type="text"
          value={data.price}
          onChange={handleChange}
          name="price"
          placeholder={data.price}
        />
        <TextFileld
          label="description"
          type="text"
          value={data.description}
          onChange={handleChange}
          name="description"
          placeholder={data.description}
        />
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalFormEdit;
