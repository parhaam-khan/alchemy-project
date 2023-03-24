import { createBrowserRouter } from 'react-router-dom';
import Nfts from 'components/nfts/Nfts';
import App from 'App';
import AssetsBalance from 'components/assetsBalance/AssetsBalance';
import GasPrice from 'components/gasPrice/GasPrice';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "nfts",
        element: <Nfts/>,
      },
      {
        path: "assets",
        element: <AssetsBalance/>,
      },
      {
        path: "gas",
        element: <GasPrice/>,
      },
  ]);