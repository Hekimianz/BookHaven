import styles from "./CartItem.module.css";
import { delFromCart, changeQuantity } from "../../features/Cart/CartSlice";
import { useDispatch } from "react-redux";
export default function CartItem(props) {
  const { title, cover, price, id, quantity } = props;
  const dispatch = useDispatch();
  return (
    <div className={styles.itemCont}>
      <img className={styles.itemCover} src={cover} alt="book cover" />
      <h2 className={styles.itemTitle}>{title}</h2>
      <input
        className={styles.itemQuant}
        type="number"
        min="1"
        defaultValue={quantity}
        onBlur={(e) => {
          if (e.target.value < 1) {
            e.target.value = 1;
          } else {
            e.target.value = Math.ceil(e.target.value);
          }
        }}
        onChange={(e) => {
          if (e.target.value > 0) {
            dispatch(
              changeQuantity({ id, quantity: Math.ceil(e.target.value) })
            );
          } else if (e.target.value < 1) {
            dispatch(changeQuantity({ id, quantity: 1 }));
          }
        }}
      />
      <p className={styles.itemPrice}>${price}</p>
      <span
        onClick={() => dispatch(delFromCart(id))}
        className={"material-symbols-outlined " + styles.delItem}
      >
        close
      </span>
    </div>
  );
}
