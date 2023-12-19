import { useParams } from "react-router-dom";
import data from "../../data";
import styles from "./Book.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/CartSlice";
export default function Book() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const book = data.filter((book) => book.id === bookId)[0];
  const genres = (
    <div className={styles.genresCont}>
      {book.genres.map((genre) => {
        return (
          <span key={genre} className={styles.genre}>
            {genre}
          </span>
        );
      })}
    </div>
  );
  return (
    <div className={styles.cont}>
      <h1 className={styles.title}>{book.title}</h1>
      <img className={styles.cover} alt="book cover" src={book.image} />
      <div className={styles.details}>
        <div className={styles.ratingsDet}>
          <div className={styles.ratingsCont}>
            <div className={styles.starRatingCont}>
              <span id={styles.starIcon} className="material-symbols-outlined">
                star
              </span>
              <p className={styles.rating}>{book.rating}</p>
            </div>
            <span className={styles.ratings}>
              ({book.ratings.toLocaleString()} Ratings)
            </span>
          </div>
          <p
            className={
              book.isDiscounted ? styles.discountedPrice : styles.price
            }
          >
            ${book.isDiscounted ? book.discountedPrice : book.price}
          </p>
        </div>
        {genres}
        <p className={styles.synopsis}>{book.details}</p>
      </div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              title: book.title,
              id: book.id,
              cover: book.image,
              price: book.price,
              isDiscounted: book.isDiscounted,
              discountedPrice: book.discountedPrice,
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
