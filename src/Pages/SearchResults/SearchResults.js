import Card from "../../Components/Card/Card";
import styles from "./SearchResults.module.css";

export default function SearchResults(props) {
  const books = props.data.map((book) => {
    return (
      <Card
        title={book.title}
        author={book.author.full}
        id={book.id}
        cover={book.image}
        price={book.price}
        rating={book.rating}
        key={book.id}
      />
    );
  });

  return <div className={styles.homeCont}>{books}</div>;
}
