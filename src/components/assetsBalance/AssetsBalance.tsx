import { Network } from "alchemy-sdk";
import { alchemy } from "alchemyConfig";
import Layout from "components/layout/Layout";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { usdc,op } from "tokensContract";
import styles from "./AssetsBalance.module.scss";

const AssetsBalance = () => {
  const [tokenBalance, setTokenBalance] = useState<any>({});
  const [isTokenBalance, setIsTokenBalance] = useState(false);
  const [nonZeroTokens, setNonZeroTokens] = useState([]);
  console.log(nonZeroTokens);
  const inputValue = useAppSelector((state) => state.walletAddress.searchValue);
  const chain = useAppSelector((state) => state.chains.chain);

  useEffect(() => {
    alchemy.forNetwork(chain).core.getTokenBalances(inputValue).then((resp:any) => {
    //   console.log(resp);
      setTokenBalance(resp);
      setIsTokenBalance(true);
    });
  }, [inputValue]);

  useEffect(() => {
    if (isTokenBalance && tokenBalance) {
    setIsTokenBalance(false);
    //   let i = 1;
      let newList:any = [];
      const nonZeroBalances = tokenBalance.tokenBalances.filter(
        (token:any) => token.tokenBalance !== "0"
      );

      nonZeroBalances.forEach((token:any) => {
        let balance = token.tokenBalance;
         alchemy.forNetwork(Network.ETH_MAINNET).core.getTokenMetadata(token.contractAddress).then((resp:any) => {
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
      {nonZeroTokens.map((token:any) => (
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
