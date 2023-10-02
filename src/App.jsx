import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './styles/reset.css';
import './styles/variables.css';
import './styles/index.css';
import './styles/media.css';

import SharedLayout from './components/sharedLayout';
import Shoes from './pages/Shoes';
import Shoe from './pages/Shoe';
import AddShoe from './pages/AddShoe';
import EditShoe from './pages/EditShoe';
import Home from './pages/Home';

const routes = [
  {
    path: 'home',
    element: <Home />
  },
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Shoes />,
      },
      {
        path: 'shoes/:shoeId/edit',
        element: <EditShoe />,
      },
      {
        path: 'shoes/:shoeId',
        element: <Shoe />,
      },
      {
        path: 'add',
        element: <AddShoe />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;