import styles from "./Card.module.css";
import { addToCart } from "../../features/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  const {
    title,
    author,
    id,
    cover,
    price,
    rating,
    isDiscounted,
    discountedPrice,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={id + " " + styles.cardCont}>
      <img
        src={cover}
        alt="book cover"
        className={styles.bookCover}
        onClick={() => {
          navigate(`/book/${id}`);
        }}
      />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.author}>{author}</h3>
      </div>
      <div className={styles.bookDetails}>
        <p className={isDiscounted ? styles.discountedPrice : styles.price}>
          ${price}
        </p>
        {isDiscounted ? (
          <p className={styles.priceWithDiscount}>${discountedPrice}</p>
        ) : null}
        <span className={"material-symbols-outlined " + styles.starIcon}>
          star
        </span>
        <span className={styles.bookRating}>{rating}</span>
      </div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              title,
              id,
              cover,
              price,
              isDiscounted,
              discountedPrice,
              quantity: 1,
            })
          )
        }
        type="button"
        className={styles.buyBtn}
      >
        Add To Cart
      </button>
    </div>
  );
}
