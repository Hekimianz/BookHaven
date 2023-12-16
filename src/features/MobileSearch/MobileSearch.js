import styles from "./MobileSearch.module.css";
import { toggleSearch } from "./MobileSearchSlice";
import { useDispatch } from "react-redux";
import { setSearch } from "../Search/SearchSlice";
import { useNavigate } from "react-router-dom";
export default function MobileSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(toggleSearch());
        navigate("/results");
      }}
      className={styles.cont}
    >
      <input
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className={styles.searchBar}
        type="text"
      />
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
