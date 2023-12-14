import { Outlet } from "react-router-dom";
import styles from "./BottomNav.module.css";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <div className={styles.nav}>
        <span
          onClick={() => navigate("/home")}
          className="material-symbols-outlined"
        >
          home
        </span>
        <span className="material-symbols-outlined">search</span>
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
