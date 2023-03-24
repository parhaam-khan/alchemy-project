import { alchemy } from "alchemyConfig";
import Layout from "components/layout/Layout";
import { useEffect, useState } from "react";
import styles from './Nfts.module.scss';
import notFoundImg from 'assets/images/no-image.jpg';
import { useAppSelector } from "hooks";

const Nfts = (props:any) => {
    const[nftInfo,setNftInfo] = useState<any>({})
    const[isNftInfo,setIsNftInfo] = useState(false)
    const[nftsMetaData,setNftsMetaData] = useState<any>([])
    const inputValue = useAppSelector((state) => state.walletAddress.searchValue);
    const chain = useAppSelector((state) => state.chains.chain);

// console.log(nftsMetaData);

// const mainnetNfts = await alchemy
// .forNetwork(Network.ETH_MAINNET)
// .nft.getNftsForOwner(owner, { pageSize: 5 });

    useEffect(() => {
         alchemy.forNetwork(chain).nft.getNftsForOwner(inputValue).then((resp) => {
            setNftInfo(resp)
            setIsNftInfo(true)
            // console.log(resp);
        });
    },[inputValue])
       
    useEffect(() => {
        if(isNftInfo && nftInfo.ownedNfts){
            let nftMetaData:any = [];
            nftInfo.ownedNfts.map((item:any) => {
              alchemy.forNetwork(chain).nft.getNftMetadata(
                    item.contract.address,
                    item.tokenId
                  ).then((resp:any) => {
                    nftMetaData.push(resp)
                    setNftsMetaData([...nftMetaData])
                  });
            })
        }
        
    },[isNftInfo,nftInfo])

    return ( 
        <Layout>
            <div className={styles.nftsDiv}>
             {nftsMetaData?.map((el:any) => (
                <div className={styles.nftCard}>
                 <img className={styles.nftImage}
                  src={el.media.length > 0 && el.media[0].thumbnail ? el.media[0].thumbnail : notFoundImg} alt='nft'/>
                 <div className={styles.nftContent}>
                    <h2 className={styles.nftTitle}>{el.title ? el.title : 'no title'}</h2>
                    {/* <p className={styles.nftDesc}>{el.description}</p> */}
                 </div>
                </div>
             ))
             }
            </div>
        </Layout>
     );
}
 
export default Nfts;