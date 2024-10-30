import React, { Suspense, useContext } from "react"; 
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./page/About.js";
import Body from "./Components/Body.js";
import Restaurants from "./Components/Restaurants.js";
import Contact from "./Components/Contact.js";
import Cart from "./Components/Cart.js";
import Login from "./page/Login.js";
import AppProvider, { AppContext } from "./context/AppContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AppContext);
  return token ? children : <Navigate to="/login" replace />;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/" 
            element={<ProtectedRoute><App /></ProtectedRoute>}
          >
            <Route index element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/restaurants/:resId" element={<Restaurants />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </AppProvider>
  </BrowserRouter>
);


