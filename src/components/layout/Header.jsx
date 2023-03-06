import { NavLink } from "react-router-dom";
import styles from "./Layout.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1 className={styles.projectName}>Aurora</h1>
        </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
        <li>
            <NavLink to="/" end className={styles.menuItem}>
            home
            </NavLink>
            </li>
          <li>
            <NavLink to="/assets" className={styles.menuItem}>
            assests
            </NavLink>
            </li>
          <li>
            <NavLink to="/nfts" className={styles.menuItem}>
            NFTs
            </NavLink>
            </li>
          <li>
            <NavLink to="/gas" className={styles.menuItem}>
            Gas price
            </NavLink>
            </li>
          <li>
            <NavLink to="/transactions" className={styles.menuItem}>
            transactions
            </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
