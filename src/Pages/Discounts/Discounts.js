import styles from "../Home/Home.module.css";
import { getBooks } from "./DiscountsSlice";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
export default function Discounts() {
  const books = useSelector(getBooks).map((book) => {
    return (
      <Card
        title={book.title}
        author={book.author.full}
        id={book.id}
        cover={book.image}
        price={book.price}
        rating={book.rating}
        isDiscounted={book.isDiscounted}
        discountedPrice={book.discountedPrice}
        key={book.id}
      />
    );
  });

  return <div className={styles.homeCont}>{books}</div>;
}
