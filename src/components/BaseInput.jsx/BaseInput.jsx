import { useState } from 'react';
import styles from './BaseInput.module.scss'


const BaseInput = () => {
    const[state,setState] = useState({
        walletAddress:''
    })

const{walletAddress} = state;

const handleOnChange = (e) => {
    setState({...state,[e.target.name] : e.target.value})
    }
    return ( 
        <div className={styles.inputDiv}>
        <input className={styles.baseInput} name='walletAddress' onChange={handleOnChange} placeholder="enter your wallet address"/>
     </div>
     );
}
 
export default BaseInput;