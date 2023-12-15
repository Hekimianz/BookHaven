import styles from "./BottomNav.module.css";
import { useNavigate } from "react-router-dom";
import MobileSearch from "../MobileSearch/MobileSearch";
import {
  toggleSearch,
  getMobileSearchStatus,
} from "../MobileSearch/MobileSearchSlice";
import { useDispatch, useSelector } from "react-redux";

const BottomNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {useSelector(getMobileSearchStatus) ? <MobileSearch /> : null}
      {useSelector(getMobileSearchStatus) ? (
        <div
          onClick={(e) => {
            if (e.target.classList[0] === "BottomNav_fullOverlay__MpbrT") {
              dispatch(toggleSearch());
            }
          }}
          className={styles.fullOverlay}
        ></div>
      ) : null}
      <div className={styles.nav}>
        <span
          onClick={() => navigate("/")}
          className="material-symbols-outlined"
        >
          home
        </span>
        <span
          onClick={() => dispatch(toggleSearch())}
          className="material-symbols-outlined"
        >
          search
        </span>
        <span
          onClick={() => navigate("/cart")}
          className="material-symbols-outlined"
        >
          shopping_bag
        </span>
      </div>
    </>
  );
};

export default BottomNav;
