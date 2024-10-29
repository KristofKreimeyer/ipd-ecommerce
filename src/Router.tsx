import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'catalog', element: <Catalog /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
