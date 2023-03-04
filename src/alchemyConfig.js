const { Alchemy, Network } = require("alchemy-sdk");

const settings = {
    apiKey: "TKC_yfVqek8Uywl_DyIGw7bjFr4Vjo3-",
    network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);