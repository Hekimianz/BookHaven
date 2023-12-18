import styles from "./Home.module.css";
import Card from "../../Components/Card/Card";
import { useSelector } from "react-redux";
import { getBooks } from "./HomeSlice";
export default function Home() {
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
