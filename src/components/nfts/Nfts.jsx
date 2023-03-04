import { alchemy } from "alchemyConfig";
import { useEffect } from "react";

const Nfts = (props) => {
        const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");
        console.log(nfts);

    return ( 
        <div>
            nftssss
        </div>
     );
}
 
export default Nfts;