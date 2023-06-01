import { createBrowserRouter } from "react-router-dom";

import { getAllArticles,getArticlesFromCategory ,getOneArticles } from "../api";

import Root from "./Root";

import Article from "../pages/Article";
import Category from "../pages/Category";
import Checkout from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getAllArticles();
        },
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/:category",
        element: <Category />,
        loader: ({ params }) => {
          return getArticlesFromCategory(params.category);
        },
      },
      {
        path: "/article/:id",
        element: <Article />,
        loader: ({ params }) => {
          return getOneArticles(params.id);
        },
      },
    ],
  },
]);

export default router;