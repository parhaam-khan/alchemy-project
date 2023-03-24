import { AlchemyMultichainClient } from "alchemy-multichain-client";
import { Network } from "alchemy-sdk";


const defaultConfig = {
    apiKey: "TKC_yfVqek8Uywl_DyIGw7bjFr4Vjo3-",
    network: Network.ARB_MAINNET,
};


const overrides = {
    // TODO: Replace with your API keys.
    [Network.ETH_MAINNET]: { apiKey: 'TKC_yfVqek8Uywl_DyIGw7bjFr4Vjo3-', maxRetries: 10 }, 
    [Network.MATIC_MAINNET]: { apiKey: 'TKC_yfVqek8Uywl_DyIGw7bjFr4Vjo3-', maxRetries: 10 },  
    [Network.OPT_MAINNET]: { apiKey: 'TKC_yfVqek8Uywl_DyIGw7bjFr4Vjo3-', maxRetries: 10 }
  };

  export const alchemy = new AlchemyMultichainClient(defaultConfig, overrides);
// export const alchemy = new Alchemy(defaultConfig);