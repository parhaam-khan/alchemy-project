import { alchemy } from "alchemyConfig";
import Layout from "components/layout/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usdc } from "tokensContract";
import styles from "./AssetsBalance.module.scss";

const AssetsBalance = () => {
  const [tokenBalance, setTokenBalance] = useState({});
  const [isTokenBalance, setIsTokenBalance] = useState(false);
  console.log(isTokenBalance);
  const [nonZeroTokens, setNonZeroTokens] = useState([]);
  console.log(nonZeroTokens);
  const inputValue = useSelector((state) => state.walletAddress.searchValue);

  useEffect(() => {
    alchemy.core.getTokenBalances(inputValue).then((resp) => {
    //   console.log(resp);
      setTokenBalance(resp);
      setIsTokenBalance(true);
    });
  }, [inputValue]);

  useEffect(() => {
    if (isTokenBalance && tokenBalance) {
    setIsTokenBalance(false);
    //   let i = 1;
      let newList = [];
      const nonZeroBalances = tokenBalance.tokenBalances.filter(
        (token) => token.tokenBalance !== "0"
      );

      nonZeroBalances.forEach((token) => {
        let balance = token.tokenBalance;
         alchemy.core.getTokenMetadata(token.contractAddress).then((resp) => {
        //    console.log(resp);
          balance = balance / Math.pow(10, resp.decimals);
          balance = balance.toFixed(2);

          newList.push({
            tokenData: {...resp},
            balance,
          });
          setNonZeroTokens(newList);
        });
      })
        // console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`);
    }
  }, [isTokenBalance, tokenBalance]);

  return (
    <Layout>
    <div className={styles.assets}>
      {nonZeroTokens.map((token) => (
        <div className={styles.tokenInfo}>
          <div className={styles.tokenName}>{token.tokenData.name}</div>
          <div className={styles.tokenAmount}>
            {token.balance}
          <span>{token.tokenData.symbol}</span>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default AssetsBalance;
