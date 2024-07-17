import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import About from "./Components/About.js";
import Body from "./Components/Body.js";
import Restaurants from "./Components/Restaurants.js";
import Contact from "./Components/Contact.js";
import { lazy, Suspense } from "react";
import Cart from "./Components/Cart.js";

const Grocery = lazy(() => import("./Components/Grocery"));
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants/>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);