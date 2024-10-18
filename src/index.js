import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Routes, Route, Suspense } from "react-router-dom";
import About from "./Components/About.js";
import Body from "./Components/Body.js";
import Restaurants from "./Components/Restaurants.js";
import Contact from "./Components/Contact.js";
import Cart from "./Components/Cart.js";

const Grocery = React.lazy(() => import("./Components/Grocery"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurants/:resId" element={<Restaurants />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
  </BrowserRouter>
);
