import styles from "./Layout.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1 className={styles.projectName}>Aurora</h1>
        </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>assests</li>
          <li className={styles.menuItem}>NFTs</li>
          <li className={styles.menuItem}>Gas price</li>
          <li className={styles.menuItem}>transactions</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
