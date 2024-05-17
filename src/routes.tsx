import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from "./page/ErrorPage";
import CharacterPage from "./page/CharacterPage";
import Home from './page/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: `/character/:itemId`,
      element: <CharacterPage />,
      errorElement: <ErrorPage />
    }
  ])