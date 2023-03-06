import { useSelector, useDispatch } from 'react-redux'
import { getAddress } from 'features/walletAddress/walletAddressSlice'
import styles from './BaseInput.module.scss'


const BaseInput = (props) => {
  const dispatch = useDispatch()

const handleOnChange = (e) => {
    dispatch(getAddress(e.target.value))
    }
    return ( 
        <div className={styles.inputDiv}>
        <input className={styles.baseInput} name='walletAddress' onChange={handleOnChange} placeholder="enter your wallet address"/>
     </div>
     );
}
 
export default BaseInput;