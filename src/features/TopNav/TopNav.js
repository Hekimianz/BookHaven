import styles from "./TopNav.module.css";
import {
  toggleMobileMenu,
  getMobileMenuStatus,
  toggleDesktopSearch,
  getDesktopSearchStatus,
} from "./TopNavSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setSearch } from "../Search/SearchSlice";
const TopNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const desktopSearch = (
    <li>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(toggleDesktopSearch());
          navigate("/results");
        }}
      >
        <input
          className={
            useSelector(getDesktopSearchStatus)
              ? styles.desktopSearchShown
              : styles.desktopSearchHidden
          }
          type="text"
          placeholder="Search book"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <button
          className={
            useSelector(getDesktopSearchStatus)
              ? styles.desktopSearchBtnShown
              : styles.desktopSearchBtnHidden
          }
          type="submit"
        >
          Search
        </button>
      </form>
    </li>
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
          {desktopSearch}
          <span
            onClick={() => dispatch(toggleDesktopSearch())}
            className={"material-symbols-outlined " + styles.desktopSearchIcon}
          >
            search
          </span>
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
