import { useAppSelector } from "hooks";
import { NavLink } from "react-router-dom";
import styles from "./Layout.module.scss";
import cs from 'classnames';

const Header = () => {
  const inputValue = useAppSelector((state) => state.walletAddress.searchValue);
  const chain = useAppSelector((state) => state.chains.chain);
  const startAddress = inputValue.slice(0,6);
  const endAddress = inputValue.slice(-4,-1) + inputValue.slice(-1);

  return (
    <div className={styles.header}>
      <div className={styles.currentChain}>
        <div className={cs(styles.chainAndAddress,inputValue && styles.extraWidth)}>
          <div className={styles.innerDiv}>
          {inputValue &&
        <span>
        {startAddress}...{endAddress}
        </span>}
        <span>
        {chain}
        </span>
          </div>
        </div>
      </div>
        <div className={styles.logo}>
            <h1 className={styles.projectName}>Aurora</h1>
        </div>
      {inputValue !== "" &&
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
          {/* <li>
            <NavLink to="/gas" className={styles.menuItem}>
            Gas price
            </NavLink>
            </li>
          <li>
            <NavLink to="/transactions" className={styles.menuItem}>
            transactions
            </NavLink>
            </li> */}
        </ul>
      </nav>}
    </div>
  );
};

export default Header;
