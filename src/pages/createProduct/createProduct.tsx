import BtnBack from "../../components/buttonBack/btnBack";
import styles from "./createProduct.module.css";

const CreateProduct = (): JSX.Element => {
  return (
    <div className={styles.createProduct}>
      <div>Создание карточки</div>
      <div className={styles.createProduct_form}>
        <form className={styles.createProduct_formActive}>
          <div className={styles.createProduct_form_item}>
            <div className={styles.createProduct_label}>
              <label>title</label>
            </div>
            <input
              type="text"
              placeholder="Enter a title"
              className={styles.input}
            />
          </div>
          <div className={styles.createProduct_form_item}>
            <div className={styles.createProduct_label}>
              <label>description</label>
            </div>
            <input
              type="text"
              placeholder="Enter your description"
              className={styles.input}
            />
          </div>
          <div className={styles.createProduct_form_item}>
            <div className={styles.createProduct_label}>
              <label>price</label>
            </div>
            <input
              type="text"
              placeholder="Enter a price $"
              className={styles.input}
            />
          </div>
          <div className={styles.createProduct_form_item}>
            <div className={styles.createProduct_label}>
              <label>category</label>
            </div>
            <input
              type="text"
              placeholder="choose a category"
              className={styles.input}
            />
          </div>
        </form>
      </div>
      <BtnBack push={"Cards"} />
    </div>
  );
};

export default CreateProduct;
