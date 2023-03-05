import { alchemy } from "alchemyConfig";
import Layout from "components/layout/Layout";
import { useEffect, useState } from "react";
import styles from './Nfts.module.scss'
import notFoundImg from 'assets/images/no-image.jpg'

const Nfts = (props) => {
    const[nftInfo,setNftInfo] = useState({})
    const[isNftInfo,setIsNftInfo] = useState(false)
    const[nftsMetaData,setNftsMetaData] = useState([])
console.log(nftsMetaData);
    useEffect(() => {
         alchemy.nft.getNftsForOwner("0xshah.eth").then((resp) => {
            setNftInfo(resp)
            setIsNftInfo(true)
            // console.log(resp);
        });
    },[])
       
    useEffect(() => {
        if(isNftInfo && nftInfo.ownedNfts){
            let nftMetaData = [];
            nftInfo.ownedNfts.map((item) => {
              alchemy.nft.getNftMetadata(
                    item.contract.address,
                    item.tokenId
                  ).then((resp) => {
                    nftMetaData.push(resp)
                    setNftsMetaData([...nftMetaData])
                  });
            })
        }
        
    },[isNftInfo,nftInfo])

    return ( 
        <Layout>
            <div className={styles.nftsDiv}>
             {nftsMetaData?.map((el) => (
                <div className={styles.nftCard}>
                 <img className={styles.nftImage} src={el.media.length > 0 ? el.media[0].thumbnail : notFoundImg} alt='nft'/>
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