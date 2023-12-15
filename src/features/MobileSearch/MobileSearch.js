import styles from "./MobileSearch.module.css";
import { toggleSearch } from "./MobileSearchSlice";
import { useDispatch } from "react-redux";
export default function MobileSearch() {
  const dispatch = useDispatch();
  return (
    <form className={styles.cont}>
      <input className={styles.searchBar} type="text" />
      <button className={styles.searchBtn} type="submit">
        Search
      </button>
      <span
        onClick={() => dispatch(toggleSearch())}
        className={"material-symbols-outlined " + styles.closeSearch}
      >
        close
      </span>
    </form>
  );
}
