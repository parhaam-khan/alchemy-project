import BaseInput from "components/BaseInput/BaseInput";
import { getSearchAddress } from "features/walletAddress/walletAddressSlice";
import styles from './Main.module.scss';
import eth from 'assets/images/ethereum.svg';
import arb from 'assets/images/arbitrum.svg';
import op from 'assets/images/optimism.svg';
import matic from 'assets/images/polygon.svg';
import { useAppDispatch, useAppSelector } from "hooks";
import cs from 'classnames';
import { getChain } from "features/chains/chainSlice";
import { Network } from "alchemy-sdk";


const Main = () => {
const dispatch = useAppDispatch();
const addressValue = useAppSelector((state) => state.walletAddress.addressValue);
const inputValue = useAppSelector((state) => state.walletAddress.searchValue);

const changeChainHandler = (name:any) => {
switch (name) {
case 'eth': dispatch(getChain(Network.ETH_MAINNET));
break;
case 'arb': dispatch(getChain(Network.ARB_MAINNET));
break;
case 'op': dispatch(getChain(Network.OPT_MAINNET));
break;
case 'matic': dispatch(getChain(Network.MATIC_MAINNET));
break;
default: 
 break
}
}

    return ( 
        <>
        <div className={styles.searchInput}>
        <BaseInput/>
        <button onClick={() => dispatch(getSearchAddress(addressValue ? addressValue: ''))} className={styles.searchBtn}>
         submit
        </button>
        </div>
        {inputValue && 
        <div className={styles.chains}>
        <img onClick={() => changeChainHandler('eth')} className={styles.chainImage} src={eth} alt='ethereum'/>
        <img onClick={() => changeChainHandler('arb')} className={styles.chainImageArb} src={arb} alt='arbitrum'/>
        <img onClick={() => changeChainHandler('op')} className={styles.chainImage} src={op} alt='optimism'/>
        <img onClick={() => changeChainHandler('matic')} className={cs(styles.chainImage,styles.maticImg)} src={matic} alt='polygon'/>
        </div>}
        </>
     );
}
 
export default Main;