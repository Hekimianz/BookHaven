import styles from "./Card.module.css";
export default function Card(props) {
  const { title, author, id, cover, price, rating } = props;
  return (
    <div className={id + " " + styles.cardCont}>
      <img src={cover} alt="book cover" className={styles.bookCover} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.author}>{author}</h3>
      </div>
      <div className={styles.bookDetails}>
        <p className={styles.price}>${price}</p>
        <span className={"material-symbols-outlined " + styles.starIcon}>
          star
        </span>
        <span className={styles.bookRating}>{rating}</span>
      </div>
      <button type="button" className={styles.buyBtn}>
        Add To Cart
      </button>
    </div>
  );
}
