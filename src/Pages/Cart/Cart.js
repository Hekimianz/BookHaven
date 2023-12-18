import styles from "./Cart.module.css";
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  getTotal,
  purchase,
  togglePurchase,
  getPurchasedStatus,
} from "../../features/Cart/CartSlice";

export default function Cart() {
  const cartItems = useSelector(getCart);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();
  const purchased = useSelector(getPurchasedStatus);

  window.scrollTo(0, 0);
  const items = cartItems.map((book) => {
    const price = book.isDiscounted ? book.discountedPrice : book.price;
    console.log(book.discountedPrice);

    return (
      <CartItem
        title={book.title}
        cover={book.cover}
        price={price * book.quantity}
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
            dispatch(purchase());
            setTimeout(() => {
              dispatch(togglePurchase());
            }, 2500);
          }}
          className={styles.buyBtn}
        >
          Buy
        </button>
      </div>
    </>
  );

  const purchaseScreen = (
    <div className={styles.purchased}>Thank you for your purchase!</div>
  );

  return (
    <div className={styles.cartCont}>
      {cartItems.length > 0 ? (
        cart
      ) : purchased ? (
        purchaseScreen
      ) : (
        <p className={styles.emptyCart}>Add books to your cart!</p>
      )}
    </div>
  );
}
