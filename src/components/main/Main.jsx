import BaseInput from "components/BaseInput/BaseInput";
import { getSearchAddress } from "features/walletAddress/walletAddressSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from './Main.module.scss';

const Main = () => {
const dispatch = useDispatch();
const addressValue = useSelector((state) => state.walletAddress.addressValue);
console.log(addressValue);
    return ( 
        <>
        <div className={styles.searchInput}>
        <BaseInput/>
        <button onClick={() => dispatch(getSearchAddress(addressValue ? addressValue: ''))} className={styles.searchBtn}>
         submit
        </button>
        </div>
        </>
     );
}
 
export default Main;