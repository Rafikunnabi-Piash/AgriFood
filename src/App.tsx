/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
