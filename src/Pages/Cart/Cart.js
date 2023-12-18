import styles from "./Cart.module.css";
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";
import {
  getCart,
  getTotal,
  purchase,
  getPurchasedStatus,
  togglePurchased,
} from "../../features/Cart/CartSlice";
import { useDispatch } from "react-redux";
export default function Cart() {
  const cartItems = useSelector(getCart);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();
  let purchased = false;
  window.scrollTo(0, 0);
  const items = cartItems.map((book) => {
    return (
      <CartItem
        title={book.title}
        cover={book.cover}
        price={book.price * book.quantity}
        id={book.id}
        quantity={book.quantity}
        key={book.id}
      />
    );
  });

  const cart = (
    <>
      {items}
      <div className={styles.totalCont}>
        <h2 className={styles.total}>Total: ${total.toFixed(2)}</h2>
        <button
          onClick={() => {
            purchased = true;
            dispatch(purchase());
            setTimeout(() => {
              purchased = false;
              console.log(purchased);
            }, 1000);
            console.log(purchased);
          }}
          className={styles.buyBtn}
        >
          Buy
        </button>
      </div>
    </>
  );

  return (
    <div className={styles.cartCont}>
      {purchased ? (
        <div className={styles.purchased}>Thank you for your purchase!</div>
      ) : null}
      {cartItems.length > 0 ? (
        cart
      ) : !purchased ? (
        <p className={styles.emptyCart}>Add books to your cart!</p>
      ) : null}
    </div>
  );
}
