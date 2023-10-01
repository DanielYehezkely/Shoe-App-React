import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './styles/reset.css';
import './styles/variables.css';
import './styles/utilities.css';
import './styles/index.css';
import './styles/media.css';
import SharedLayout from './components/sharedLayout';
import Shoes from './pages/Shoes';
import Shoe from './pages/Shoe';

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Shoes />,
      },
      {
        path: 'shoes/:shoeId',
        element: <Shoe />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;