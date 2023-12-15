import styles from "./TopNav.module.css";
import { toggleMobileMenu, getMobileMenuStatus } from "./TopNavSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const TopNav = () => {
  const dispatch = useDispatch();

  const classNameFuncDesktop = ({ isActive }) =>
    isActive ? styles.desktopNav_itemActive : styles.desktopNav_itemNotActive;

  const classNameFuncMobile = ({ isActive }) =>
    isActive ? styles.mobileMenu_itemActive : styles.mobileMenu_itemNotActive;

  const mobileMenu = (
    <div
      className={styles.fullOverlay}
      onClick={(e) => {
        if (e.target.classList[0] === "TopNav_fullOverlay__CEwUy") {
          dispatch(toggleMobileMenu());
        }
      }}
    >
      <div className={styles.mobileMenu}>
        <span
          className="material-symbols-outlined"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          close
        </span>
        <NavLink
          to="/trending"
          className={classNameFuncMobile}
          onClick={() => dispatch(toggleMobileMenu())}
        >
          Trending Authors
        </NavLink>
        <NavLink
          to="/topRated"
          className={classNameFuncMobile}
          onClick={() => dispatch(toggleMobileMenu())}
        >
          Top Rated
        </NavLink>
        <NavLink
          to="/discounts"
          className={classNameFuncMobile}
          onClick={() => dispatch(toggleMobileMenu())}
        >
          Discounts
        </NavLink>
        <NavLink
          to="/about"
          className={classNameFuncMobile}
          onClick={() => dispatch(toggleMobileMenu())}
        >
          About
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logoTitle}>
          BookHaven
        </Link>
        <ul className={styles.desktopNav}>
          <NavLink to="/trending" className={classNameFuncDesktop}>
            Trending
          </NavLink>
          <NavLink to="/topRated" className={classNameFuncDesktop}>
            Top Rated
          </NavLink>
          <NavLink to="/discounts" className={classNameFuncDesktop}>
            Discounts
          </NavLink>
          <NavLink to="/about" className={classNameFuncDesktop}>
            About
          </NavLink>
          <NavLink to="/cart" className={classNameFuncDesktop}>
            Cart
          </NavLink>
        </ul>
        <span
          onClick={() => dispatch(toggleMobileMenu())}
          className={"material-symbols-outlined " + styles.mobileMenuIcon}
        >
          menu
        </span>
        {/* Toggle Menu For Mobile */}
        {useSelector(getMobileMenuStatus) ? mobileMenu : null}
      </nav>
    </>
  );
};

export default TopNav;
