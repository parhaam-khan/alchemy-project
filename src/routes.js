import { createBrowserRouter } from 'react-router-dom';
import Nfts from 'components/nfts/Nfts';
import App from 'App';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/nfts",
        element: <Nfts/>,
      },
  ]);